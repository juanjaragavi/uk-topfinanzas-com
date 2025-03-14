import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3354AF] to-[#274890] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo Section - Added at the top for mobile */}
        <div className="flex justify-center md:justify-start mb-8">
          <Image
            src="https://media.topfinanzas.com/images/logo-english-white.png"
            alt="TopFinance Logo"
            width={300}
            height={63}
            className="h-20 w-auto"
            priority
          />
        </div>

        {/* Main Footer Sections - Reordered for better mobile experience */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Navigation Links - Most important for mobile users */}
          <div className="order-1 md:order-1">
            <h2 className="text-xl font-semibold mb-5 text-[#7BDC54]">
              Navigate
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-[#55B9FF] hover:underline transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-[#55B9FF] hover:underline transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-[#55B9FF] hover:underline transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Social Media Section - Moved closer to navigation for better visibility */}
            <div className="mt-6">
              <p className="mb-3 text-[#55B9FF]">Follow us on social media</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/topfinance_en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#55B9FF] transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/top-networks-inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#55B9FF] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="order-2 md:order-2">
            <h2 className="text-xl font-semibold mb-5 text-[#7BDC54]">
              Categories
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/categories/personal-finance"
                  className="text-white hover:text-[#55B9FF] hover:underline transition-colors"
                >
                  Personal Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/financial-solutions"
                  className="text-white hover:text-[#55B9FF] hover:underline transition-colors"
                >
                  Financial Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/student-finance"
                  className="text-white hover:text-[#55B9FF] hover:underline transition-colors"
                >
                  Student Finance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="order-3 md:order-3">
            <h2 className="text-xl font-semibold mb-5 text-[#7BDC54]">
              Contact
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-[#55B9FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@topfinanzas.com"
                  className="text-white hover:text-[#55B9FF] hover:underline transition-colors"
                >
                  info@topfinanzas.com
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-1 text-[#55B9FF] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm leading-tight">
                  AV. AQUILINO DE LA GUARDIA, OCEAN BUSINESS PLAZA BUILDING,
                  FLOOR 12, PANAMA CITY, PANAMA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer with updated styling */}
        <div className="text-jusfity text-sm leading-relaxed max-w-4xl mx-auto mb-8 bg-[#274890]/50 p-4 rounded-lg">
          <p className="text-white/90">
            <span className="font-semibold text-[#7BDC54]">Disclaimer:</span>{" "}
            TopFinanzas strives to keep its information accurate and up to date.
            This information may be different than what you see when you visit a
            financial institution, service provider or specific product's site.
            All financial products, shopping products and services are presented
            without warranty. When evaluating offers, please review the
            financial institution's Terms and Conditions. Pre-qualified offers
            are not binding.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs border-t border-white/20 pt-4">
          <p className="text-white/80">
          <span className="block sm:inline w-full py-4">A TOP NETWORKS INC. Product </span><span className="hidden sm:inline"> &nbsp;&nbsp; | &nbsp; </span>
            <Link href="/terms" className="text-[#55B9FF] hover:underline mx-2">
              Terms & Conditions
            </Link>{" "}
            &nbsp; | &nbsp;
            <Link
              href="/privacy-policy"
              className="text-[#55B9FF] hover:underline mx-2"
            >
              Privacy Policy
            </Link>{" "}
            <span className="hidden sm:inline"> &nbsp;&nbsp; | &nbsp; </span>
            <span className="block sm:inline w-full py-4">&nbsp; &copy; Copyright Top
            Networks Inc. 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
