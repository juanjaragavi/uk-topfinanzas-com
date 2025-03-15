"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { headerNavigation } from "@/lib/navigation/headerNavigation";
import { headerContent } from "@/lib/texts/header/content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const megaMenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const menuButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>(
    {}
  );

  // Handle click outside to close mega menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        activeMegaMenu &&
        megaMenuRefs.current[activeMegaMenu] &&
        menuButtonRefs.current[activeMegaMenu] &&
        !megaMenuRefs.current[activeMegaMenu]?.contains(event.target as Node) &&
        !menuButtonRefs.current[activeMegaMenu]?.contains(event.target as Node)
      ) {
        setActiveMegaMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMegaMenu]);

  const toggleMegaMenu = (menuId: string) => {
    if (activeMegaMenu === menuId) {
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(menuId);
    }
  };

  const setMenuButtonRef = (el: HTMLButtonElement | null, key: string) => {
    menuButtonRefs.current[key] = el;
  };

  const setMegaMenuRef = (el: HTMLDivElement | null, key: string) => {
    megaMenuRefs.current[key] = el;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logos.colorLogo.url}
              alt={logos.colorLogo.alt}
              width={logos.colorLogo.width}
              height={logos.colorLogo.height}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                ref={(el) => setMenuButtonRef(el, "categories")}
                className="text-gray-600 hover:text-primary flex items-center space-x-1"
                onClick={() => toggleMegaMenu("categories")}
                aria-expanded={activeMegaMenu === "categories"}
              >
                <span>{headerNavigation.categoryDropdown.text}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeMegaMenu === "categories" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeMegaMenu === "categories" && (
                <div
                  ref={(el) => setMegaMenuRef(el, "categories")}
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                >
                  <div className="py-1">
                    {headerNavigation.categoryDropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setActiveMegaMenu(null)}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog Menu Item with Mega Menu */}
            <div className="relative">
              <button
                ref={(el) => setMenuButtonRef(el, "blog")}
                className="text-gray-600 hover:text-primary flex items-center space-x-1"
                onClick={() => toggleMegaMenu("blog")}
                aria-expanded={activeMegaMenu === "blog"}
              >
                <span>{headerNavigation.blogMegaMenu.title}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeMegaMenu === "blog" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeMegaMenu === "blog" && (
                <div
                  ref={(el) => setMegaMenuRef(el, "blog")}
                  className="absolute right-0 mt-2 w-auto max-w-4xl rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                  style={{
                    width: "calc(min(90vw, 900px))",
                    maxHeight: "calc(100vh - 100px)",
                    overflowY: "auto",
                  }}
                >
                  <div className="p-5 grid grid-cols-12 gap-4">
                    {/* Menu Columns */}
                    {headerNavigation.blogMegaMenu.columns.map(
                      (column, idx) => (
                        <div key={idx} className="col-span-12 md:col-span-2">
                          <h3 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wide">
                            {column.title}
                          </h3>
                          <ul className="space-y-2">
                            {column.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  href={item.href}
                                  className="text-gray-600 hover:text-primary text-sm block py-1"
                                  onClick={() => setActiveMegaMenu(null)}
                                >
                                  {item.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}

                    {/* Featured Posts */}
                    {headerNavigation.blogMegaMenu.featuredPosts && (
                      <div className="col-span-12 md:col-span-8">
                        <h3 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wide">
                          {headerNavigation.blogMegaMenu.featuredPosts.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {headerNavigation.blogMegaMenu.featuredPosts.posts.map(
                            (post, idx) => (
                              <Link
                                key={idx}
                                href={post.href}
                                className="group block"
                                onClick={() => setActiveMegaMenu(null)}
                              >
                                <div className="relative aspect-video rounded-xl overflow-hidden mb-2">
                                  <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                  <div className="absolute bottom-2 left-2">
                                    <span className="inline-block bg-blue-600 text-white px-2 py-0.5 rounded text-xs">
                                      {post.category}
                                    </span>
                                  </div>
                                </div>
                                <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                                  {post.title}
                                </h4>
                              </Link>
                            )
                          )}
                        </div>
                        <div className="mt-4 text-right">
                          <Link
                            href="/blog"
                            className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                            onClick={() => setActiveMegaMenu(null)}
                          >
                            {headerContent.blogMegaMenu.viewAllText}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {headerNavigation.mainNavItems.map(
              (item) =>
                item.text !== "BLOG" && (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-primary"
                  >
                    {item.text}
                  </Link>
                )
            )}

            {/* Search Button */}
            <Button
              variant="secondary"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Search className="w-5 h-5" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="secondary"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
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
                    placeholder={headerContent.search.placeholder}
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
                {/* Categories Section */}
                <div className="space-y-2">
                  <div className="font-medium px-4">
                    {headerContent.mobileMenu.categoriesLabel}
                  </div>
                  {headerNavigation.categoryDropdown.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>

                {/* Blog Categories */}
                <div className="space-y-2">
                  <div className="font-medium px-4">
                    {headerContent.mobileMenu.blogCategories}
                  </div>
                  {headerNavigation.blogMegaMenu.columns[0].items.map(
                    (item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.text}
                      </Link>
                    )
                  )}
                </div>

                {/* Popular Articles */}
                <div className="space-y-2">
                  <div className="font-medium px-4">
                    {headerContent.mobileMenu.popularArticles}
                  </div>
                  {headerNavigation.blogMegaMenu.columns[1].items.map(
                    (item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.text}
                      </Link>
                    )
                  )}
                </div>

                {/* Main nav items */}
                {headerNavigation.mainNavItems.map(
                  (item) =>
                    item.text !== "BLOG" && (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.text}
                      </Link>
                    )
                )}

                {/* Blog Link */}
                <Link
                  href="/blog"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {headerContent.mobileMenu.allArticles}
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
