import { NextRequest, NextResponse } from "next/server";

// This is a portfolio/demo site — form submissions are intentionally NOT
// forwarded anywhere. Do not wire this up to a real lead pipeline.
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (
    !body ||
    typeof body !== "object" ||
    !("visitor_name" in body) ||
    !("visitor_phone" in body)
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  return NextResponse.json({ ok: true }, { status: 200 });
}
