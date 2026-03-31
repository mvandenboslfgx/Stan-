import { NextResponse } from "next/server";

type ContactPayload = {
  naam?: string;
  email?: string;
  bericht?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const naam = body.naam?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const bericht = body.bericht?.trim() ?? "";

  if (!naam || !email || !bericht) {
    return NextResponse.json(
      { error: "Vul alle velden in." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Vul een geldig e-mailadres in." },
      { status: 400 },
    );
  }

  return NextResponse.json({ success: true });
}
