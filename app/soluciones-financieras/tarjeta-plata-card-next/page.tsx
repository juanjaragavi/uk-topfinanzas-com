import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
{
  /*import { Ad } from "@/components/ui/ad";*/
}
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";

export default function TarjetaPlataCardPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Tarjeta Plata Card: maximiza cada compra
            </h1>

            <div className="my-8">
              <p className="text-lg text-gray-800 mb-8 leading-5">
                La Tarjeta de Crédito Plata te ayuda a maximizar tus compras con
                beneficios únicos y flexibles.
              </p>

              {/*<Ad
                format="square"
                adId="mx_topfinanzas_1"
                className="my-8"
                fallbackWidth={300}
                fallbackHeight={250}
              />*/}

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5">
                    <span className="font-semibold">Cashback atractivo:</span>{" "}
                    Hasta 15% en categorías seleccionadas.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5">
                    <span className="font-semibold">
                      Límite de crédito alto:
                    </span>{" "}
                    Hasta $200,000.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5">
                    <span className="font-semibold">Sin intereses:</span>{" "}
                    Durante los primeros 2 meses.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5">
                    <span className="font-semibold">
                      CAT y tasas de interés:
                    </span>{" "}
                    Conoce todos los detalles dando clic{" "}
                    <span className="font-bold">Requisitos</span>.
                  </div>
                </div>
              </div>

              <div className="text-center my-8">
                <Link href="/soluciones-financieras/requisitos-tarjeta-plata-card-next">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Quiero conocer los requisitos
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/tarjeta-plata-card.webp"
                  alt="Tarjeta Plata Card - Hombre con tarjeta de crédito"
                  width={1000}
                  height={563}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>

              <section className="my-6">
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  La Tarjeta de Crédito Plata es una opción diseñada para
                  quienes buscan maximizar el valor de cada compra. Uno de los
                  aspectos más destacados de esta tarjeta es su atractivo
                  programa de cashback, que permite a los usuarios recibir hasta
                  un 15% de reembolso en efectivo en las categorías que elijan
                  cada mes. Respaldada por Mastercard, la Tarjeta de Crédito
                  Plata combina flexibilidad, recompensas y seguridad, lo que la
                  convierte en una opción ideal para quienes desean sacar el
                  máximo provecho de su dinero.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  ¿Qué hace especial a la Tarjeta de Crédito Plata?
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Cashback de hasta 15%:
                      </span>{" "}
                      La Tarjeta de Crédito Plata destaca por su programa de
                      recompensas, que ofrece hasta un 15% de reembolso en
                      efectivo en compras realizadas en categorías
                      seleccionadas. Cada mes, los usuarios pueden elegir hasta
                      cuatro categorías diferentes en la aplicación móvil para
                      optimizar sus recompensas. Este cashback se refleja en el
                      saldo de la tarjeta el primer día de cada mes,
                      convirtiéndose en un incentivo real para un manejo
                      inteligente de las finanzas.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        1% de cashback en todas tus compras:
                      </span>{" "}
                      Además del cashback en categorías específicas, la tarjeta
                      te permite obtener un 1% de cashback en todas tus compras,
                      sin importar la categoría, lo que significa que siempre
                      estás ganando algo con cada gasto.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Límite de crédito de hasta $200,000:
                      </span>{" "}
                      La Tarjeta de Crédito Plata ofrece un generoso límite de
                      crédito que puede alcanzar hasta $200,000, dependiendo del
                      perfil crediticio del solicitante. Esto permite a los
                      usuarios contar con un margen considerable para hacer
                      frente a gastos imprevistos o para realizar compras
                      importantes, siempre dentro de un marco de responsabilidad
                      financiera.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        2 meses sin intereses:
                      </span>{" "}
                      Disfruta de la flexibilidad de realizar compras y pagarlas
                      sin intereses durante los primeros dos meses. Este
                      beneficio es ideal para planificar grandes adquisiciones
                      sin preocuparte por los costos adicionales.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Difiere tus compras a meses sin intereses:
                      </span>{" "}
                      Si realizas una compra grande, puedes optar por diferir el
                      pago a meses sin intereses directamente desde la app de
                      Plata. Esta flexibilidad te permite ajustar los pagos a tu
                      capacidad financiera, eligiendo plazos de 3 a 12 meses.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Más que una tarjeta: una experiencia completa
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  La Tarjeta de Crédito Plata no solo te ofrece beneficios
                  financieros, sino que también está diseñada para hacerte la
                  vida más fácil y segura:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Entrega rápida:</span> Una
                      vez aprobada tu solicitud, recibirás tu tarjeta en menos
                      de 24 horas sin costo adicional. Esta rapidez en la
                      entrega te permite comenzar a disfrutar de los beneficios
                      casi de inmediato.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Gestión desde la app:
                      </span>{" "}
                      La aplicación móvil de Plata es una herramienta poderosa
                      que te permite manejar todos los aspectos de tu tarjeta
                      desde la comodidad de tu teléfono. Ya sea que necesites
                      diferir una compra, verificar tu saldo o recibir
                      notificaciones en tiempo real de tus transacciones, la app
                      está diseñada para que tengas un control total de tus
                      finanzas.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Seguridad 24/7:</span> La
                      seguridad es una prioridad para Plata. Con un sistema
                      antifraude que monitorea tus transacciones en tiempo real
                      y te notifica inmediatamente sobre cualquier actividad
                      sospechosa, puedes estar tranquilo sabiendo que tu dinero
                      está protegido. Además, si llegas a perder tu tarjeta,
                      puedes congelarla al instante desde la app, evitando así
                      cualquier uso no autorizado.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Tarjeta digital y control total:
                      </span>{" "}
                      Desde el primer día, tienes acceso a una tarjeta digital
                      para realizar compras en línea de forma segura. Además,
                      puedes personalizar los límites de gasto y controlar el
                      uso de la tarjeta, como activar o desactivar las compras
                      online o los retiros de efectivo, todo desde la app.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  ¿Es la Tarjeta de Crédito Plata para ti?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Si buscas una tarjeta que te permita maximizar cada peso que
                  gastas, la Tarjeta de Crédito Plata es para ti. Con su
                  atractivo programa de cashback y las ventajas adicionales que
                  ofrece, esta tarjeta es más que un simple medio de pago: es
                  una herramienta para potenciar tu poder adquisitivo.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4">
                  <Link
                    href="/soluciones-financieras/requisitos-tarjeta-plata-card-next"
                    className="text-blue-600 underline"
                  >
                    Si deseas conocer más sobre los costos, tasas de interés y
                    comisiones asociados con esta tarjeta, haz clic aquí para
                    obtener todos los detalles.
                  </Link>{" "}
                  Evaluar estos aspectos te ayudará a tomar una decisión
                  informada y a gestionar tu tarjeta de manera responsable.
                </p>

                <div className="text-center my-8">
                  <Link href="/soluciones-financieras/requisitos-tarjeta-plata-card-next">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Quiero conocer los requisitos
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
