import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IAuthUser, ILoginUser, IUser } from "./users.interface";
import { Users } from "./users.schema";
import { encryptData, generateUID } from "./users.utils";
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
  // Check UID Exists or Not
  const isUIDExists = await Users.findOne({ uid: uid });
  if (isUIDExists) {
    throw new ApiError(
      httpStatus.CONFLICT,
      "Something went wrong! Please try again",
    );
  }
  // Save UID
  payload.uid = uid as string;

  const user = await Users.create(payload);

  const { uid: userUid } = user;

  const accessToken = jwtHelpers.createToken(
    {
      id: userUid,
    },
    config.jwt_secret as Secret,
    config.jwt_expires_in as string,
  );

  const encryptedUserData = encryptData(user as any);

  return {
    token: accessToken,
    userData: encryptedUserData,
  };
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

  const accessToken = jwtHelpers.createToken(
    {
      id: isExists.uid,
    },
    config.jwt_secret as Secret,
    config.jwt_expires_in as string,
  );

  const encryptedUserData = encryptData(isExists as any);

  return {
    token: accessToken,
    userData: encryptedUserData,
  };
};

export const UserService = { userRegister, userLogin };
