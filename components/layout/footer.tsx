import Link from "next/link";
import Image from "next/image";
import { BackToTop } from "@/components/ui/back-to-top"; // Import the new component

// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { footerNavigation } from "@/lib/navigation/footerNavigation";
import { footerContent } from "@/lib/texts/footer/content";

export function Footer() {
  return (
    <footer className="bg-[#3F67B9] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Logo Section - Added at the top for mobile */}
        <div className="flex flex-col items-center md:items-start mb-8">
          <Image
            src={logos.whiteLogo.url}
            alt={logos.whiteLogo.alt}
            width={logos.whiteLogo.width}
            height={logos.whiteLogo.height}
            className="h-20 w-auto"
          />
          <p className="text-xs mt-2 text-justify max-w-[250px] leading-3 text-white font-light">
            {footerContent.legal.fullCopyright.text}
          </p>
        </div>

        {/* Main Footer Sections - Reordered for better mobile experience */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Navigation Links - Most important for mobile users */}
          <div className="order-1 md:order-1">
            <h2 className="footer-h2 mb-5 text-white md:text-lg font-semibold">
              {" "}
              {/* Style Update */}
              {footerContent.headings.navigate}
            </h2>
            <ul className="space-y-4">
              {footerNavigation.mainNavItems
                .filter(
                  (item) =>
                    item.href === "/" ||
                    item.href === "/blog" ||
                    item.href.startsWith("/credit-cards") ||
                    item.href === "/contact-us" ||
                    item.href === "/about-us",
                )
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="footer-text text-sm md:text-base font-normal hover:text-[#55B9FF] hover:underline transition-colors" /* Style Update */
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
            </ul>

            {/* Social Media Section - Moved closer to navigation for better visibility */}
            <div className="mt-8">
              <p className="mb-3 text-white">
                {footerNavigation.socialMedia.title}
              </p>
              <div className="flex space-x-4">
                {footerNavigation.socialMedia.links.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
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
            <h2 className="footer-h2 mb-5 text-white md:text-lg font-semibold">
              {" "}
              {/* Style Update */}
              {footerContent.headings.categories}
            </h2>
            <ul className="space-y-4">
              {footerNavigation.categoryItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="footer-text text-sm md:text-base font-normal hover:text-[#55B9FF] hover:underline transition-colors" /* Style Update */
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Blog Posts Section */}
          <div className="order-3 md:order-3">
            <h2 className="footer-h2 mb-5 text-white md:text-lg font-semibold">
              Popular Articles
            </h2>{" "}
            {/* Style Update */}
            <ul className="space-y-4">
              {footerNavigation.blogItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="footer-text text-sm md:text-base font-normal hover:text-[#55B9FF] hover:underline transition-colors" /* Style Update */
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="order-4 md:order-4">
            <h2 className="footer-h2 mb-5 text-white md:text-lg font-semibold">
              {" "}
              {/* Style Update */}
              {footerContent.headings.contact}
            </h2>
            <ul className="space-y-4">
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
                      className="footer-text text-sm md:text-base font-normal hover:text-[#55B9FF] hover:underline transition-colors" /* Style Update */
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="footer-text text-sm md:text-base font-normal leading-tight">
                      {" "}
                      {/* Style Update */}
                      {contact.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer with updated styling */}
        <div className="text-justify leading-3 max-w-4xl mx-auto mb-10">
          {" "}
          {/* Corrected typo: text-justify */}
          <p className="footer-meta leading-3 text-xs md:text-xs font-light">
            {" "}
            {/* Style Update */}
            <span className="font-semibold">
              {footerContent.legal.disclaimer.label}
            </span>{" "}
            {footerContent.legal.disclaimer.text}
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="text-left border-t border-white/20 pt-6">
          <p className="footer-meta text-xs md:text-sm font-light">
            {" "}
            {/* Style Update */}
            <span className="block w-full pb-2 text-sm md:text-base font-normal">
              {" "}
              {/* Style Update */}
              {footerContent.companyInfo.productLabel}
            </span>
            {footerNavigation.legalLinks.map((link, index) => (
              <span key={link.href}>
                <Link
                  href={link.href}
                  className="footer-link mx-1 text-xs md:text-sm hover:underline"
                >
                  {" "}
                  {/* Style Update */}
                  {link.text}
                </Link>
                {index < footerNavigation.legalLinks.length - 1 ? " | " : ""}
              </span>
            ))}
            <span className="block w-full pt-2 text-xs md:text-sm font-light">
              {" "}
              {/* Style Update */}
              &copy; {footerContent.legal.copyright.text}
            </span>
          </p>
        </div>
      </div>
      <BackToTop /> {/* Add the component here */}
    </footer>
  );
}
