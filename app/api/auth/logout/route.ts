import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const myCookies = cookies();
    myCookies.delete("token");
    return NextResponse.json({ resualt: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ resualt: false }, { status: 500 });
  }
}
