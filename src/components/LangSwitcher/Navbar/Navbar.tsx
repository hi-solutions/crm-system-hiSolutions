"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiCrmLogo } from "../../../../public/icons/icons";
import { GB, SA } from "country-flag-icons/react/3x2";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";

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

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  // language flag rendering handled inside LanguageDropdown

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white ">
      <div className=" px-4 md:px-10 lg:px-16 ">
        {/* <div className="max-w-7xl mx-auto lg:px-20 px-4 md:px-16"> */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center flex-1">
            <HiCrmLogo className="h-14 w-auto" />
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navLinks.map((link, index) => {
              // Normalize paths for comparison (remove trailing slashes except for root)
              const normalizedPathname =
                pathname === "/" ? pathname : pathname.replace(/\/$/, "");
              const normalizedHref =
                link.href === "/" ? link.href : link.href.replace(/\/$/, "");
              const isActive = normalizedPathname === normalizedHref;
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`whitespace-nowrap transition-colors text-base ${
                    isActive
                      ? "text-[#005FDA] font-semibold"
                      : "text-gray-700 hover:text-blue-600 font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button and Language Switcher (dropdown) */}
          <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
            {ctaButton && (
              <Link href={ctaButton.href}>
                <Button className="shadow-sm hover:shadow-md text-base">
                  {ctaButton.text}
                </Button>
              </Link>
            )}

            <LanguageDropdown
              languages={languages}
              currentLang={currentLang}
              onChange={handleLanguageChange}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function LanguageDropdown({
  languages,
  currentLang,
  onChange,
}: {
  languages: { code: string; label: string }[];
  currentLang: string;
  onChange: (code: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const Flag = ({ code }: { code: string }) => {
    if (code === "ar") return <SA title="Saudi Arabia" className="w-6 h-4" />;
    return <GB title="United Kingdom" className="w-6 h-4" />;
  };

  return (
    <div className="relative" ref={ref} aria-label="Language selector">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-2.5 py-1.5 border border-gray-200 hover:border-gray-300 rounded-md bg-white shadow-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Flag code={currentLang} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 text-gray-600"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg p-1 z-50"
          role="listbox"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onChange(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-left hover:bg-gray-50 ${
                currentLang === lang.code ? "bg-gray-50" : ""
              }`}
              role="option"
              aria-selected={currentLang === lang.code}
            >
              <Flag code={lang.code} />
              <span className="text-sm text-gray-700">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
