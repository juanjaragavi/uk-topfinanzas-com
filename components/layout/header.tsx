"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-EnglishUS-COLOR-yTAETH4SVJ7JuY5Jgd306C2qMSTjft.png"
              alt="TopFinance Logo"
              width={200}
              height={53}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-600 hover:text-primary flex items-center space-x-1">
                <span>CATEGORIES</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link
                    href="/credit-cards/recommendation"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Card Recommendations
                  </Link>
                  <Link
                    href="/credit-cards"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Compare Cards
                  </Link>
                  <Link
                    href="/credit-cards/citi-double-cash"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Citi Double Cash
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/credit-cards" className="text-gray-600 hover:text-primary">
              CREDIT CARDS
            </Link>
            <Link href="/credit-cards/apply/citi-double-cash" className="text-gray-600 hover:text-primary">
              APPLY NOW
            </Link>
            <Button
              variant="secondary"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Search className="w-5 h-5" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="secondary" onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-100"
            >
              <div className="py-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-gray-100"
            >
              <nav className="py-4 space-y-4">
                <div className="space-y-2">
                  <div className="font-medium px-4">CATEGORIES</div>
                  <Link
                    href="/credit-cards/recommendation"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    Card Recommendations
                  </Link>
                  <Link
                    href="/credit-cards"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    Compare Cards
                  </Link>
                  <Link
                    href="/credit-cards/citi-double-cash"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    Citi Double Cash
                  </Link>
                </div>
                <Link href="/credit-cards" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  CREDIT CARDS
                </Link>
                <Link href="/credit-cards/apply/citi-double-cash" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  APPLY NOW
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
