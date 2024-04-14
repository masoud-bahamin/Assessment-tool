import resultModel from "@/models/TestResult";
import connectToDb from "@/utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await resultModel.find({});
    return NextResponse.json({ message: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { massage: "server error", error },
      { status: 500 }
    );
  }
}
export async function POST(req: NextRequest) {
  try {
    connectToDb();
    const body = await req.json();
    const result = await resultModel.create(body);
    return NextResponse.json({ message: "success", body }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { massage: "server error", error },
      { status: 500 }
    );
  }
}
