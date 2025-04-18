"use client";

import { useState, useRef, useEffect } from "react"; // Removed useCallback
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
      if (activeMegaMenu) {
        const megaMenuRef = megaMenuRefs.current[activeMegaMenu];
        const menuButtonRef = menuButtonRefs.current[activeMegaMenu];

        // Check if refs exist and if click is outside both elements
        if (
          megaMenuRef &&
          menuButtonRef &&
          !megaMenuRef.contains(event.target as Node) &&
          !menuButtonRef.contains(event.target as Node)
        ) {
          setActiveMegaMenu(null);
        }
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMegaMenu]);

  // ESC key handler to close menus
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && activeMegaMenu) {
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [activeMegaMenu]);

  // Reverted to simple functions without useCallback
  const toggleMegaMenu = (menuId: string) => {
    console.log(`Toggling mega menu: ${menuId}`);
    setActiveMegaMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
  };

  const toggleMobileMenu = () => {
    console.log("Toggling mobile menu");
    setIsOpen((prev) => !prev);
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
          {/* Logo - optimized to reduce LCP */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logos.colorLogo.url}
              alt={logos.colorLogo.alt}
              width={logos.colorLogo.width}
              height={logos.colorLogo.height}
              className="h-10 w-auto"
              priority={true}
              loading="eager"
              sizes="153px" // Updated based on h-10 (40px) and aspect ratio
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAACQAAAwAAQUxQSBcAAAABD9D/ERFCyDa37d+ICPgXqjgjoqA+qgAAVlA4IDYAAACQAQCdASoKAAQAAkA4JZwAAPrHQAD++5AK1AA="
            />
          </Link>

          {/* Desktop Navigation with smaller font size */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                ref={(el) => setMenuButtonRef(el, "categories")}
                className="text-link hover:text-primary flex items-center space-x-1 text-sm"
                onClick={(e) => {
                  // Prevent default browser action but DON'T stop propagation
                  e.preventDefault();
                  toggleMegaMenu("categories");
                }}
                // Keep onKeyDown for accessibility
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleMegaMenu("categories");
                  }
                }}
                aria-expanded={activeMegaMenu === "categories"}
                aria-haspopup="true"
                role="button"
                tabIndex={0}
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
                        className="block px-4 py-2 text-body hover:bg-gray-100"
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
                className="text-link hover:text-primary flex items-center space-x-1 text-sm"
                onClick={(e) => {
                  // Prevent default browser action but DON'T stop propagation
                  e.preventDefault();
                  toggleMegaMenu("blog");
                }}
                // Keep onKeyDown for accessibility
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleMegaMenu("blog");
                  }
                }}
                aria-expanded={activeMegaMenu === "blog"}
                aria-haspopup="true"
                role="button"
                tabIndex={0}
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
                  {/* Changed main grid to 3 columns, links left (2/3), featured right (1/3) */}
                  <div className="p-5 grid grid-cols-3 gap-8">
                    {/* Left Column: Category Links */}
                    <div className="col-span-2 space-y-6">
                      {" "}
                      {/* Container for all link columns */}
                      {headerNavigation.blogMegaMenu.columns.map(
                        (column, idx) => (
                          // Removed inner col-span, columns will stack vertically now
                          <div key={idx}>
                            <h3 className="text-h3 uppercase tracking-wide mb-3">
                              {column.title}
                            </h3>
                            <ul className="space-y-2">
                              {column.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link
                                    href={item.href}
                                    className={
                                      item.isEmphasis
                                        ? "inline-block bg-gray-100 hover:bg-gray-200 text-blue-700 underline underline-offset-2 font-medium text-sm py-1 px-3 rounded-full transition-colors" // Button-like style
                                        : "text-body hover:text-primary block py-1" // Original style
                                    }
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
                      {/* Removed extraneous closing brackets here */}
                    </div>{" "}
                    {/* End Left Column container */}
                    {/* Right Column: Featured Posts */}
                    {headerNavigation.blogMegaMenu.featuredPosts && (
                      // Changed to col-span-1 for the right column
                      <div className="col-span-1">
                        <h3 className="text-h3 uppercase tracking-wide mb-3">
                          {headerNavigation.blogMegaMenu.featuredPosts.title}
                        </h3>
                        {/* Changed internal grid to single column */}
                        <div className="grid grid-cols-1 gap-4">
                          {headerNavigation.blogMegaMenu.featuredPosts.posts.map(
                            (post, idx) => (
                              <Link
                                key={idx}
                                href={post.href}
                                className="group flex space-x-4 items-center" // Use flexbox for row layout
                                onClick={() => setActiveMegaMenu(null)}
                              >
                                {/* Text Content Div */}
                                <div className="flex-grow">
                                  <span className="inline-block bg-blue-600 text-white px-2 py-0.5 rounded text-meta mb-1">
                                    {post.category}
                                  </span>
                                  <h4 className="text-h3 group-hover:text-primary transition-colors line-clamp-2">
                                    {" "}
                                    {/* Limit title lines */}
                                    {post.title}
                                  </h4>
                                </div>
                                {/* Image Content Div */}
                                <div className="flex-shrink-0 w-24 h-16 relative text-blue-700 underline underline-offset-2 rounded-md overflow-hidden">
                                  {" "}
                                  {/* Fixed size image container */}
                                  <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="96px" // Match width
                                    priority={false}
                                    loading="lazy"
                                    quality={75}
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAACQAAAwAAQUxQSBcAAAABD9D/ERFCyDa37d+ICPgXqjgjoqA+qgAAVlA4IDYAAACQAQCdASoKAAQAAkA4JZwAAPrHQAD++5AK1AA="
                                  />
                                </div>
                              </Link>
                            )
                          )}
                        </div>
                        <div className="mt-4 text-right">
                          <Link
                            href="/blog"
                            className="text-link font-medium inline-flex items-center text-blue-700 underline underline-offset-2"
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
            {headerNavigation.mainNavItems
              .filter((item) => item.text !== "BLOG")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-link hover:text-primary text-sm" // text-sm already applied here, confirming
                >
                  {item.text}
                </Link>
              ))}

            {/* Search Button */}
            <Button
              variant="secondary"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Button>
          </nav>

          {/* Mobile Menu Button - Reverted to simple inline onClick */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu} // Re-added inline onClick
              className="p-2 rounded-md bg-white hover:bg-gray-100 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              role="button"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
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
                {/* Navigation Section */}
                <div className="space-y-2">
                  <div className="text-h3 px-4 text-primary font-semibold">
                    {headerContent.mobileMenu.navigateLabel}
                  </div>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-body hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-body hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/financial-solutions"
                    className="block px-4 py-2 text-body hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Financial Solutions
                  </Link>
                  <Link
                    href="/about-us"
                    className="block px-4 py-2 text-body hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block px-4 py-2 text-body hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/credit-card-recommender-p1"
                    className="block px-4 py-2 text-body hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Card Recommender
                  </Link>
                </div>

                {/* Categories Section */}
                <div className="space-y-2">
                  <div className="text-h3 px-4">
                    {headerContent.mobileMenu.categoriesLabel}
                  </div>
                  {headerNavigation.categoryDropdown.items
                    .filter(
                      (item) =>
                        !["About Us", "Card Recommender"].includes(item.text)
                    )
                    .map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-body hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.text}
                      </Link>
                    ))}
                </div>

                {/* Blog Categories - Show fewer items */}
                <div className="space-y-2">
                  <div className="text-h3 px-4">
                    {headerContent.mobileMenu.blogCategories}
                  </div>
                  {headerNavigation.blogMegaMenu.columns[0].items
                    .filter((_, index) => index < 3) // Only show first 3 items
                    .map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-body hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.text}
                      </Link>
                    ))}
                  <Link
                    href="/personal-finance"
                    className="block px-4 py-2 text-blue-600 hover:bg-gray-100 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Show more...
                  </Link>
                </div>

                {/* Popular Articles - Show fewer items */}
                <div className="space-y-2">
                  <div className="text-h3 px-4">
                    {headerContent.mobileMenu.popularArticles}
                  </div>
                  {headerNavigation.blogMegaMenu.columns[1].items
                    .filter((_, index) => index < 3) // Only show first 3 items
                    .map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-body hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.text}
                      </Link>
                    ))}
                  <Link
                    href="/financial-solutions"
                    className="block px-4 py-2 text-blue-600 hover:bg-gray-100 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Show more...
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
