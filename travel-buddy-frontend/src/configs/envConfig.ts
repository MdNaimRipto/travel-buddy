export const envConfig = {
  secret_key: process.env.DB_SECRET_KEY as string,
  image_api_key: process.env.DB_IMAGE_KEY as string,
  admin_uid: process.env.DB_ADMIN_UID as string,
  google_id: process.env.DB_GOOGLE_ID as string,
  google_secret: process.env.DB_GOOGLE_SECRET as string,
};
