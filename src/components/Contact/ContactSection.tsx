"use client";

import React, { useState } from "react";
import CustomInput from "@/components/Inputs/CustomInput";
import PhoneInput from "@/components/Inputs/PhoneInput";
import TextArea from "@/components/Inputs/TextArea";
import Button from "@/components/Button";
import { Send, MapPin } from "lucide-react";

import { Dictionary } from "@/lib/dictionary";

interface ContactSectionProps {
  dict: Dictionary;
}

export default function ContactSection({ dict }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Form Section */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {dict.contact_get_in_touch}
            </h2>
            <p className="text-gray-600">{dict.contact_subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                {dict.contact_email_label}
              </label>
              <CustomInput
                id="email"
                type="email"
                placeholder={dict.contact_email_placeholder}
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                {dict.contact_phone_label}
              </label>
              <PhoneInput
                id="phone"
                value={formData.phone}
                onChange={(val) => handleChange("phone", val)}
                placeholder={dict.contact_phone_placeholder}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                {dict.contact_message_label}
              </label>
              <TextArea
                id="message"
                placeholder={dict.contact_message_placeholder}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full md:w-auto self-start mt-2"
              icon={<Send className="w-4 h-4" />}
            >
              {dict.contact_send_button}
            </Button>
          </form>
        </div>

        {/* Map Section */}
        <div className="flex flex-col gap-6 h-full">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {dict.contact_visit_us_title}
                </h3>
                <div className="mt-1 text-gray-600 leading-relaxed max-w-sm">
                  <p>{dict.contact_address_line1}</p>
                  <p>{dict.contact_address_line2}</p>
                  <p className="mt-2 text-sm text-gray-500 font-mono">
                    28.107589, 30.749231
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex-1 min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative bg-gray-100 h-full">
            <iframe
              title="Office Location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=28.107589,30.749231&z=15&output=embed"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
