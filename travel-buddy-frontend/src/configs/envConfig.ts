export const envConfig = {
  secret_key: process.env.SECRET_KEY as string,
  image_api_key: process.env.IMAGE_KEY as string,
  admin_uid: process.env.ADMIN_UID as string,
  google_id: process.env.GOOGLE_ID as string,
  google_secret: process.env.GOOGLE_SECRET as string,
  base_url: process.env.BASE_URL as string,
};
