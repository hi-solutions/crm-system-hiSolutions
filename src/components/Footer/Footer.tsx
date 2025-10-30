"use client";

import Link from "next/link";
import { useDictionary } from "@/hooks/Dickitionary";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { HiSolutionsLogo } from "../../../public/icons/icons";
import Button from "../Button";

export default function Footer() {
  const ctx = useDictionary();
  const dictionary = ctx.dictionary;
  const lang = ctx.language as "ar" | "en";

  const base = `/${lang}`;

  return (
    <footer className=" md:px-10 md:py-10 lg:px-16 lg:py-14 bg-white ">
      <div className="mx-auto max-w-7xl text-white bg-gradient-to-r from-[#0199E9] to-[#015683] md:rounded-4xl px-4 py-3 md:px-6 md:py-4 lg:px-20 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand + tagline + socials + signup */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <HiSolutionsLogo className="h-14 w-auto" />
            </div>
            <p className="text-white/80 text-sm leading-6">
              {dictionary.footerTagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                aria-label="Twitter"
                href={dictionary.socialTwitterUrl}
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                aria-label="LinkedIn"
                href={dictionary.socialLinkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                aria-label="Facebook"
                href={dictionary.socialFacebookUrl}
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
            </div>
            {/* input and button*/}
            <form className="flex items-stretch max-w-sm gap-2">
              <input
                type="email"
                placeholder={dictionary.footerEmailPlaceholder}
                className="w-full rounded-xl px-3 py-2 text-gray-900 bg-white border border-[#9AA4B1] hover:cursor-pointer focus:border-[#0199E9] transition-all duration-300"
              />
              <Button
                type="button"
                className="!bg-white !text-blue-700 px-4 py-2 rounded-xl font-medium hover:!bg-blue-50"
              >
                {dictionary.footerSignup}
              </Button>
            </form>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3">{dictionary.footerProduct}</h3>
            <ul className="space-y-2 text-white/85">
              <li>
                <Link href={`${base}/our-features`} className="hover:underline">
                  {dictionary.navFeatures}
                </Link>
              </li>
              <li>
                <Link href={`${base}/pricing`} className="hover:underline">
                  {dictionary.navPricing}
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold mb-3">{dictionary.footerLearn}</h3>
            <ul className="space-y-2 text-white/85">
              <li>
                <Link href={`${base}/about`} className="hover:underline">
                  {dictionary.navAbout}
                </Link>
              </li>
              <li>
                <Link href={`${base}/contact`} className="hover:underline">
                  {dictionary.navContact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">{dictionary.footerCompany}</h3>
            <ul className="space-y-2 text-white/85">
              <li>
                <Link href={`${base}`} className="hover:underline">
                  {dictionary.navHome}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-white/80 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <span>
            © 2025 {dictionary.brandLegal}. {dictionary.allRightsReserved}
          </span>
          <span className="text-white/70">{dictionary.footerBadge}</span>
        </div>
      </div>
    </footer>
  );
}
