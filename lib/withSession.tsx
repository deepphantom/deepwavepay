// lib/session.js
import IronSessionOptions from "iron-session";

export const sessionOptions = {
  password: process.env.SESSION_SECRET, // Replace with your own secret key
  cookieName: "your-cookie-name",
  // If you want to use different cookie options
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

// This is where we specify the typings of req.session.*
declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
      admin?: boolean;
    };
  }
}
