import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#4338CA] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-EnglishU-zkDlV7wEpjzCevl2yyXTxeyLQQoocr.png"
              alt="TopFinance Logo"
              width={280}
              height={74}
              className="h-20 w-auto"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories/choose-your-card"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  Choose Your Card
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/finances-for-everyone"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  Finances for Everyone
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/financial-solutions"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  Financial Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/loans-and-credits"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  Loans and Credits
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/personal-finance"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  Personal Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/student-finances"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  Student Finances
                </Link>
              </li>
            </ul>
          </div>

          {/* Archive */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Archive</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/archive/2025/02"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  February 2025
                </Link>
              </li>
              <li>
                <Link
                  href="/archive/2025/01"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  January 2025
                </Link>
              </li>
              <li>
                <Link
                  href="/archive/2024/12"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  December 2024
                </Link>
              </li>
              <li>
                <Link
                  href="/archive/2024/11"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  November 2024
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/90 hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white hover:underline transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/90 hover:text-white hover:underline transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
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
                <span className="text-gray-200">support@topfinanzas.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/20 pt-8 text-sm text-white/90">
          <p className="mb-4">
            Disclaimer: TopFinanzas strives to keep its information accurate and up to date. This information may be
            different than what you see when you visit a financial institution, service provider or specific product's
            site. All financial products, shopping products and services are presented without warranty. When evaluating
            offers, please review the financial institution's Terms and Conditions. Pre-qualified offers are not
            binding.
          </p>
          <p className="mb-4 text-xs text-white/90">
            ALL RIGHTS RESERVED, ©TOP NETWORKS INC 2025. TOTAL OR PARTIAL REPRODUCTION BY ANY MEANS OR FORM IS
            PROHIBITED WITHOUT THE WRITTEN AND EXPRESS AUTHORIZATION OF THE COPYRIGHT HOLDER.
          </p>
          <div className="text-center text-xs text-white/90">
            <p>
              A TOP NETWORKS INC. Product |{" "}
              <Link href="/terms" className="hover:underline">
                Terms & Conditions
              </Link>{" "}
              |{" "}
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              | Copyright Top Networks Inc. 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

