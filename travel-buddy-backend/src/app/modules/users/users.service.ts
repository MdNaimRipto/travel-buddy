import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IAuthUser, IUser } from "./users.interface";
import { Users } from "./users.schema";
import { encryptData, generateUID } from "./users.utils";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import config from "../../../config/config";
import { Secret } from "jsonwebtoken";

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
    throw new ApiError(httpStatus.CONFLICT, "User Already Exists");
  }
  // Save UID
  payload.uid = uid as string;

  const user = await Users.create(payload);

  const { _id } = user;

  const accessToken = jwtHelpers.createToken(
    {
      id: _id,
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

export const UserService = { userRegister };
