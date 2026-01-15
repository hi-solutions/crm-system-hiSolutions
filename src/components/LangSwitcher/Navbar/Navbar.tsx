"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { HiCrmLogo } from "../../../../public/icons/icons";
import { AqariaLogoNav } from "../../../../public/icons/icons";
import { EG, GB } from "country-flag-icons/react/3x2";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSubscriptionModal } from "@/context/SubscriptionModalContext";

export interface Language {
  code: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  languages: Language[];
  navLinks: NavLink[];
  currentLang: string;
  logo?: {
    text: string;
    icon?: React.ReactNode;
  };
  ctaButton?: {
    text: string;
    href: string;
  };
}

export default function Navbar({
  languages,
  navLinks,
  currentLang,
  ctaButton,
}: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const { openModal } = useSubscriptionModal();

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
    setIsLangDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    };

    if (isLangDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangDropdownOpen]);

  // Check if current path matches a link (handles home page correctly)
  const isActive = (href: string) => {
    // Normalize paths for comparison (remove trailing slashes except for root)
    const normalizedPathname =
      pathname === "/" ? pathname : pathname.replace(/\/$/, "");
    const normalizedHref = href === "/" ? href : href.replace(/\/$/, "");

    // Handle home page case
    const pathSegments = pathname.split("/");
    const currentLangFromPath = pathSegments[1] || currentLang;
    const homePath = `/${currentLangFromPath}`;

    if (
      normalizedHref === homePath ||
      normalizedHref === `/${currentLangFromPath}/`
    ) {
      // Home page: match exactly or when pathname is just /lang
      return (
        normalizedPathname === homePath ||
        pathname === `/${currentLangFromPath}/`
      );
    }

    return (
      normalizedPathname === normalizedHref ||
      normalizedPathname.startsWith(`${normalizedHref}/`)
    );
  };

  return (
    <nav className="bg-white top-0 left-0 right-0 z-50">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-16">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center ">
            <Link href={`/${currentLang}`} className="text-xl font-bold">
              <AqariaLogoNav className="h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation (hidden below 958px) */}
          <div className="hidden lg:flex items-center space-x-8 text-nowrap flex-1 justify-center ">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`relative font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive(link.href)
                    ? "text-(--Primary)"
                    : "text-gray-700 hover:text-(--Primary)"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-(--Primary)"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons and Language Selector (hidden below 958px) */}
          <div className="hidden lg:flex items-center space-x-4  justify-end ">
            {ctaButton && (
              <div className="flex items-center space-x-4 text-nowrap">
                {/* <Link href={ctaButton.href}>
                  <Button className="shadow-sm hover:shadow-md text-base">
                    {ctaButton.text}
                  </Button>
                </Link> */}
                <Button
                  onClick={() => openModal()}
                  className="shadow-sm hover:shadow-md text-base px-6 py-3 rounded-3xl "
                >
                  {ctaButton.text}
                </Button>
              </div>
            )}
            {/* Language Dropdown */}
            <LanguageDropdown
              languages={languages}
              currentLang={currentLang}
              onChange={handleLanguageChange}
              isOpen={isLangDropdownOpen}
              setIsOpen={setIsLangDropdownOpen}
              ref={langDropdownRef}
            />
          </div>

          {/* Mobile menu button (visible below 958px) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-(--Primary) focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (visible below 958px) */}
      {/* Mobile Menu (visible below 958px) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.href)
                      ? "text-(--Primary) bg-gray-50"
                      : "text-gray-700 hover:bg-gray-50 hover:text-(--Primary)"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="block w-full h-0.5 bg-(--Primary) mt-1"></span>
                  )}
                </Link>
              ))}
              {/* Mobile Language Selector */}
              <div className="pt-4 pb-2 px-3">
                <LanguageDropdown
                  languages={languages}
                  currentLang={currentLang}
                  onChange={handleLanguageChange}
                  isOpen={isLangDropdownOpen}
                  setIsOpen={setIsLangDropdownOpen}
                  isMobile={true}
                  ref={langDropdownRef}
                />
              </div>
              {ctaButton && (
                <div className="pt-4 pb-2 px-3 space-y-2">
                  <Link
                    href={ctaButton.href}
                    className="block w-full text-center px-4 py-2 bg-(--Primary) text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {ctaButton.text}
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const LanguageDropdown = React.forwardRef<
  HTMLDivElement,
  {
    languages: { code: string; label: string }[];
    currentLang: string;
    onChange: (code: string) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    isMobile?: boolean;
  }
>(
  (
    { languages, currentLang, onChange, isOpen, setIsOpen, isMobile = false },
    ref
  ) => {
    const Flag = ({ code }: { code: string }) => {
      if (code === "ar") return <EG title="Egypt" className="w-6 h-4" />;
      return <GB title="United Kingdom" className="w-6 h-4" />;
    };

    if (isMobile) {
      return (
        <div className="relative" ref={ref} aria-label="Language selector">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center justify-center w-6 h-4">
                <Flag code={currentLang} />
              </span>
              <span className="text-sm font-medium">
                {languages.find((l) => l.code === currentLang)?.label ||
                  currentLang.toUpperCase()}
              </span>
            </div>
            <ChevronDown size={18} />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden border-gray-200 rounded-md"
              >
                <div className="border border-gray-200 rounded-md">
                  {languages.map((lang, index) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onChange(lang.code);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center space-x-2 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 ${
                        index === 0 ? "rounded-t-md" : ""
                      } ${
                        index === languages.length - 1 ? "rounded-b-md" : ""
                      } ${index > 0 ? "border-t border-gray-100" : ""}`}
                    >
                      <span className="inline-flex items-center justify-center w-6 h-4">
                        <Flag code={lang.code} />
                      </span>
                      <span className="text-sm font-medium">{lang.label}</span>
                      {currentLang === lang.code && (
                        <span className="ml-auto text-(--Primary)">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <div className="relative" ref={ref} aria-label="Language selector ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="inline-flex items-center justify-center w-6 h-4">
            <Flag code={currentLang} />
          </span>
          {/* language code better UX without it */}
          {/* <span className="text-sm font-medium">
            {currentLang.toUpperCase()}
          </span> */}
          <ChevronDown size={16} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`absolute mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50 ${
                currentLang === "ar" ? "left-0" : "right-0"
              }`}
            >
              {languages.map((lang, index) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onChange(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-300 hover:cursor-pointer  ${
                    index > 0 ? "border-t border-gray-100" : ""
                  }`}
                  role="option"
                  aria-selected={currentLang === lang.code}
                >
                  <span className="inline-flex items-center justify-center w-6 h-4">
                    <Flag code={lang.code} />
                  </span>
                  <span className="text-sm font-medium">{lang.label}</span>
                  {currentLang === lang.code && (
                    <span className="ml-auto text-(--Primary)">✓</span>
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

LanguageDropdown.displayName = "LanguageDropdown";
