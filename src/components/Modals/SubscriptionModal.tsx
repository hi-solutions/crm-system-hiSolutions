"use client";

import React, { useState } from "react";
import { X, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useSubscriptionModal } from "@/context/SubscriptionModalContext";
import CustomInput from "@/components/Inputs/CustomInput";
import PhoneInput from "@/components/Inputs/PhoneInput";
import Button from "../Button";

interface SubscriptionFormData {
  email: string;
  phone: string;
  // password: string; // Removed per user request? Wait, user asked for "email, phone number, and password".
  // Adding password back.
  password: string;
}

import { useDictionary } from "@/hooks/Dickitionary";

const SubscriptionModal = () => {
  const { dictionary } = useDictionary();
  const { isOpen, closeModal, plan } = useSubscriptionModal();
  const [formData, setFormData] = useState<SubscriptionFormData>({
    email: "",
    phone: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    phone: false,
    password: false,
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

  const isEmailValid = validateEmail(formData.email);
  const isPhoneValid = validatePhone(formData.phone);
  const isPasswordValid = validatePassword(formData.password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, phone: true, password: true });

    if (isEmailValid && isPhoneValid && isPasswordValid) {
      console.log("Submitting form:", { ...formData, plan });
      // Here you would send data to backend
      closeModal();
      // Reset form
      setFormData({ email: "", phone: "", password: "" });
      setTouched({ email: false, phone: false, password: false });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
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
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
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
              />

              <PhoneInput
                placeholder={dictionary.modal_phone_placeholder}
                value={formData.phone}
                onChange={(val) => setFormData({ ...formData, phone: val })}
                onBlur={() => setTouched({ ...touched, phone: true })}
                errorText={
                  touched.phone && !isPhoneValid
                    ? dictionary.modal_phone_error
                    : undefined
                }
                isValid={touched.phone && isPhoneValid}
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
              />

              <div className="pt-2">
                <Button
                  className="w-full justify-center rounded-full shadow-lg shadow-blue-500/20 active:scale-[0.98] flex flex-row"
                  icon={<Send className="w-4 h-4" />}
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
