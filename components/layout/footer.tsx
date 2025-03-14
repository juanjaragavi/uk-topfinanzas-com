import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#3354AF] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Logo and Brief Description */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <Image
              src="https://media.topfinanzas.com/images/logo-english-white.png"
              alt="TopFinance Logo"
              width={200}
              height={53}
              className="h-14 w-auto mb-4"
            />
            <p className="text-sm text-white/80 mt-4 max-w-md">
              TopFinanzas helps you find the perfect credit card options
              tailored to your needs with expert recommendations.
            </p>
            {/* Contact Info */}
            <div className="mt-4">
              <div className="flex items-center space-x-2 text-[#55B9FF]">
                <svg
                  className="w-5 h-5"
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
                  href="mailto:support@topfinanzas.com"
                  className="hover:underline"
                >
                  support@topfinanzas.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Section - using flexbox for better alignment */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Credit Cards Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#7BDC54]">
                Credit Cards
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/credit-cards/recommendation"
                    className="text-white/90 hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    Card Recommendations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credit-cards"
                    className="text-white/90 hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    Compare Cards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credit-cards/citi-double-cash"
                    className="text-white/90 hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    Citi Double Cash
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credit-cards/apply/citi-double-cash"
                    className="text-white/90 hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    Apply Now
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#7BDC54]">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/categories/choose-your-card"
                    className="text-white/90 hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    Choose Your Card
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/finances-for-everyone"
                    className="text-white/90 hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    Finances for Everyone
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/financial-solutions"
                    className="text-white/90 hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    Financial Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/personal-finance"
                    className="text-white/90 hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    Personal Finance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#7BDC54]">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-white/90 hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/90 hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-white/90 hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-white/90 hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-[#55B9FF]/30 my-6"></div>

        {/* Disclaimer - More concise and easier to read */}
        <div className="text-sm text-white/70 leading-relaxed max-w-4xl mx-auto">
          <p className="mb-4 text-white/60 leading-tight">
            <span className="font-semibold text-[#7BDC54]">Disclaimer:</span>{" "}
            TopFinanzas strives to keep its information accurate and up to date.
            This information may be different than what you see when you visit a
            financial institution, service provider or specific product's site.
            All financial products and services are presented without warranty.
            When evaluating offers, please review the financial institution's
            Terms and Conditions.
          </p>
        </div>

        {/* Copyright - Simplified */}
        <div className="text-center text-xs text-white/60 mt-6">
          <p className="text-white/60">© 2025 TOP NETWORKS INC. All rights reserved.</p>
          <nav className="pt-2">
            <Link
              href="/terms"
              className="hover:text-[#55B9FF] hover:underline"
            >
              Terms
            </Link>{" "}
            |{" "}
            <Link
              href="/privacy"
              className="hover:text-[#55B9FF] hover:underline"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
