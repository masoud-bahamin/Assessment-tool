import { sign, verify } from "jsonwebtoken";

const secretKey = "kljhjkhjkxcv";

export function createToken(email: string) {
  try {
    const token = sign(email, secretKey);
    return token;
  } catch (error) {
    console.log("error tokenCongigs page", error);
  }
}

export function verifyToken(token: string) {
  try {
    const email = verify(token, secretKey);
    return email;
  } catch (error) {
    console.log("error tokenCongigs page", error);
    return false;
  }
}
