import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
{
  /*import { Ad } from "@/components/ui/ad";*/
}
import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return {
    title:
      "Requisitos Tarjeta de Crédito NuBank: Todo lo que necesitas saber - Top Finanzas México",
    description:
      "Conoce en esta guía los requisitos para obtener la tarjeta de crédito NuBank, una opción ideal para el mexicano moderno con enfoque digital y sin comisiones ocultas.",
    keywords:
      "Requisitos tarjeta de crédito NuBank, Nu Bank, tarjeta digital, finanzas personales, México, comisión anual, sin anualidad",
  };
}

export default function NuBankRequisitosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requisitos Tarjeta de Crédito Nu
            </h1>

            <div className="my-8">
              <p className="text-lg text-gray-800 mb-8 leading-5">
                Descubre los pasos y requisitos esenciales para obtener tu
                Tarjeta de Crédito NuBank, diseñada para ofrecer simplicidad y
                transparencia, eliminando las complicaciones típicas de las
                tarjetas tradicionales.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Qué necesitas para solicitar tu Tarjeta NuBank?
              </h2>

              <div className="my-8">
                <Image
                  src="https://storage.googleapis.com/media-topfinanzas-com/images/download-2-1.webp"
                  alt="Tarjeta de crédito Nu"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>

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
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Obtener tu Tarjeta de Crédito NuBank es un proceso directo y
                  sencillo, diseñado para que puedas comenzar a disfrutar de sus
                  beneficios rápidamente. A continuación, detallamos todo lo que
                  necesitas preparar:
                </p>

                <div className="my-6 text-center">
                  <Link href="/credit-cards">
                    <Image
                      src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                      alt="Comparador de tarjetas de crédito"
                      width={320}
                      height={100}
                      className="mx-auto rounded-lg"
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Información financiera importante:
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Disfruta de total claridad en los costos, ya que no se aplican
                  las comisiones ocultas que suelen encontrarse en otros bancos.
                  Este enfoque transparente es revolucionario en un sector
                  frecuentemente criticado por sus cargos inesperados.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Ser mayor de edad y residente en México:
                      </span>{" "}
                      Debes ser legalmente adulto y residir en México.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Documentación básica:
                      </span>{" "}
                      Es necesario tener una identificación oficial vigente como
                      el INE, pasaporte o tarjeta de residencia.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Una selfie:</span> Para
                      verificar tu identidad durante el proceso de solicitud.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Datos personales:</span>{" "}
                      Deberás proporcionar información básica necesaria para
                      calcular tu CURP y RFC.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Comprobante de domicilio:
                      </span>{" "}
                      En ciertos casos, podrías necesitar presentar un
                      comprobante de domicilio reciente.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Consulta de historial crediticio:
                      </span>{" "}
                      Se requerirá tu autorización para realizar una
                      verificación de crédito, un paso estándar en la evaluación
                      de las solicitudes.
                    </div>
                  </div>
                </div>

                <p className="text-gray-800 my-8 text-sm leading-5">
                  <span className="font-bold">Conoce más:</span>{" "}
                  <Link
                    href="https://topfinanzas.com/mx/finanzas-personales/como-saber-si-estas-en-buro-de-credito/"
                    className="text-purple-600 underline"
                  >
                    ¿Cómo saber si estás en buró de crédito y qué significa?
                  </Link>
                </p>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Tasas y CAT:
                </h2>

                <div className="space-y-2 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Tasa de interés anual fija promedio:
                      </span>{" "}
                      89.76% sin IVA.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">CAT promedio:</span>{" "}
                      139.5% sin IVA.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Comisión anual:</span> $0.
                    </div>
                  </div>
                </div>

                <div className="my-6 text-center">
                  <Link href="/credit-cards">
                    <Image
                      src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
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

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Proceso de solicitud en línea:
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Puedes aplicar fácilmente desde la comodidad de tu hogar a
                  través del sitio web de Nu o utilizando su aplicación móvil.
                  Este proceso te permite manejar tu solicitud con rapidez y
                  eficiencia.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  ¿Para quién es la Tarjeta de Crédito Nu?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  La Tarjeta de Crédito NuBank no es una talla única para todos,
                  pero ciertamente tiene un atractivo distintivo para varios
                  perfiles de consumidores. Aquí te detallamos quiénes podrían
                  considerar esta tarjeta como su compañera ideal de finanzas:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Los amantes de lo digital
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Si te sientes cómodo gestionando tu vida desde tu smartphone y
                  prefieres las soluciones digitales sobre las tradicionales,
                  NuBank es tu tarjeta. Todo, desde la aplicación hasta el pago,
                  está diseñado para aquellos que viven conectados.
                </p>

                <p className="text-gray-800 my-8 text-sm leading-5">
                  <span className="font-bold">Conoce más:</span>{" "}
                  <Link
                    href="https://topfinanzas.com/mx/finanzas-personales/tarjetas-de-credito-de-neobancos/"
                    className="text-purple-600 underline"
                  >
                    Top tarjetas de neobancos
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Buscadores de transparencia
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Para aquellos que están cansados de leer la letra pequeña y
                  preocuparse por comisiones ocultas, NuBank ofrece una bocanada
                  de aire fresco. Con su política de cero comisiones por
                  anualidad, retiro de efectivo, reposición y uso internacional,
                  NuBank pone todas las cartas sobre la mesa desde el inicio.
                </p>

                <p className="text-gray-800 my-8 text-sm leading-5">
                  <span className="font-bold">Conoce más:</span>{" "}
                  <Link
                    href="https://topfinanzas.com/mx/finanzas-personales/comprar-boletos-de-avion-mas-economicos/"
                    className="text-purple-600 underline"
                  >
                    Trucos para comprar boletos de avión más económicos
                  </Link>
                </p>

                <div className="my-6 text-center">
                  <Link href="/credit-cards">
                    <Image
                      src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                      alt="Comparador de tarjetas de crédito"
                      width={250}
                      height={250}
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

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Innovadores financieros
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Si te gusta estar a la vanguardia de las soluciones
                  financieras y valoras las características innovadoras como los
                  MSI con opción de adelanto y descuento, y la seguridad
                  avanzada que incluye una tarjeta virtual, entonces NuBank
                  podría ser la elección perfecta para ti.
                </p>

                <p className="text-gray-800 my-8 text-sm leading-5">
                  <span className="font-bold">Conoce más:</span>{" "}
                  <Link
                    href="https://topfinanzas.com/mx/finanzas-personales/ideas-de-negocio-para-emprendedores/"
                    className="text-purple-600 underline"
                  >
                    ¿Cómo saber si estás en buró de crédito y qué significa?
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  5 ideas de negocio para emprendedores jóvenes
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Con opciones como la Tarjeta Garantizada NuBank, aquellos que
                  buscan entrar al mundo del crédito o mejorar su historial
                  existente tienen una puerta abierta. NuBank no solo te ofrece
                  una herramienta financiera, sino una oportunidad para crecer y
                  mejorar financieramente.
                </p>

                <div className="my-6 text-center">
                  <Link href="/credit-cards">
                    <Image
                      src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                      alt="Comparador de tarjetas de crédito"
                      width={320}
                      height={100}
                      className="mx-auto rounded-lg"
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  ¿Es NuBank la tarjeta para ti?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Si valoras la simplicidad, la transparencia y el control sobre
                  tus finanzas personales, la Tarjeta de Crédito NuBank podría
                  ser exactamente lo que estabas buscando. Ideal para el
                  consumidor digital que prefiere la gestión financiera en la
                  palma de su mano, NuBank se destaca como una opción sólida en
                  el creciente mar de productos financieros digitales. Con su
                  enfoque en eliminar comisiones innecesarias y proporcionar una
                  experiencia de usuario excepcional, NuBank no solo promete
                  cambiar cómo interactuamos con el dinero, sino que realmente
                  entrega esa promesa.
                </p>

                <div className="text-center my-8">
                  <Link href="https://nu.com.mx/credito/" target="_blank">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
