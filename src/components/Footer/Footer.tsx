"use client";

import Link from "next/link";
import { useDictionary } from "@/hooks/Dickitionary";
import { FaGlobe, FaPhoneAlt, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
// import { HiSolutionsLogo } from "../../../public/icons/icons";
// import { AqariaLogo } from "../../../public/icons/icons";
import Button from "../Button";
import Image from "next/image";
import abstract_shape from "../../../public/images/abstract_shape.webp";
import abstract_shape_foo from "../../../public/images/abstract_shape_foo.webp";
import { useSubscriptionModal } from "@/context/SubscriptionModalContext";

export default function FooterPlus() {
  const ctx = useDictionary();
  const dictionary = ctx.dictionary;
  const lang = ctx.language as "ar" | "en";

  const base = `/${lang}`;
  const { openModal } = useSubscriptionModal();
  return (
    // <footer className=" md:px-10 md:py-10 lg:px-16 lg:py-14 bg-white ">
    <div>
      <footer className="relative mx-auto  text-white bg-gradient-to-r from-[#0199E9] to-[#015683] px-4 py-3 md:px-6 md:py-4 lg:px-20 lg:py-14">
        <Image
          src={abstract_shape}
          alt="Abstract background"
          width={200}
          height={100}
          className="absolute bottom-0 end-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 "
          dir="rtl"
        />
        <Image
          src={abstract_shape_foo}
          alt="Abstract background"
          width={200}
          height={100}
          className="absolute bottom-0 start-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 "
          dir="rtl"
        />
        <div className="relative">
          <div className="grid grid-cols-1  md:grid-cols-5 gap-8 place-items-start    ">
            {/* Brand  */}
            <div className="space-y-4 md:col-span-1  w-auto ">
              <div className="flex items-center gap-2">
                <Link href={`/${lang}`} className="text-xl font-bold">
                  <Image
                    src="https://hiestate.app/api/logo-dark"
                    alt="Logo"
                    width={200}
                    height={56}
                    className="h-14 w-auto"
                  />
                </Link>
              </div>
              <p className="text-white/80 text-sm leading-6">
                {dictionary.footerTagline}
              </p>
              <p>{dictionary.contact_address_line1}</p>
              <p>{dictionary.contact_address_line2}</p>
            </div>

            {/* Product + Learn + Company  container */}
            <div className="flex sm:flex-row  gap-10 w-full  md:col-span-3 h-full">
              {/* Product */}
              <div className="flex-1  ">
                <h3 className="font-semibold mb-3">
                  {dictionary.footerProduct}
                </h3>
                <ul className="space-y-2 text-white/85">
                  <li>
                    <Link
                      href={`${base}/our-features`}
                      className="hover:underline  text-white/80 hover:text-white transition-colors"
                    >
                      {dictionary.navFeatures}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${base}/pricing`}
                      className="hover:underline text-white/80 hover:text-white transition-colors"
                    >
                      {dictionary.navPricing}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Learn */}
              <div className="flex-1 ">
                <h3 className="font-semibold mb-3">{dictionary.footerLearn}</h3>
                <ul className="space-y-2 text-white/85">
                  <li>
                    <Link
                      href={`${base}/about`}
                      className="hover:underline text-white/80 hover:text-white transition-colors"
                    >
                      {dictionary.navAbout}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${base}/contact`}
                      className="hover:underline text-white/80 hover:text-white transition-colors"
                    >
                      {dictionary.navContact}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="flex-1 ">
                <h3 className="font-semibold mb-3">
                  {dictionary.footerCompany}
                </h3>
                <ul className="space-y-2 text-white/85">
                  <li>
                    <Link
                      href={`${base}`}
                      className="hover:underline text-white/80 hover:text-white transition-colors"
                    >
                      {dictionary.navHome}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${base}/terms`}
                      className="hover:underline text-white/80 hover:text-white transition-colors"
                    >
                      {dictionary.terms_page?.title}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${base}/privacy`}
                      className="hover:underline text-white/80 hover:text-white transition-colors"
                    >
                      {dictionary.privacy_page?.title}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${base}/refund`}
                      className="hover:underline text-white/80 hover:text-white transition-colors"
                    >
                      {dictionary.refund_page?.title}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* social and try button  */}
            <div className="space-y-4 md:col-span-1  w-full">
              <div className="flex items-center gap-3">
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/hi-solutions-eg/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  aria-label="Website"
                  href="https://hi-solutions.co/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <FaGlobe className="w-5 h-5" />
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

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="w-5 h-5" />
                <p>+20 100 332 8484</p>
              </div>
              {/* input and button*/}
              <form className="flex items-stretch max-w-sm gap-2 ">
                {/* <input
                  type="email"
                  placeholder={dictionary.footerEmailPlaceholder}
                  className="w-full rounded-xl px-3 py-2 text-gray-900 bg-white  -[#9AA4B1] hover:cursor-pointer focus:-[#0199E9] transition-all duration-300"
                /> */}
                <Button
                  type="button"
                  className="!bg-white !text-(--Primary) px-4 py-2 rounded-xl md:font-medium hover:!bg-blue-50 w-full"
                  onClick={() => openModal()}
                >
                  {/* {dictionary.footerSignup} */}
                  {dictionary.get_your_copy_now}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className=" -t -white/20 text-(--Primary) text-sm flex flex-col md:flex-row items-center justify-between gap-3 px-4 md:px-6 lg:px-20 py-6">
        <span>
          &copy; {new Date().getFullYear()} . {dictionary.allRightsReserved}
        </span>
      </div>
    </div>
  );
}
