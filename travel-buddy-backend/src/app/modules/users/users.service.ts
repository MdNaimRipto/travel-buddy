import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import {
  IAuthUser,
  ICheckUserExists,
  IForgetPasswordValidator,
  ILoginUser,
  IUpdatePasswordValidator,
  IUser,
  linkedProvidersEnums,
} from "./users.interface";
import { Users } from "./users.schema";
import { encryptData, generateAuthToken, generateUID } from "./users.utils";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import config from "../../../config/config";
import { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";

const userRegister = async (payload: IUser): Promise<IAuthUser> => {
  const { email, contactNumber, role } = payload;

  const isExistsUser = await Users.findOne({
    $or: [{ email }, { contactNumber }],
  });
  if (isExistsUser) {
    throw new ApiError(httpStatus.CONFLICT, "Email or Contact Already Exists");
  }

  const uid = generateUID(role);
  const isUIDExists = await Users.findOne({ uid: uid });
  if (isUIDExists) {
    throw new ApiError(
      httpStatus.CONFLICT,
      "Something went wrong! Please try again",
    );
  }
  payload.uid = uid as string;

  payload.linkedProviders = ["CUSTOM"];

  const user = await Users.create(payload);

  return generateAuthToken(user as any);
};

const userLogin = async (payload: ILoginUser): Promise<IAuthUser> => {
  const { email, password } = payload;

  const isExists = await Users.findOne({ email: email });

  if (!isExists) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid Email Or Password");
  }

  const checkPassword = await bcrypt.compare(password, isExists.password);

  if (!checkPassword) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid Email Or Password");
  }

  return generateAuthToken(isExists as any);
};

const checkUserForProviderLogin = async (
  payload: ICheckUserExists,
): Promise<IAuthUser | null> => {
  const { authMethod, email } = payload;

  const isExistsUser = await Users.findOne({ email });
  if (!isExistsUser) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Dose Not Exists!");
  }

  const linkedProviders = isExistsUser.linkedProviders;

  if (isExistsUser && !linkedProviders.includes(authMethod)) {
    linkedProviders.push(authMethod);
    const updatedUser = await Users.findOneAndUpdate({ email }, isExistsUser, {
      new: true,
    });
    return generateAuthToken(updatedUser as any);
  }

  if (isExistsUser && linkedProviders.includes(authMethod)) {
    return generateAuthToken(isExistsUser as any);
  }

  return null;
};

const providerLogin = async (
  payload: IUser,
  authMethod: linkedProvidersEnums,
): Promise<IAuthUser> => {
  const { email, role } = payload;

  const isExistsUser = await Users.findOne({ email });
  if (isExistsUser) {
    const linkedProviders = isExistsUser.linkedProviders;
    if (!linkedProviders.includes(authMethod)) {
      linkedProviders.push(authMethod);
      const updatedUser = await Users.findOneAndUpdate(
        { email },
        isExistsUser,
        {
          new: true,
        },
      );
      return generateAuthToken(updatedUser as any);
    }

    if (linkedProviders.includes(authMethod)) {
      return generateAuthToken(isExistsUser as any);
    }
  }

  const uid = generateUID(role);
  const isUIDExists = await Users.findOne({ uid: uid });
  if (isUIDExists) {
    throw new ApiError(
      httpStatus.CONFLICT,
      "Something went wrong! Please try again",
    );
  }
  payload.uid = uid as string;

  payload.linkedProviders = ["CUSTOM", authMethod];

  const user = await Users.create(payload);

  return generateAuthToken(user as any);
};

const updateUser = async (
  userID: string,
  payload: Partial<IUser>,
  token: string,
): Promise<string | null> => {
  jwtHelpers.jwtVerify(token, config.jwt_secret as Secret);

  const isExistsUser = await Users.findById({ _id: userID });
  if (!isExistsUser) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not Found");
  }

  const { role, uid, location, ...updatePayload } = payload;

  if (role !== undefined || uid !== undefined) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Permission Denied! Please Try Again.",
    );
  }

  if (payload.email) {
    const isExists = await Users.findOne({ email: payload.email });
    if (isExists) {
      throw new ApiError(
        httpStatus.FORBIDDEN,
        "Email Already Exists! Try Another One.",
      );
    }
    updatePayload.email = payload.email;
  }

  if (payload.contactNumber) {
    const isExists = await Users.findOne({
      contactNumber: payload.contactNumber,
    });
    if (isExists) {
      throw new ApiError(
        httpStatus.FORBIDDEN,
        "Contact Number Already Exists! Try Another One.",
      );
    }
    updatePayload.contactNumber = payload.contactNumber;
  }

  if (payload.password) {
    const isPreviousPass = await bcrypt.compare(
      payload.password,
      isExistsUser.password as string,
    );

    if (isPreviousPass) {
      throw new ApiError(
        httpStatus.FORBIDDEN,
        "New Password Cannot be The Previous Password",
      );
    }
    const newPassword = await bcrypt.hash(
      payload.password,
      Number(config.salt_round),
    );
    updatePayload.password = newPassword;
  }

  if (location && Object.keys(location).length > 0) {
    Object.keys(location).map(key => {
      const locationsKey = `location.${key}`;
      (updatePayload as any)[locationsKey] =
        location[key as keyof typeof location];
    });
  }

  const user = await Users.findOneAndUpdate({ _id: userID }, updatePayload, {
    new: true,
  });
  const updatedUser = encryptData(user as any);

  return updatedUser;
};

//* Forgot Password Part-1 Find user via email
const findUserForForgotPassword = async (
  email: string,
): Promise<IForgetPasswordValidator> => {
  const user = await Users.findOne(
    { email: email },
    {
      _id: 0,
      email: 1,
    },
  ).lean();
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not Found");
  }

  return user;
};

//* Forgot Password Part-2
const forgotPassword = async (
  payload: IUpdatePasswordValidator,
): Promise<string | null> => {
  const { email, password } = payload;
  const isExistsUser = await Users.findOne({ email: email });
  if (!isExistsUser) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not Found");
  }

  const isPreviousPass = await bcrypt.compare(
    password,
    isExistsUser.password as string,
  );

  if (isPreviousPass) {
    throw new ApiError(
      httpStatus.FORBIDDEN,
      "New Password Cannot be The Previous Password",
    );
  }
  const newPass = await bcrypt.hash(password, Number(config.salt_round));
  payload.password = newPass;

  const updatedUser = await Users.findOneAndUpdate({ email: email }, payload, {
    new: true,
  });

  const result = encryptData(updatedUser as any);

  return result;
};

export const UserService = {
  userRegister,
  userLogin,
  checkUserForProviderLogin,
  providerLogin,
  updateUser,
  findUserForForgotPassword,
  forgotPassword,
};
