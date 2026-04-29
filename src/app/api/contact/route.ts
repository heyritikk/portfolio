import { NextResponse } from "next/server";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export async function POST(request: Request) {
  try {
    const { email, message, website } = await request.json();

    if (website) {
      // Honeypot field: silently accept to avoid tipping off bots.
      return NextResponse.json({ success: true });
    }

    if (!email || !message) {
      return NextResponse.json(
        { success: false, message: "Email and message are required." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return NextResponse.json(
        { success: false, message: "Server is not configured for contact form." },
        { status: 500 }
      );
    }

    const upstreamResponse = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        email,
        message,
      }),
      cache: "no-store",
    });

    const result = await upstreamResponse.json();
    if (!upstreamResponse.ok || !result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Failed to submit contact form.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
