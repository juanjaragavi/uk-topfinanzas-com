import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email_address, first_name, state, fields } = await request.json();

  if (!email_address || !first_name) {
    return NextResponse.json(
      { error: "Email and first name are required" },
      { status: 400 },
    );
  }

  const API_KEY = process.env.BREVO_API_KEY;
  const API_URL = "https://api.brevo.com/v3/contacts";

  if (!API_KEY) {
    return NextResponse.json(
      { error: "Brevo API key is not configured" },
      { status: 500 },
    );
  }

  // Generate dynamic external ID with timestamp
  const timestamp = Math.floor(Date.now() / 1000);
  const extId = `topfinanzas-uk-${timestamp}`;

  // Extract last_name from fields if provided
  const lastName = fields?.last_name || "";

  // Build Brevo attributes from Kit.com fields
  const attributes: Record<string, string | number> = {
    FIRSTNAME: first_name,
    COUNTRIES: "United Kingdom",
  };

  // Add last name if provided
  if (lastName) {
    attributes.LASTNAME = lastName;
  }

  // Map additional fields to Brevo attributes (preserving important data)
  if (fields) {
    // Financial preferences
    if (fields.cual_es_tu_ingreso_mensual) {
      attributes.INCOME = fields.cual_es_tu_ingreso_mensual;
    }
    if (fields.que_es_lo_que_mas_importante_en_una_tarjeta_de_credito) {
      attributes.CARD_PREFERENCE =
        fields.que_es_lo_que_mas_importante_en_una_tarjeta_de_credito;
    }

    // Marketing data
    if (fields.pais) {
      attributes.PAIS = fields.pais;
    }
    if (fields.marca) {
      attributes.MARCA = fields.marca;
    }

    // Quiz tracking
    if (fields.quiz_tarjetas) {
      attributes.QUIZ_TARJETAS = fields.quiz_tarjetas;
    }

    // UTM parameters for marketing attribution
    if (fields.utm_source) {
      attributes.UTM_SOURCE = fields.utm_source;
    }
    if (fields.utm_medium) {
      attributes.UTM_MEDIUM = fields.utm_medium;
    }
    if (fields.utm_campaign) {
      attributes.UTM_CAMPAIGN = fields.utm_campaign;
    }
    if (fields.utm_term) {
      attributes.UTM_TERM = fields.utm_term;
    }
    if (fields.utm_content) {
      attributes.UTM_CONTENT = fields.utm_content;
    }

    // Consent and date
    if (
      fields.acepto_politicas_de_tratamiento_de_datos_y_terminos_y_condiciones
    ) {
      attributes.CONSENT =
        fields.acepto_politicas_de_tratamiento_de_datos_y_terminos_y_condiciones;
    }
    if (fields.date_created) {
      attributes.DATE_CREATED = fields.date_created;
    }
  }

  const brevoPayload = {
    email: email_address,
    attributes,
    ext_id: extId,
    updateEnabled: false,
    listIds: [9, 5], // UK TopFinanzas list
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": API_KEY,
      },
      body: JSON.stringify(brevoPayload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("[Brevo API] Error response:", errorData);
      return NextResponse.json(
        { error: errorData || "Failed to create contact in Brevo" },
        { status: response.status },
      );
    }

    const responseData = await response.json();
    console.log("[Brevo API] Contact created successfully:", {
      email: email_address,
      ext_id: extId,
    });
    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error("[Brevo API] Error subscribing user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
