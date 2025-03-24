import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Ad } from "@/components/ui/ad";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return {
    title:
      "Guía Tarjeta de Crédito Nu Bank: Todo lo que necesitas saber - Top Finanzas México",
    description:
      "Descubre todo lo que necesitas saber sobre la tarjeta de crédito Nu: beneficios, requisitos, costos y cómo solicitar este producto financiero innovador.",
    keywords:
      "tarjeta de crédito, Nu Bank, nu bank, solicitar tarjeta, crédito, finanzas personales",
  };
}

export default function NuBankCreditCardPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Main content */}
          <div className="max-w-4xl mx-auto">
            {/* Ad space */}
            <div className="mb-8">
              <Ad format="horizontal" className="mx-auto" />
            </div>

            {/* Hero section */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              NuBank: La tarjeta de crédito ideal para ti
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              La Tarjeta de Crédito NuBank, conocida por su accesibilidad y
              transparencia, se adapta a cualquier estilo de vida.
            </p>

            {/* Features with purple bullets */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white font-bold">+</span>
                </div>
                <div>
                  <span className="font-semibold">Sin anualidad:</span> tarjeta
                  completamente libre de cuotas anuales.
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white font-bold">+</span>
                </div>
                <div>
                  <span className="font-semibold">App Intuitiva:</span> control
                  total de tus finanzas desde la comodidad de tu móvil.
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white font-bold">+</span>
                </div>
                <div>
                  <span className="font-semibold">Tasas competitivas:</span>{" "}
                  tasa anual del 89,76% sin IVA.
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white font-bold">+</span>
                </div>
                <div>
                  <span className="font-semibold">CAT promedio:</span> 139,5%
                  sin IVA.
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-10">
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white"
                href="/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next"
              >
                Quiero conocer los requisitos
              </Button>
            </div>

            {/* Image */}
            <div className="mb-12">
              <Image
                src="https://topfinanzas.com/mx/wp-content/uploads/2024/06/download-9-1.webp"
                alt="Tarjeta de crédito Nubank"
                width={800}
                height={450}
                className="rounded-xl w-full"
              />
            </div>

            {/* Why choose section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Por qué elegir la tarjeta de crédito NuBank?
              </h2>

              <p className="text-gray-700 mb-6">
                Optar por NuBank significa elegir simplicidad y eficacia en la
                gestión de tus finanzas. La tarjeta se destaca por su aplicación
                fácil de usar que permite un control total sobre gastos y
                límites de crédito, simplificando enormemente la administración
                de tus recursos financieros. Esta conveniencia se extiende a
                todos los aspectos de la experiencia del usuario, desde la
                configuración inicial hasta el uso diario, asegurando que cada
                interacción con NuBank sea intuitiva y enriquecedora.
              </p>
            </section>

            {/* Deep dive section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Una mirada profunda a NuBank
              </h2>

              <p className="text-gray-700 mb-6">
                Comparada con otras opciones en el mercado, NuBank elimina las
                complicaciones y costos innecesarios que suelen acompañar a las
                tarjetas de crédito tradicionales. Este enfoque centrado en la
                experiencia del usuario y la transparencia convierte a NuBank en
                una opción superior para el consumidor moderno. Además de
                simplificar la gestión financiera, NuBank está respaldada por
                Mastercard®, lo que garantiza una aceptación global y acceso a
                una serie de beneficios exclusivos en una amplia gama de
                comercios afiliados alrededor del mundo.
              </p>
            </section>

            {/* Mastercard section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Respaldada por Mastercard®:
              </h2>

              <p className="text-gray-700 mb-6">
                La alianza con Mastercard® no solo asegura la aceptación global
                de NuBank sino que también enriquece la oferta con seguridad
                adicional en transacciones y promociones exclusivas. Esta
                colaboración brinda a los titulares de la tarjeta tranquilidad
                al viajar y comprar, con protecciones integradas y ofertas
                especiales a nivel internacional.
              </p>
            </section>

            {/* Benefits section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Innovación en beneficios:
              </h2>

              <p className="text-gray-700 mb-4">
                NuBank va más allá de las funciones estándar de una tarjeta de
                crédito:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">+</span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      Sin penalizaciones por uso mínimo:
                    </span>{" "}
                    Puedes usar tu tarjeta según tus necesidades, sin la presión
                    de cumplir con un mínimo de gastos.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">+</span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      Sin cobros por reposición:
                    </span>{" "}
                    En caso de pérdida o robo, la reposición es totalmente
                    gratuita, lo que reduce la preocupación en situaciones de
                    estrés.
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Además de estos beneficios, NuBank se esfuerza por mantener una
                política de cero costos ocultos, reforzando su compromiso con la
                claridad y la honestidad en todas sus operaciones financieras.
                Esta política asegura que siempre sabrás exactamente lo que
                estás pagando, sin sorpresas desagradables. Adicionalmente, la
                tarjeta ofrece una plataforma robusta de seguridad que protege
                tus datos y transacciones en todo momento, dándote la
                tranquilidad que necesitas en cada uso.
              </p>
            </section>

            {/* How to apply section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Cómo solicitar la Tarjeta de Crédito NuBank?
              </h2>

              <p className="text-gray-700 mb-6">
                No esperes más para disfrutar de todas las ventajas y beneficios
                que NuBank tiene para ofrecer. Solicitar tu Tarjeta de Crédito
                NuBank es rápido y fácil: simplemente visita el link y conoce
                los requisitos. ¡Empieza hoy mismo y experimenta la libertad
                financiera que solo tu tarjeta de crédito NuBank puede
                ofrecerte!
              </p>

              <div className="mt-8">
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  href="/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next"
                >
                  Quiero conocer los requisitos
                </Button>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
