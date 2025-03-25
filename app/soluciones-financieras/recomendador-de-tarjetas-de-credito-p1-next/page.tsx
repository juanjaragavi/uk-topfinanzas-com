"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RecomendadorTarjetasPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("benefits");

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 leading-5">
              Descubre tu tarjeta de crédito ideal
            </h1>

            <p className="text-xs leading-4 text-gray-800 mb-5">
              Encontrar la tarjeta adecuada es sencillo. Maximiza recompensas,
              organiza tus gastos y disfruta beneficios exclusivos. ¡Explora y
              elige la tarjeta ideal para ti!
            </p>

            <div className="my-8">
              <Link href="/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next">
                <Button className="bg-[#80E67D] hover:bg-[#6AD167] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <span>Aceptar recomendación</span>
                    <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center">
                      <span className="text-[#80E67D] text-xs">➔</span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>

            <h2 className="text-lg leading-5 font-bold text-gray-800 mb-6">
              ¿Por qué elegir nuestro recomendador de tarjetas de crédito?
            </h2>

            <div className="space-y-1 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 rounded-full bg-[#80E67D] px-1 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Opciones personalizadas</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 rounded-full bg-[#80E67D] px-1 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Completamente gratuito</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 rounded-full bg-[#80E67D] px-1 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Asesoría experta</span>
                </div>
              </div>
            </div>

            <p className="text-sm leading-5 text-gray-800 mb-4">
              Nuestras recomendaciones están diseñadas para conectar tus metas
              financieras con tarjetas que se ajusten a tus necesidades. Desde
              cashback hasta recompensas en viajes, te damos opciones claras y
              fáciles de entender para que tomes decisiones informadas.
            </p>

            <p className="text-sm leading-5 text-gray-800 mb-5">
              Con nuestra guía, transformarás tu tarjeta de crédito en una
              herramienta que simplifique tus finanzas y te ayude a alcanzar tus
              metas sin complicaciones.
            </p>

            <div className="mt-6 mb-4">
              <Link href="/soluciones-financieras/tarjeta-de-credito-azul-bbva-next">
                <Button className="bg-[#80E67D] hover:bg-[#6AD167] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <span>Nuestra mejor recomendación</span>
                    <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center">
                      <span className="text-[#80E67D] text-xs">➔</span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>

            <p className="text-center text-sm mb-6">
              <Link
                className="text-blue-500"
                href="/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next"
              >
                Aprende cómo solicitarla
              </Link>
            </p>

            <div className="mt-6 mb-6 border rounded">
              <div
                className="flex justify-between items-center p-4 cursor-pointer border-b"
                onClick={() => toggleFaq("benefits")}
              >
                <h3
                  className={`font-medium text-lg leading-5 ${
                    openFaq === "benefits" ? "text-green-500" : "text-sky-600"
                  }`}
                >
                  ¿Qué beneficios tiene una tarjeta sin anualidad?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "benefits"
                      ? "transform text-green-500"
                      : "text-sky-700"
                  }`}
                >
                  {openFaq === "benefits" ? "−" : "+"}
                </span>
              </div>
              {openFaq === "benefits" && (
                <div className="p-4 text-gray-700">
                  <p>
                    Una tarjeta sin anualidad te ayuda a ahorrar costos
                    recurrentes mientras disfrutas de beneficios clave como
                    cashback o puntos por compras.
                  </p>
                </div>
              )}

              <div
                className="flex justify-between items-center p-4 cursor-pointer border-b"
                onClick={() => toggleFaq("cashback")}
              >
                <h3
                  className={`font-medium text-lg leading-5 ${
                    openFaq === "cashback" ? "text-green-500" : "text-sky-600"
                  }`}
                >
                  ¿Cómo funciona el cashback?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "cashback"
                      ? "transform text-green-500"
                      : "text-sky-700"
                  }`}
                >
                  {openFaq === "cashback" ? "−" : "+"}
                </span>
              </div>
              {openFaq === "cashback" && (
                <div className="p-4 text-gray-700">
                  <p>
                    Recibes un porcentaje de tus compras como efectivo que
                    puedes usar para reducir saldos o gastar como prefieras.
                  </p>
                </div>
              )}

              <div
                className="flex justify-between items-center p-4 cursor-pointer border-b"
                onClick={() => toggleFaq("travelers")}
              >
                <h3
                  className={`font-medium text-lg leading-5 ${
                    openFaq === "travelers" ? "text-green-500" : "text-sky-600"
                  }`}
                >
                  ¿Cuál es la mejor opción para viajeros?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "travelers"
                      ? "transform text-green-500"
                      : "text-sky-700"
                  }`}
                >
                  {openFaq === "travelers" ? "−" : "+"}
                </span>
              </div>
              {openFaq === "travelers" && (
                <div className="p-4 text-gray-700">
                  <p>
                    Las tarjetas con acumulación de millas o acceso a salones
                    VIP son ideales para viajeros frecuentes, permitiéndote
                    ahorrar en vuelos y disfrutar de beneficios exclusivos.
                  </p>
                </div>
              )}

              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleFaq("online")}
              >
                <h3
                  className={`font-medium text-lg leading-6 ${
                    openFaq === "online" ? "text-green-500" : "text-sky-600"
                  }`}
                >
                  ¿Es seguro usar tarjetas de crédito en línea?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "online"
                      ? "transform -rotate-90 text-green-500"
                      : "text-sky-700"
                  }`}
                >
                  {openFaq === "online" ? "−" : "+"}
                </span>
              </div>
              {openFaq === "online" && (
                <div className="p-4 text-gray-700">
                  <p>
                    Sí, muchas tarjetas ofrecen tecnología avanzada como CVV
                    dinámico y alertas instantáneas para proteger tus
                    transacciones.
                  </p>
                </div>
              )}
            </div>

            <p className="text-sm leading-5 text-gray-800 mb-8">
              Haz de tu tarjeta de crédito una aliada para alcanzar tus metas
              financieras. Desde cashback hasta recompensas de viaje, elige una
              opción que simplifique tu vida y maximice tus beneficios. Explora
              nuestras recomendaciones y encuentra la tarjeta que mejor se
              adapta a ti.
            </p>

            <div className="my-8">
              <Link href="/soluciones-financieras/tarjeta-de-credito-azul-bbva-next">
                <Image
                  src="/images/Tobanner-02-1.webp"
                  alt="Recomendador de tarjetas de crédito"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
