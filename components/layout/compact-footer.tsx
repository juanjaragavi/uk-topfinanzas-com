import Link from "next/link";
import Image from "next/image";

// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { footerNavigation } from "@/lib/navigation/footerNavigation";
import { footerContent } from "@/lib/texts/footer/content";

export function CompactFooter() {
  return (
    <footer className="bg-[#4C59C2] text-white">
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
          <p className="text-xs uppercase tracking-wide text-white">
            DERECHOS RESERVADOS, ©TOP NETWORKS INC 2025. PROHIBIDA SU
            REPRODUCCIÓN TOTAL O PARCIAL POR CUALQUIER MEDIO O FORMA, SIN LA
            AUTORIZACIÓN ESCRITA Y EXPRESA DE SU TITULAR.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="text-center text-xs text-white">
          <span className="text-white">Un Producto TOP NETWORKS INC. | </span>
          <span className="text-white">
            {footerNavigation.legalLinks.map((link, index) => (
              <span className="text-white" key={link.href}>
                <Link href={link.href} className="hover:underline text-white">
                  {link.text}
                </Link>
                {index < footerNavigation.legalLinks.length - 1 ? " | " : ""}
              </span>
            ))}
          </span>
          <span className="text-white">
            {" "}
            | Copyright Top Networks Inc. 2025
          </span>
        </div>
      </div>
    </footer>
  );
}
