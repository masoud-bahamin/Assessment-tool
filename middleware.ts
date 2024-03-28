import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  try {
    const token = cookies().get("token");
    if (token) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("signin", req.url));
    }
  } catch (error) {
    console.log("middleware page => ", error);
  }
}

export const config = {
  matcher: "/dashboard",
};
