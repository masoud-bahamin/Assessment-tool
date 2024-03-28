import { hash, compare } from "bcryptjs";

const salt = 12;

export async function hashPassword(pass: string) {
  const hashedPass = await hash(pass, salt);
  return hashedPass;
}

export async function comparePassword(pass: string, hashPass: string) {
  const isEqual = await compare(pass, hashPass);
  return isEqual;
}
