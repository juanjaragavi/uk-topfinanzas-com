import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
{
  /*import { Ad } from "@/components/ui/ad";*/
}
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";

export function generateMetadata() {
  return {
    title:
      "Requisitos Tarjeta de Crédito Azul BBVA: Todo lo que necesitas saber - TopFinanzas México",
    description:
      "Conoce en esta guía de requisitos Tarjeta de crédito Azul BBVA todo lo que debes conocer para tomar una decisión acertada sobre tus finanzas",
    keywords:
      "Requisitos Tarjeta de crédito Azul, BBVA, tarjeta BBVA, México, Tarjeta Azul BBVA, México, Requisitos tarjeta",
  };
}

export default function RequisitosAzulBBVAPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requisitos para la Tarjeta de Crédito Azul BBVA
            </h1>

            <div className="my-8">
              <p className="text-lg text-gray-800 mb-8 leading-5">
                La Tarjeta de Crédito Azul de BBVA es una opción ideal para los
                que están empezando a construir su crédito o aquellos que buscan
                maximizar las recompensas por sus gastos cotidianos.
              </p>

              <div className="my-8">
                <Image
                  src="/images/TC_bbva-azul.jpg"
                  alt="Tarjeta de crédito Azul BBVA"
                  width={1000}
                  height={563}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>

              {/* First ad placement */}
              {/*<div className="my-6">
                <Ad
                  format="square"
                  adId="mx_topfinanzas_1"
                  className="my-8"
                  fallbackWidth={300}
                  fallbackHeight={250}
                />
              </div>*/}

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  ¿Cómo calificar para la Tarjeta de Crédito Azul de BBVA?
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Edad y residencia:</span>{" "}
                      Debes ser mayor de 18 años y residir en México. Esto
                      asegura que los solicitantes tengan la capacidad legal
                      para compromisos financieros y que el banco pueda operar
                      dentro de las leyes locales.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Ingresos mínimos:</span>{" "}
                      Se requiere un ingreso mínimo mensual de $6,000, lo que
                      hace que esta tarjeta sea accesible para un amplio rango
                      de ingresos, incluidos los jóvenes profesionales y
                      personas con ingresos moderados.
                    </div>
                  </div>
                </div>

                {/* Call-to-action section with link to comparison tool */}
                <div className="my-6 text-center">
                  <Link href="/credit-cards">
                    <Image
                      src="/images/call-to-ACTION-4.jpg"
                      alt="Comparador de tarjetas de crédito"
                      width={320}
                      height={100}
                      className="mx-auto rounded-lg"
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Documentación necesaria:
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Identificación Oficial:
                      </span>{" "}
                      Una INE/IFE, pasaporte mexicano o FM2 vigente.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Comprobante de Domicilio:
                      </span>{" "}
                      Documentos recientes (no mayores a 3 meses) como facturas
                      de servicios o estados de cuenta bancarios.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Historial Crediticio:
                      </span>{" "}
                      Debes autorizar a BBVA a realizar una consulta de tu
                      historial en el Buró de Crédito.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Estado de Cuenta Bancario:
                      </span>{" "}
                      Necesitas presentar un estado de cuenta bancario que
                      confirme tus ingresos, lo cual es fundamental para evaluar
                      tu capacidad de pago.
                    </div>
                  </div>
                </div>

                <div className="my-6 text-center">
                  <Link href="/credit-cards">
                    <Image
                      src="/images/call-to-ACTION-1.jpg"
                      alt="Comparador de tarjetas de crédito"
                      width={320}
                      height={100}
                      className="mx-auto rounded-lg"
                    />
                  </Link>
                </div>

                {/* Second ad placement */}
                {/*<div className="my-6">
                  <Ad
                    format="square"
                    adId="mx_topfinanzas_2"
                    className="my-8"
                    fallbackWidth={300}
                    fallbackHeight={250}
                  />
                </div>*/}

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Evaluando los costos
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Es fundamental entender los costos asociados con la Tarjeta de
                  Crédito Azul de BBVA para tomar una decisión informada:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Comisión Anual:</span>{" "}
                      $748.00 más IVA, con posibilidad de bonificación si
                      cumples con ciertos criterios.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        CAT (Costo Anual Total):
                      </span>{" "}
                      El CAT de 97.3% más IVA es considerable y debe ser
                      evaluado frente a los beneficios ofrecidos por la tarjeta.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Disposición de Efectivo:
                      </span>{" "}
                      Se aplica una comisión del 6.5% sobre el monto retirado,
                      una opción a considerar solo para emergencias debido al
                      costo asociado.
                    </div>
                  </div>
                </div>

                <div className="my-6 text-center">
                  <Link href="/credit-cards">
                    <Image
                      src="/images/call-to-ACTION-3.jpg"
                      alt="Comparador de tarjetas de crédito"
                      width={320}
                      height={100}
                      className="mx-auto rounded-lg"
                    />
                  </Link>
                </div>

                {/* Third ad placement */}
                {/*<div className="my-6">
                  <Ad
                    format="square"
                    adId="mx_topfinanzas_3"
                    className="my-8"
                    fallbackWidth={300}
                    fallbackHeight={250}
                  />
                </div>*/}

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Beneficios y características
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Puntos BBVA:</span> Gana
                      el 9% de tus compras en puntos BBVA, que pueden ser
                      canjeados en una amplia variedad de comercios. Esto
                      convierte cada gasto en una oportunidad para ahorrar y
                      obtener recompensas.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Seguridad Avanzada:</span>{" "}
                      Incluye un CVV dinámico para transacciones en línea, que
                      cambia con cada operación, minimizando el riesgo de fraude
                      en compras por internet.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Sostenibilidad:</span> La
                      tarjeta está fabricada con más del 85% de plástico
                      reciclado, lo que responde a una creciente demanda de
                      productos financieros sostenibles.
                    </div>
                  </div>
                </div>

                <div className="my-6 text-center">
                  <Link href="/credit-cards">
                    <Image
                      src="/images/call-to-ACTION-2.jpg"
                      alt="Comparador de tarjetas de crédito"
                      width={320}
                      height={100}
                      className="mx-auto rounded-lg"
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Optimiza tu experiencia financiera la Tarjeta de Crédito Azul
                  de BBVA
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  La Tarjeta de Crédito Azul de BBVA es particularmente ideal
                  para varios perfiles de consumidores, gracias a sus
                  características accesibles y sus múltiples beneficios:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Profesionales jóvenes y primeros usuarios de tarjetas de
                  crédito:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Con un requisito de ingreso mínimo mensual de $6,000, esta
                  tarjeta es perfecta para jóvenes profesionales o personas que
                  recién inician su carrera y están comenzando a construir su
                  historial crediticio. Es una excelente opción para quienes
                  necesitan una herramienta financiera confiable que facilite la
                  gestión de gastos cotidianos mientras desarrollan un crédito
                  sólido.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  <span className="font-bold">Conoce más:</span>{" "}
                  <Link
                    href="https://topfinanzas.com/mx/finanzas-personales/tarjetas-de-credito-de-neobancos/"
                    className="text-blue-600 underline"
                  >
                    Top tarjetas de neobancos
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Consumidores conscientes del presupuesto:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Ideal para quienes están atentos a maximizar cada peso que
                  gastan. Con la posibilidad de acumular puntos BBVA por
                  compras, que luego pueden usarse en una diversidad de
                  establecimientos, esta tarjeta ofrece un retorno efectivo
                  sobre los gastos cotidianos.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  <span className="font-bold">Conoce más:</span>{" "}
                  <Link
                    href="https://topfinanzas.com/mx/finanzas-personales/pasos-para-un-presupuesto-familiar/"
                    className="text-blue-600 underline"
                  >
                    5 pasos para un presupuesto familiar exitoso
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Viajeros frecuentes y compradores en línea:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  El CVV dinámico y las protecciones adicionales como el seguro
                  de pérdida y demora de equipaje, hacen de esta tarjeta una
                  opción segura para quienes viajan regularmente o realizan
                  muchas compras en línea. Estas características aseguran
                  tranquilidad al proteger contra el fraude y otros riesgos
                  asociados con el uso de la tarjeta en el extranjero y en
                  comercio electrónico.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  <span className="font-bold">Conoce más:</span>{" "}
                  <Link
                    href="https://topfinanzas.com/mx/finanzas-personales/comprar-boletos-de-avion-mas-economicos/"
                    className="text-blue-600 underline"
                  >
                    Trucos para comprar boletos de avión más económicos
                  </Link>
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  ¿Es la tarjeta de Crédito Azul de BBVA para ti?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Al considerar la Tarjeta de Crédito Azul de BBVA, es
                  importante evaluar cómo sus características específicas se
                  alinean con tus necesidades y estilo de vida, asegurando que
                  eliges una herramienta financiera que no solo maneje tus
                  gastos de manera eficiente, sino que también enriquezca tu
                  vida financiera con beneficios adicionales.
                </p>

                <div className="text-center my-8">
                  <Link
                    href="https://www.bbva.mx/personas/productos/tarjetas-de-credito/tarjeta-de-credito-azul.html"
                    target="_blank"
                  >
                    <Button className="bg-[#004C9E] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Ver en sitio oficial
                    </Button>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
