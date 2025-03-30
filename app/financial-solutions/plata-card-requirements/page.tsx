import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
{
  /*import { Ad } from "@/components/ui/ad";*/
}
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";

export default function RequisitosTarjetaPlataCardPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requisitos de la tarjeta Plata card
            </h1>

            <div className="my-8">
              <p className="text-lg text-gray-800 mb-8 leading-5">
                La Tarjeta de Crédito Plata te ofrece flexibilidad y beneficios
                en cada compra.
              </p>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/plata.jpg"
                  alt="Tarjeta Plata Card"
                  width={1000}
                  height={563}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>

              <section className="my-6">
                <p className="text-gray-800 mb-6 text-sm leading-5 font-light">
                  La Tarjeta de Crédito Plata se destaca por su flexibilidad y
                  los beneficios que ofrece, convirtiéndola en una opción
                  inteligente para optimizar tus finanzas. Con un alto límite de
                  crédito, un atractivo programa de cashback y herramientas
                  avanzadas de seguridad, es una tarjeta diseñada para quienes
                  buscan maximizar cada peso que gastan. Conoce los requisitos
                  esenciales y los costos asociados para aprovechar al máximo
                  esta herramienta financiera.
                </p>

                {/* First ad placement - Tarjetas sin anualidad */}
                <div className="my-8 text-center">
                  <Link href="/credit-cards">
                    <Image
                      src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                      alt="Top tarjetas de crédito sin anualidad"
                      width={600}
                      height={180}
                      className="mx-auto rounded-lg"
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Requisitos de la Tarjeta de Crédito Plata
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  Para poder solicitar la Tarjeta de Crédito Plata, es necesario
                  cumplir con los siguientes requisitos:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Ser mayor de edad:</span>{" "}
                      Debes tener al menos 18 años para poder solicitar la
                      tarjeta.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Contar con identificación oficial:
                      </span>{" "}
                      Se requiere una credencial para votar (INE) vigente,
                      emitida por el Instituto Nacional Electoral.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Tener un RFC:</span> El
                      Registro Federal de Contribuyentes es necesario para la
                      verificación crediticia.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Ingresos mínimos:</span>{" "}
                      Aunque no se especifica un monto exacto, tener ingresos
                      comprobables es esencial para la aprobación de la tarjeta.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Historial crediticio:
                      </span>{" "}
                      Contar con un historial crediticio activo es fundamental
                      para evaluar la solicitud.
                    </div>
                  </div>
                </div>

                {/* Ad for students */}
                <div className="my-8 text-center">
                  <Link href="/credit-cards">
                    <Image
                      src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                      alt="¿Eres estudiante? Descubre las tarjetas de crédito diseñadas especialmente para ti"
                      width={600}
                      height={180}
                      className="mx-auto rounded-lg"
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Proceso de solicitud
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  Solicitar la Tarjeta de Crédito Plata es un proceso sencillo y
                  rápido. Una vez que tu solicitud sea aprobada, recibirás tu
                  tarjeta en un plazo corto, directamente en tu domicilio, sin
                  costo adicional. Puedes hacerlo de las siguientes maneras:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Desde la aplicación móvil:
                      </span>{" "}
                      Descarga la app de Plata, completa los datos solicitados y
                      envía tu solicitud en pocos minutos.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">En línea:</span> Visita el
                      sitio web de Plata y llena el formulario de solicitud en
                      la sección correspondiente.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Por teléfono:</span>{" "}
                      Comunícate con el servicio de atención al cliente de Plata
                      para recibir asistencia en el proceso de solicitud.
                    </div>
                  </div>
                </div>

                {/* Ad for personal loans */}
                <div className="my-8 text-center">
                  <Link href="/credit-cards">
                    <Image
                      src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                      alt="¿Buscando el mejor préstamo personal? Explora las opciones en el mundo Fintech"
                      width={600}
                      height={180}
                      className="mx-auto rounded-lg"
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Consideraciones importantes: CAT y Tasas de Interés
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  Es esencial entender los costos asociados con la Tarjeta de
                  Crédito Plata para tomar una decisión informada. A
                  continuación, te explicamos los aspectos más importantes:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        CAT (Costo Anual Total):
                      </span>{" "}
                      El CAT promedio de la Tarjeta de Crédito Plata es de
                      164.22% sin IVA. Este porcentaje refleja el costo total
                      del crédito, incluyendo intereses y comisiones. Este CAT
                      puede parecer alto comparado con otras opciones, por lo
                      que es crucial usar la tarjeta de manera estratégica para
                      aprovechar sus beneficios.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Tasa de interés:</span> La
                      tasa de interés ordinaria es del 99.9% anual sin IVA. Esta
                      tasa se aplica si no pagas el total de tu saldo antes de
                      la fecha límite de pago. Planificar tus pagos te ayudará a
                      evitar cargos por intereses y a mantener el costo de tus
                      compras bajo control.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Comisiones:</span> Además
                      del CAT y las tasas de interés, es importante estar al
                      tanto de las comisiones que pueden aplicarse como:
                    </div>
                  </div>

                  <div className="flex items-start pl-8">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">•</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Disposición de efectivo:
                      </span>{" "}
                      $199 + IVA por cada retiro en cajeros automáticos.
                    </div>
                  </div>

                  <div className="flex items-start pl-8">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">•</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Pago tardío:</span> $400 +
                      IVA en caso de no realizar el pago mínimo antes de la
                      fecha límite.
                    </div>
                  </div>
                </div>

                {/* Ad for understanding CAT */}
                <div className="my-8 text-center">
                  <Link href="/credit-cards">
                    <Image
                      src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
                      alt="Entiende el CAT en Tarjetas de Crédito - Descubre por qué es importante conocer este indicador antes de elegir tu tarjeta"
                      width={600}
                      height={180}
                      className="mx-auto rounded-lg"
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  ¿Para quién es ideal la Tarjeta de Crédito Plata?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  La Tarjeta de Crédito Plata está diseñada para personas que
                  desean maximizar sus compras y aprovechar beneficios únicos,
                  como el cashback y la flexibilidad en los pagos. Es ideal
                  para:
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Compradores frecuentes
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  Si realizas compras regulares en categorías como
                  supermercados, entretenimiento o restaurantes, la Tarjeta de
                  Crédito Plata puede ser muy beneficiosa para ti. Su programa
                  de cashback te permite obtener reembolsos en efectivo en
                  distintas categorías, ayudándote a ahorrar en tus gastos
                  cotidianos.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Maximiza tu dinero:</span>{" "}
                      Obtén hasta un 15% de cashback en categorías seleccionadas
                      cada mes.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Categorías seleccionadas:
                      </span>{" "}
                      Disfruta de cashback en categorías específicas
                      establecidas por la tarjeta. Es importante revisar las
                      opciones disponibles cada mes para asegurarte de
                      aprovechar al máximo este beneficio.
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Planificadores de grandes compras
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  Para quienes planean realizar adquisiciones importantes, como
                  electrodomésticos o viajes, la Tarjeta de Crédito Plata ofrece
                  la opción de diferir pagos a meses con condiciones ventajosas.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Pagos flexibles:</span>{" "}
                      Elige plazos de 3 a 12 meses, con promociones de meses sin
                      intereses disponibles en comercios seleccionados.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Controla tus gastos:
                      </span>{" "}
                      Realiza grandes compras y difiere tus pagos de manera que
                      se adapten a tu capacidad financiera, sin sorpresas
                      innecesarias.
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Usuarios digitales precavidos
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  Si valoras la seguridad y el control digital de tus finanzas,
                  la Tarjeta de Crédito Plata ofrece herramientas avanzadas que
                  se adaptan a tus necesidades.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Gestión total desde la app:
                      </span>{" "}
                      Controla tu tarjeta mediante la aplicación móvil, donde
                      puedes congelar o desbloquear tu tarjeta, establecer
                      límites de gasto y recibir notificaciones en tiempo real
                      de cada transacción.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Seguridad 24/7:</span>{" "}
                      Disfruta de un robusto sistema de protección antifraude
                      que monitorea tus transacciones constantemente para
                      detectar y prevenir actividades sospechosas, brindándote
                      tranquilidad y seguridad en cada compra.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  ¿Es la tarjeta de crédito Plata adecuada para ti?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  La Tarjeta de Crédito Plata ofrece una combinación de
                  beneficios atractivos, como un alto límite de crédito y un
                  programa de cashback significativo. Sin embargo, es crucial
                  que los posibles usuarios comprendan los requisitos para
                  obtenerla y los costos asociados, como el CAT y las tasas de
                  interés.
                </p>

                <p className="text-gray-800 mb-6 text-sm leading-5">
                  Si cumples con los requisitos y estás dispuesto a manejar tus
                  pagos de manera responsable, la Tarjeta de Crédito Plata puede
                  ser una excelente herramienta financiera para maximizar tus
                  compras y gestionar tus finanzas de manera inteligente.
                </p>

                <div className="text-center my-8">
                  <Link href="https://apply.platacard.mx/credit-card">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
