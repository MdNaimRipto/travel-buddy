import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.NODE_ENV as string,
  port: process.env.PORT as string,
  database_url: process.env.DATABASE_URL as string,
  salt_round: process.env.SALT_ROUND as string,
  anonymous_user_uid: process.env.ANONYMOUS_USER_UID as string,
  admin_uid: process.env.ADMIN_UID as string,
  jwt_secret: process.env.JWT_SECRET as string,
  jwt_expires_in: process.env.JWT_EXPIRES_IN as string,
  pusher_app_id: process.env.PUSHER_APP_ID as string,
  pusher_secret: process.env.PUSHER_SECRET as string,
  pusher_key: process.env.PUSHER_KEY as string,
};
