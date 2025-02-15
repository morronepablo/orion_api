// import { dbConnect } from "@/lib/dbConnect";

// export async function GET() {
//   await dbConnect();
//   return Response.json({ message: "message" }, { status: 200 });
// }

import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";

export const dynamic = "force-dynamic";

export async function GET() {
  await dbConnect();
  return NextResponse.json({ message: "Connected successfully" });
}
