import { getDictionary } from "@/lib/dictionary";
import { Params } from "../layout";
import PricingSection from "@/components/home sections/Pricing";
import FAQSection from "@/components/FAQ/FAQSection";
import PricesComparison from "@/components/pricing-sections/PricesComparison";
import PrisingHeading from "@/components/pricing-sections/PrisingHeading";
// import DecoratedElements from "@/components/DecoratedElements/DecoratedElements";
export default async function PricingPage({ params }: { params: Params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-white ">
      {/* hero sectin  */}
      <PrisingHeading dict={dict} />

      {/* pricing section  */}
      <section className="py-20 px-4 md:px-10 lg:px-16 relative flex flex-col items-center justify-center gap-10  bg-gradient-to-b from-gray-50 to-white">
        <div className="min-h-screen bg-white ">
          <PricingSection dict={dict} />
        </div>
      </section>

      {/* Comprehensive comparison of plans section  */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10">
        <PricesComparison dict={dict} />
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-10 lg:px-16 relative flex flex-col items-center justify-center gap-10 bg-white">
        <div className="min-h-screen bg-white">
          <FAQSection /> {/* FAQSection component */}
        </div>
      </section>
    </div>
  );
}
