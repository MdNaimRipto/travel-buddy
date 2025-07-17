export const envConfig = {
  secret_key: process.env.SECRET_KEY as string,
  image_api_key: process.env.IMAGE_KEY as string,
  google_id: process.env.GOOGLE_ID as string,
  google_secret: process.env.GOOGLE_SECRET as string,
  facebook_id: process.env.FACEBOOK_ID as string,
  facebook_secret: process.env.FACEBOOK_SECRET as string,
  twitter_id: process.env.TWITTER_ID as string,
  twitter_secret: process.env.TWITTER_SECRET as string,
  base_url: process.env.BASE_URL as string,
};
