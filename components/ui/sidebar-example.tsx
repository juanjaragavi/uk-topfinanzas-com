"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Sidebar,
  SidebarAd,
  SidebarCategories,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarNewsletter,
  SidebarProvider,
  SidebarRecentArticles,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function SidebarExample() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement subscription logic
    alert("¡Gracias por suscribirte!");
  };

  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar>
          <SidebarHeader>
            <SidebarInput placeholder="Buscar..." />
          </SidebarHeader>

          <SidebarContent>
            {/* Banner Ad */}
            <SidebarAd />

            {/* Recent Articles */}
            <SidebarRecentArticles>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/article-thumbnail-1.jpg"
                  alt="Artículo sobre finanzas personales"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <Link
                    href="/articulo-1"
                    className="text-sm font-medium hover:underline"
                  >
                    Tu Primer Sueldo: Una Guía Completa para Gestión Inteligente
                  </Link>
                  <p className="text-xs text-gray-500">25 Febrero, 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/images/article-thumbnail-2.jpg"
                  alt="Artículo sobre hipotecas"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <Link
                    href="/articulo-2"
                    className="text-sm font-medium hover:underline"
                  >
                    ¿Qué Es una Hipoteca? Tu Guía Completa
                  </Link>
                  <p className="text-xs text-gray-500">25 Febrero, 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/images/article-thumbnail-3.jpg"
                  alt="Artículo sobre préstamos"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <Link
                    href="/articulo-3"
                    className="text-sm font-medium hover:underline"
                  >
                    ¿Qué Son los Préstamos en Línea? Una Herramienta Clave en
                    Finanzas Personales
                  </Link>
                  <p className="text-xs text-gray-500">25 Febrero, 2025</p>
                </div>
              </div>
            </SidebarRecentArticles>

            <SidebarSeparator />

            {/* Categories */}
            <SidebarCategories>
              <div className="flex items-center justify-between">
                <Link
                  href="/finanzas-personales"
                  className="text-sm hover:underline"
                >
                  Finanzas Personales
                </Link>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                  12
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href="/tarjetas-de-credito"
                  className="text-sm hover:underline"
                >
                  Tarjetas de Crédito
                </Link>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                  8
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Link href="/hipotecas" className="text-sm hover:underline">
                  Hipotecas
                </Link>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                  6
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Link href="/inversiones" className="text-sm hover:underline">
                  Inversiones
                </Link>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                  5
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Link href="/presupuestos" className="text-sm hover:underline">
                  Presupuestos
                </Link>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                  4
                </span>
              </div>
            </SidebarCategories>

            <SidebarSeparator />

            {/* Newsletter */}
            <SidebarNewsletter onSubmit={handleNewsletterSubmit} />
          </SidebarContent>

          <SidebarFooter>
            <small className="text-xs text-center block text-gray-500">
              © 2025 TopFinanzas México
            </small>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center mb-6">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-2xl font-bold">Contenido Principal</h1>
          </div>

          <p className="text-gray-700">
            Esta es una implementación de ejemplo del sidebar con todos los
            componentes traducidos y el anuncio que apunta a la página de la
            Tarjeta de Crédito Azul BBVA.
          </p>
        </div>
      </div>
    </SidebarProvider>
  );
}
