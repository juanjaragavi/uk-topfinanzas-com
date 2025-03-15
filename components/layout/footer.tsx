import Link from "next/link";
import Image from "next/image";

// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { footerNavigation } from "@/lib/navigation/footerNavigation";
import { footerContent } from "@/lib/texts/footer/content";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3354AF] to-[#274890] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo Section - Added at the top for mobile */}
        <div className="flex justify-center md:justify-start mb-8">
          <Image
            src={logos.whiteLogo.url}
            alt={logos.whiteLogo.alt}
            width={logos.whiteLogo.width}
            height={logos.whiteLogo.height}
            className="h-20 w-auto"
            priority
          />
        </div>

        {/* Main Footer Sections - Reordered for better mobile experience */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Navigation Links - Most important for mobile users */}
          <div className="order-1 md:order-1">
            <h2 className="text-xl font-semibold mb-5 text-[#7BDC54]">
              {footerContent.headings.navigate}
            </h2>
            <ul className="space-y-3">
              {footerNavigation.mainNavItems
                .filter(item => item.href === "/" || item.href === "/blog" || item.href.startsWith("/credit-cards"))
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-[#55B9FF] hover:underline transition-colors"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
            </ul>

            {/* Social Media Section - Moved closer to navigation for better visibility */}
            <div className="mt-6">
              <p className="mb-3 text-[#55B9FF]">
                {footerNavigation.socialMedia.title}
              </p>
              <div className="flex space-x-4">
                {footerNavigation.socialMedia.links.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#55B9FF] transition-colors"
                    aria-label={social.ariaLabel}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.svgPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Categories Section */}
          <div className="order-2 md:order-2">
            <h2 className="text-xl font-semibold mb-5 text-[#7BDC54]">
              {footerContent.headings.categories}
            </h2>
            <ul className="space-y-3">
              {footerNavigation.categoryItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Blog Posts Section */}
          <div className="order-3 md:order-3">
            <h2 className="text-xl font-semibold mb-5 text-[#7BDC54]">
              Popular Articles
            </h2>
            <ul className="space-y-3">
              {footerNavigation.blogItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="order-4 md:order-4">
            <h2 className="text-xl font-semibold mb-5 text-[#7BDC54]">
              {footerContent.headings.contact}
            </h2>
            <ul className="space-y-3">
              {footerNavigation.contactInfo.map((contact, index) => (
                <li
                  key={index}
                  className={`flex ${
                    contact.type === "address" ? "items-start" : "items-center"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 mr-2 ${
                      contact.type === "address" ? "mt-1 flex-shrink-0" : ""
                    } text-[#55B9FF]`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {contact.svgPath.split("|").map((path, idx) => (
                      <path
                        key={idx}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={path}
                      />
                    ))}
                  </svg>
                  {contact.type === "email" ? (
                    <a
                      href={contact.href}
                      className="text-white hover:text-[#55B9FF] hover:underline transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-sm leading-tight">
                      {contact.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer with updated styling */}
        <div className="text-jusfity text-sm leading-relaxed max-w-4xl mx-auto mb-8 bg-[#274890]/50 p-4 rounded-xl">
          <p className="text-white/90">
            <span className="font-semibold text-[#7BDC54]">
              {footerContent.legal.disclaimer.label}
            </span>{" "}
            {footerContent.legal.disclaimer.text}
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs border-t border-white/20 pt-4">
          <p className="text-white/80">
            <span className="block sm:inline w-full py-4">
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
            <span className="block sm:inline w-full py-4">
              &nbsp; &copy; {footerContent.legal.copyright.text}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
