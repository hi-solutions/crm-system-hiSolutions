import { getDictionary } from "@/lib/dictionary";
import { Params } from "../layout";

export default async function ContactPage({ params }: { params: Params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="pt-28 pb-20 bg-gray-50">
        <div className="mx-auto px-4 md:px-10 lg:px-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {dict.navContact}
          </h1>
          <p className="text-lg text-gray-600">
            Reach out to us and we will get back to you shortly.
          </p>
        </div>
      </section>
    </div>
  );
}
