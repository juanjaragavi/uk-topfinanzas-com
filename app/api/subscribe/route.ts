import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email_address, first_name, last_name, ...fields } =
    await request.json();

  if (!email_address || !first_name) {
    return NextResponse.json(
      { error: "Email and first name are required" },
      { status: 400 }
    );
  }

  const API_KEY = process.env.NEXT_PUBLIC_KIT_API_KEY;
  const API_URL = process.env.KIT_API_URL || "https://api.kit.com/v4/subscribers";

  if (!API_KEY || !API_URL) {
    return NextResponse.json(
      { error: "API key or URL is not configured" },
      { status: 500 }
    );
  }

  const data = {
    email: email_address,
    first_name,
    last_name,
    fields,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": API_KEY,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData },
        { status: response.status }
      );
    }

    const responseData = await response.json();
    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error("Error subscribing user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
