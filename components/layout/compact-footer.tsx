import Link from "next/link";
import Image from "next/image";

// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { footerNavigation } from "@/lib/navigation/footerNavigation";
import { footerContent } from "@/lib/texts/footer/content";

export function CompactFooter() {
  return (
    <footer className="bg-[#4052B4] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <Image
            src={logos.whiteLogo.url}
            alt={logos.whiteLogo.alt}
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </div>

        {/* Copyright Text Block */}
        <div className="text-center mb-4">
          <p className="text-xs uppercase tracking-wide">
            DERECHOS RESERVADOS, ©TOP NETWORKS INC 2025
            <br />
            PROHIBIDA SU REPRODUCCIÓN TOTAL O PARCIAL POR CUALQUIER MEDIO O FORMA, SIN LA AUTORIZACIÓN ESCRITA Y EXPRESA DE SU TITULAR.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="text-center text-xs">
          <span>Un Producto TOP NETWORKS INC. | </span>
          {footerNavigation.legalLinks.map((link, index) => (
            <span key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.text}
              </Link>
              {index < footerNavigation.legalLinks.length - 1 ? " | " : ""}
            </span>
          ))}
          <span> | Copyright Top Networks Inc. 2025</span>
        </div>
      </div>
    </footer>
  );
}
