export const envConfig = {
  secret_key: process.env.DB_SECRET_KEY as string,
  image_api_key: process.env.DB_IMAGE_KEY as string,
  admin_uid: process.env.ADMIN_UID,
};
