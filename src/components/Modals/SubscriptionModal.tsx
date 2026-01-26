"use client";

import React, { useState } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useSubscriptionModal } from "@/context/SubscriptionModalContext";
import CustomInput from "@/components/Inputs/CustomInput";
import PhoneInput from "@/components/Inputs/PhoneInput";
import Button from "../Button";
import { useDictionary } from "@/hooks/Dickitionary";
import { SubmitSubscriptionForm } from "@/Service/Apis";
import { useNotification } from "@refinedev/core";

export interface SubscriptionFormData {
  full_name?: string;
  company_name_ar?: string;
  company_name_en?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  plan_id?: Plans;
}

export const enum Plans {
  PLAN_FREE = 1,
  PLAN_PREMIUM = 2,
  PLAN_ENTERPRISE = 3,
  PLAN_PERSONAL = 4,
}

const SubscriptionModal = () => {
  const { dictionary } = useDictionary();
  const { open } = useNotification();
  const [loading, setLoading] = useState(false);
  const { isOpen, closeModal, plan } = useSubscriptionModal();
  const [formData, setFormData] = useState<SubscriptionFormData>({
    full_name: "",
    company_name_ar: "",
    company_name_en: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    plan_id: plan
      ? plan === "Free"
        ? Plans.PLAN_FREE
        : plan === "Premium"
          ? Plans.PLAN_PREMIUM
          : plan === "Enterprise"
            ? Plans.PLAN_ENTERPRISE
            : Plans.PLAN_PERSONAL
      : Plans.PLAN_FREE,
  });

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phone: false,
    password: false,
    companyNameAr: false,
  });

  const validateEmail = (email: string) => {
    return email.includes("@");
  };

  const validatePhone = (phone: string) => {
    return phone.length > 8; // Basic length check
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const validateLength = (text: string, minLength: number) => {
    return text.length >= minLength;
  };

  const isEmailValid = validateEmail(formData.email || "");
  const isPhoneValid = validatePhone(formData.phone || "");
  const isPasswordValid = validatePassword(formData.password || "");
  const isFullNameValid = validateLength(formData.full_name || "", 3);
  const isCompanyNameArValid = validateLength(formData.company_name_ar || "", 2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      password: true,
      companyNameAr: true,
    });

    if (
      isEmailValid &&
      isPhoneValid &&
      isPasswordValid &&
      isFullNameValid &&
      isCompanyNameArValid
    ) {
      setLoading(true);
      console.log("Submitting form:", { ...formData, plan });

      SubmitSubscriptionForm(formData)
        .then(() => {
          open?.({
            type: "success",
            message: "Success",
            description: "Your subscription request has been sent successfully.",
          });

          closeModal();

          // Reset form
          setFormData({
            full_name: "",
            company_name_ar: "",
            company_name_en: "",
            email: "",
            password: "",
            phone: "",
            address: "",
            city: "",
            country: "",
            plan_id: Plans.PLAN_FREE,
          });
          setTouched({
            fullName: false,
            email: false,
            phone: false,
            password: false,
            companyNameAr: false,
          });
        })
        .catch((err) => {
          console.error(err);
          open?.({
            type: "error",
            message: "Error",
            description:
              err?.response?.data?.message ||
              err?.message ||
              "Failed to submit subscription. Please try again.",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // Scroll to top of modal when error
  React.useEffect(() => {
    if (isOpen) {
      // Logic if needed
    }
  }, [isOpen]);

  const getDirection = (text: string | undefined) => {
    if (!text) return undefined;
    return /[\u0600-\u06FF]/.test(text) ? "rtl" : "ltr";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan
                    ? dictionary.modal_title_plan.replace("{{plan}}", plan)
                    : dictionary.modal_title_default}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {dictionary.modal_subtitle}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">

              {/* Essential Info Section */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput
                    type="text"
                    placeholder={dictionary.modal_full_name_placeholder}
                    value={formData.full_name}
                    onChange={(e) =>
                      setFormData({ ...formData, full_name: e.target.value })
                    }
                    onBlur={() => setTouched({ ...touched, fullName: true })}
                    errorText={
                      touched.fullName && !isFullNameValid
                        ? dictionary.modal_full_name_error
                        : undefined
                    }
                    isValid={touched.fullName && isFullNameValid}
                    dir={getDirection(formData.full_name)}
                  />

                  <PhoneInput
                    placeholder={dictionary.modal_phone_placeholder}
                    value={formData.phone ?? ""}
                    onChange={(val) => setFormData({ ...formData, phone: val })}
                    onBlur={() => setTouched({ ...touched, phone: true })}
                    errorText={
                      touched.phone && !isPhoneValid
                        ? dictionary.modal_phone_error
                        : undefined
                    }
                    isValid={touched.phone && isPhoneValid}
                    dir={getDirection(formData.phone)}
                  />
                </div>

                <CustomInput
                  type="email"
                  placeholder={dictionary.modal_email_placeholder}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  onBlur={() => setTouched({ ...touched, email: true })}
                  errorText={
                    touched.email && !isEmailValid
                      ? dictionary.modal_email_error
                      : undefined
                  }
                  isValid={touched.email && isEmailValid}
                  dir="ltr"
                />

                <CustomInput
                  type="password"
                  placeholder={dictionary.modal_password_placeholder}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  onBlur={() => setTouched({ ...touched, password: true })}
                  errorText={
                    touched.password && !isPasswordValid
                      ? dictionary.modal_password_error
                      : undefined
                  }
                  isValid={touched.password && isPasswordValid}
                  dir="ltr"
                />
              </div>

              <div className="h-px bg-gray-100 w-full" />

              {/* Company Info Section */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput
                    type="text"
                    placeholder={dictionary.modal_company_name_ar_placeholder}
                    value={formData.company_name_ar}
                    onChange={(e) =>
                      setFormData({ ...formData, company_name_ar: e.target.value })
                    }
                    onBlur={() => setTouched({ ...touched, companyNameAr: true })}
                    errorText={
                      touched.companyNameAr && !isCompanyNameArValid
                        ? dictionary.modal_company_name_ar_error
                        : undefined
                    }
                    isValid={touched.companyNameAr && isCompanyNameArValid}
                    dir={getDirection(formData.company_name_ar)}
                  />
                  <CustomInput
                    type="text"
                    placeholder={dictionary.modal_company_name_en_placeholder}
                    value={formData.company_name_en}
                    onChange={(e) =>
                      setFormData({ ...formData, company_name_en: e.target.value })
                    }
                    isValid={!!formData.company_name_en}
                    dir={getDirection(formData.company_name_en)}
                  />
                </div>

                <CustomInput
                  type="text"
                  placeholder={dictionary.modal_address_placeholder}
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  isValid={!!formData.address}
                  dir={getDirection(formData.address)}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput
                    type="text"
                    placeholder={dictionary.modal_city_placeholder}
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    dir={getDirection(formData.city)}
                  />
                  <CustomInput
                    type="text"
                    placeholder={dictionary.modal_country_placeholder}
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    dir={getDirection(formData.country)}
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  className="w-full justify-center rounded-full shadow-lg shadow-blue-500/20 active:scale-[0.98] flex flex-row"
                  icon={
                    loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {dictionary.modal_confirm_button}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionModal;
