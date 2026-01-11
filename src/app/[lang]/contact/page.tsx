import { getDictionary } from "@/lib/dictionary";
import { Params } from "../layout";
import ContactSection from "@/components/Contact/ContactSection";

export default async function ContactPage({ params }: { params: Params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {dict.navContact}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            {dict.contact_header_description}
          </p>
        </div>
      </section>

      <ContactSection dict={dict} />
    </div>
  );
}
