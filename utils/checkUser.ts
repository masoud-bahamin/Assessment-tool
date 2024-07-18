import { cookies } from "next/headers";
import connectToDb from "./connectToDb";
import { verifyToken } from "./tokenConfigs";
import userModel from "@/models/userModel";

export async function getUserInfoFromToken() {
  try {
    connectToDb();
    const allCookie = cookies();
    const token = allCookie.get("token")?.value;

    if (!token) {
      return null;
    }
    const email = verifyToken(token);
    if (!email) {
      return null;
    }
    const userInfo = await userModel
      .findOne({ email }, "-password")
      .populate("Tests")
      .populate("TestsResult")
      .lean();
    return userInfo;
  } catch (error) {
    return null;
  }
}

export async function isAdmin() {
  const allCookie = cookies();
  const token = allCookie.get("token")?.value;

  if (!token) {
    return false;
  }
  connectToDb();
  const email = verifyToken(token);
  if (!email) {
    return false;
  }
  const userInfo = await userModel.findOne({ email }).populate("Tests").lean();
  if (userInfo.role !== "ADMIN") {
    return false;
  }
  return true;
}

export async function isTeacher() {
  const allCookie = cookies();
  const token = allCookie.get("token")?.value;

  if (!token) {
    return false;
  }
  connectToDb();
  const email = verifyToken(token);
  if (!email) {
    return false;
  }
  const userInfo = await userModel.findOne({ email }).populate("Tests").lean();
  if (userInfo.role !== "TEACHER") {
    return false;
  }
  return true;
}
