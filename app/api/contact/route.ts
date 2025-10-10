import { NextResponse } from "next/server";

import { BRAND_STATIC_FIELDS } from "@/lib/constants";

const BREVO_API_BASE_URL = "https://api.brevo.com/v3";
const CONTACT_LIST_IDS = [9, 5];

interface ContactRequestBody {
  name?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  acceptTerms?: unknown;
  utm_source?: unknown;
  utm_medium?: unknown;
  utm_campaign?: unknown;
  utm_term?: unknown;
  utm_content?: unknown;
  source?: unknown;
  medium?: unknown;
  campaign?: unknown;
  term?: unknown;
  content?: unknown;
  Pais?: unknown;
  Marca?: unknown;
  pais?: unknown;
  marca?: unknown;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const toNonEmptyString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const lastName =
      typeof body.lastName === "string" ? body.lastName.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const acceptTerms = body.acceptTerms === true;

    const utmSource =
      toNonEmptyString(body.source) || toNonEmptyString(body.utm_source);
    const utmMedium =
      toNonEmptyString(body.medium) || toNonEmptyString(body.utm_medium);
    const utmCampaign =
      toNonEmptyString(body.campaign) || toNonEmptyString(body.utm_campaign);
    const utmTerm =
      toNonEmptyString(body.term) || toNonEmptyString(body.utm_term);
    const utmContent =
      toNonEmptyString(body.content) || toNonEmptyString(body.utm_content);
    const pais =
      toNonEmptyString(body.Pais) ||
      toNonEmptyString(body.pais) ||
      BRAND_STATIC_FIELDS.Pais;
    const marca =
      toNonEmptyString(body.Marca) ||
      toNonEmptyString(body.marca) ||
      BRAND_STATIC_FIELDS.Marca;

    if (!name || !lastName || !email || !phone || !message || !acceptTerms) {
      console.error("[Contact API] Missing required fields", body);
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      console.error("[Contact API] Invalid email format", email);
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 },
      );
    }

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("[Contact API] Missing BREVO_API_KEY environment variable");
      return NextResponse.json(
        { message: "Server configuration error. Please contact support." },
        { status: 500 },
      );
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const extId = `topfinanzas-uk-contact-${timestamp}`;

    const attributes: Record<string, string> = {
      FIRSTNAME: name,
      LASTNAME: lastName,
      COUNTRIES: "United Kingdom",
    };

    if (phone) {
      attributes.SMS = phone;
    }

    attributes.CONSENT = "1";
    attributes.PAIS = pais;
    attributes.MARCA = marca;

    if (utmSource) {
      attributes.UTM_SOURCE = utmSource;
      attributes.SOURCE = utmSource;
    }
    if (utmMedium) {
      attributes.UTM_MEDIUM = utmMedium;
      attributes.MEDIUM = utmMedium;
    }
    if (utmCampaign) {
      attributes.UTM_CAMPAIGN = utmCampaign;
      attributes.CAMPAIGN = utmCampaign;
    }
    if (utmTerm) {
      attributes.UTM_TERM = utmTerm;
      attributes.TERM = utmTerm;
    }
    if (utmContent) {
      attributes.UTM_CONTENT = utmContent;
      attributes.CONTENT = utmContent;
    }

    const contactPayload = {
      email,
      attributes,
      ext_id: extId,
      updateEnabled: true,
      listIds: CONTACT_LIST_IDS,
    };

    console.log("[Contact API] Sending contact to Brevo", {
      email,
      listIds: CONTACT_LIST_IDS,
    });

    const brevoResponse = await fetch(`${BREVO_API_BASE_URL}/contacts`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(contactPayload),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json().catch(() => ({}));
      console.error("[Contact API] Brevo error", {
        status: brevoResponse.status,
        error: errorData,
      });
      return NextResponse.json(
        {
          message:
            errorData?.message ||
            "Failed to process contact request. Please try again later.",
        },
        { status: brevoResponse.status },
      );
    }

    console.log("[Contact API] Contact synced with Brevo", {
      email,
      extId,
      listIds: CONTACT_LIST_IDS,
    });

    if (message) {
      try {
        const noteText = `Origin: Contact form\nPhone: ${phone}\n\nMessage:\n${message}`;
        const noteResponse = await fetch(
          `${BREVO_API_BASE_URL}/contacts/${encodeURIComponent(email)}/notes`,
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "content-type": "application/json",
              "api-key": apiKey,
            },
            body: JSON.stringify({ text: noteText }),
          },
        );

        if (!noteResponse.ok) {
          const noteError = await noteResponse.json().catch(() => ({}));
          console.error("[Contact API] Failed to attach Brevo note", {
            status: noteResponse.status,
            error: noteError,
          });
        } else {
          console.log("[Contact API] Note stored in Brevo for contact", {
            email,
          });
        }
      } catch (noteError) {
        console.error("[Contact API] Unexpected error storing Brevo note", {
          email,
          error: noteError,
        });
      }
    }

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("[Contact API] Unexpected server error", error);
    return NextResponse.json(
      { message: "Failed to send message due to a server error." },
      { status: 500 },
    );
  }
}
