import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ad } from "@/components/ui/ad";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export function generateMetadata() {
  return {
    title:
      "Tarjeta de crédito Azul de BBVA: Tu aliado en cada transacción - TopFinanzas México",
    description:
      "La Tarjeta de Crédito Azul de BBVA es perfecta tanto para nuevos usuarios del crédito como para compradores y viajeros frecuentes.",
    keywords:
      "Tarjeta de crédito Azul, BBVA, tarjeta BBVA, México, puntos BBVA, CVV dinámico, plástico reciclado",
  };
}

export default function TarjetaBBVAAzulPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Tarjeta de crédito Azul de BBVA: Tu aliado en cada transacción
            </h1>

            <div className="my-8">
              <p className="text-lg text-gray-700 mb-8">
                La Tarjeta de Crédito Azul de BBVA es perfecta tanto para nuevos
                usuarios del crédito como para compradores y viajeros
                frecuentes.
              </p>

              <Ad
                format="square"
                adId="mx_topfinanzas_1"
                className="my-8"
                fallbackWidth={300}
                fallbackHeight={250}
              />

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">+</span>
                  </div>
                  <div>
                    <span className="font-semibold">Accesibilidad:</span>{" "}
                    Requisito de ingreso mínimo de solo $6,000 mensuales.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">+</span>
                  </div>
                  <div>
                    <span className="font-semibold">Recompensas:</span> Acumula
                    el 9% de tus compras en puntos BBVA.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">+</span>
                  </div>
                  <div>
                    <span className="font-semibold">Seguridad:</span> Incorpora
                    un CVV dinámico para transacciones en línea.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">+</span>
                  </div>
                  <div>
                    <span className="font-semibold">Compromiso ambiental:</span>{" "}
                    Fabricada con más del 85% de plástico reciclado.
                  </div>
                </div>
              </div>

              <div className="text-center my-8">
                <Link href="/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full w-full">
                    Quiero conocer los requisitos
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="/images/download-5-2.webp"
                  alt="Tarjeta de crédito Azul BBVA - Mujer con tarjeta de crédito"
                  width={1000}
                  height={563}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="my-10">
                <p className="text-gray-700 mb-6">
                  La Tarjeta de Crédito Azul de BBVA se destaca por su fácil
                  acceso, con un umbral de ingresos bajos que la hace accesible
                  para una amplia gama de consumidores. Esta tarjeta es
                  especialmente atractiva para aquellos que buscan una entrada
                  sin complicaciones al mundo del crédito, ofreciendo un camino
                  sencillo hacia la construcción de un historial crediticio
                  saludable.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Maximiza tus recompensas
                </h2>

                <p className="text-gray-700 mb-6">
                  Con la Tarjeta Azul, cada compra se convierte en una
                  oportunidad para acumular puntos valiosos. Estos puntos se
                  ganan a una tasa generosa del 9% del total de tus compras,
                  asegurando que cada gasto se traduzca en beneficios tangibles.
                  Los puntos pueden ser canjeados por una variedad de productos
                  y servicios, desde artículos para el hogar hasta experiencias
                  únicas, lo que te permite personalizar cómo deseas disfrutar
                  de tus recompensas.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Seguridad innovadora
                </h2>

                <p className="text-gray-700 mb-6">
                  BBVA ha incorporado medidas de seguridad de vanguardia en la
                  Tarjeta Azul, incluyendo el CVV dinámico que cambia con cada
                  transacción en línea. Este enfoque no solo combate el fraude
                  efectivamente, sino que también tranquiliza a los usuarios que
                  realizan compras en internet regularmente, asegurando que sus
                  datos financieros están protegidos en todo momento.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Responsabilidad ambiental
                </h2>

                <p className="text-gray-700 mb-6">
                  En línea con una creciente conciencia ecológica, la Tarjeta
                  Azul de BBVA no solo ayuda a gestionar tus finanzas sino que
                  también cuida el planeta. Hecha de plástico reciclado, esta
                  tarjeta es una de las pocas en el mercado que combina
                  beneficios financieros con responsabilidad ambiental, haciendo
                  que sea una opción preferida para consumidores conscientes del
                  impacto ecológico de sus decisiones.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Características adicionales:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div>
                      <span className="font-semibold">
                        Experiencia segura sin datos visibles:
                      </span>{" "}
                      Tu tarjeta Azul de BBVA no muestra datos sensibles en
                      físico, solo puedes verlos al iniciar sesión en la app o
                      escaneando el QR reverso.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div>
                      <span className="font-semibold">
                        Control completo en un QR:
                      </span>{" "}
                      Activa tu tarjeta, consulta tu NIP, o cambia contraseñas
                      directamente desde tu app BBVA mediante el código QR.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div>
                      <span className="font-semibold">Pagos sin contacto:</span>{" "}
                      Realiza compras de hasta $1,000 sin necesidad de
                      introducir tu tarjeta o ingresar tu NIP.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div>
                      <span className="font-semibold">
                        Gestión de emergencias:
                      </span>{" "}
                      Si pierdes tu tarjeta o te la roban, puedes bloquearla
                      rápidamente desde la app BBVA.
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Beneficios extendidos
                </h2>

                <p className="text-gray-700 mb-6">
                  La Tarjeta Azul va más allá del crédito tradicional al ofrecer
                  ventajas adicionales que responden a las necesidades de los
                  usuarios modernos:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div>
                      <span className="font-semibold">
                        Respaldo en el extranjero:
                      </span>{" "}
                      Reemplazo rápido de tarjeta o disposición de efectivo de
                      emergencia en el extranjero.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">+</span>
                    </div>
                    <div>
                      <span className="font-semibold">
                        Protección en compras y viajes:
                      </span>{" "}
                      Seguros que cubren desde la demora o pérdida de equipaje
                      hasta protección de precios y compra protegida para
                      artículos adquiridos con la tarjeta.
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Más que una herramienta financiera
                </h2>

                <p className="text-gray-700 mb-6">
                  La Tarjeta de Crédito Azul de BBVA no solo facilita tus
                  compras y viajes, sino que también ofrece una plataforma
                  robusta para manejar tus finanzas de manera segura y
                  responsable. Con un enfoque en recompensas sustanciales,
                  seguridad de vanguardia y sostenibilidad, esta tarjeta es una
                  elección excelente para cualquier persona que valore un estilo
                  de vida financiero consciente y eficiente.
                </p>

                <div className="text-center my-8">
                  <Link href="/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next">
                    <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full w-full">
                      Quiero conocer los requisitos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
