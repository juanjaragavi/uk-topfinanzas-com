const inputBody = `{
    "first_name": "Juan",
    "email_address": "juanamillo@gmail.com",
    "state": "active",
    "fields": {
        "acepto_politicas_de_tratamiento_de_datos_y_terminos_y_condiciones": "1",
        "beneficio_empresa": null,
        "birthday": "Feb 6",
        "contacto": null,
        "cual_es_tu_ingreso_mensual": "Entre $0 MXN y $7,500 MXN",
        "cuanto_dinero_necesitas": null,
        "date_created": null,
        "describe_tu_necesidad": null,
        "elige_el_grupo_que_mejor_describe_tu_situacion_actual": null,
        "estas_reportado_en_buro_de_credito": null,
        "flujo_prestamos_2": null,
        "last_name": "Jaramillo",
        "monto_empresa": null,
        "newsletter": null,
        "pais": "Reino Unido",
        "phone_number": "5531122607",
        "preferencia_1_cupo_de_credito_alto": null,
        "preferencia_2_sin_buro": null,
        "preferencia_3_millas_y_puntos": null,
        "preferencia_4_credito_inmediato": null,
        "preferencia_5_sin_anualidad": null,
        "preferencia_6_cashback": null,
        "que_es_lo_que_mas_importante_en_una_tarjeta_de_credito": "Cupo de crédito alto",
        "quickemailverification_free": null,
        "quickemailverification_result": null,
        "quickemailverification_safe_to_send": null,
        "quiz_campana_leads": null,
        "quiz_prestamos": null,
        "quiz_prestamos_2": null,
        "quiz_prestamos_bbva": null,
        "quiz_prestamos_credilikeme": null,
        "quiz_prestamos_discover": null,
        "quiz_prestamos_empresarial_sabadell": null,
        "quiz_prestamos_upstart": null,
        "quiz_prestamo_kueski": null,
        "quiz_tarjetas": "SI",
        "quiz_tarjeta_bbva_azul": null,
        "quiz_tarjeta_citi_double_cash": null,
        "quiz_tarjeta_hsbc_zero": null,
        "quiz_tarjeta_nubank": null,
        "quiz_tarjeta_nubank_2": null,
        "quiz_tarjeta_platacard": null,
        "quiz_tarjeta_stori": null,
        "quiz_tarjeta_visa_signature": null,
        "recovery": null,
        "reingresar_flujo_tarjetas": null,
        "source": "Quiz UK",
        "tarjetas_neobancos": null,
        "utm_adgroup": "utm_adgroup",
        "utm_campaign": "22372067271",
        "utm_content": "182748110611",
        "utm_medium": "cpc",
        "utm_source": "adwords",
        "utm_term": "utm_term"
    }
}`;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Kit-Api-Key": `${process.env.NEXT_PUBLIC_KIT_API_KEY}`,
};

fetch("https://api.kit.com/v4/subscribers", {
  method: "POST",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
