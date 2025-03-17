import Link from "next/link";
import Image from "next/image";

// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { footerNavigation } from "@/lib/navigation/footerNavigation";
import { footerContent } from "@/lib/texts/footer/content";

export function CompactFooter() {
  return (
    <footer className="bg-gradient-to-b from-[#3354AF] to-[#274890] text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start mb-4">
          <Image
            src={logos.whiteLogo.url}
            alt={logos.whiteLogo.alt}
            width={logos.whiteLogo.width}
            height={logos.whiteLogo.height}
            className="h-14 w-auto"
            priority
          />
        </div>

        {/* Bottom Copyright with Legal Links Only */}
        <div className="text-center text-xs border-t border-white/20 pt-4">
          <p className="text-white/80">
            <span className="block sm:inline w-full py-3">
              {footerContent.companyInfo.productLabel}
            </span>
            <span className="hidden sm:inline"> &nbsp;&nbsp; | &nbsp; </span>
            {footerNavigation.legalLinks.map((link, index) => (
              <span key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#55B9FF] hover:underline mx-2"
                >
                  {link.text}
                </Link>
                {index < footerNavigation.legalLinks.length - 1 ? " | " : ""}
              </span>
            ))}
            <span className="hidden sm:inline"> &nbsp;&nbsp; | &nbsp; </span>
            <span className="block sm:inline w-full py-3">
              &nbsp; &copy; {footerContent.legal.copyright.text}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
