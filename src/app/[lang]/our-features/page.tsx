import { getDictionary } from "@/lib/dictionary";
import { Params } from "../layout";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Button from "@/components/Button";
import Image from "next/image";
import FAQSection from "@/components/FAQ/FAQSection";
import FeaturesGrid from "@/components/our-features/FeaturesGrid";
import FeatureDetailSection from "@/components/our-features/FeatureDetailSection";

export default async function FeaturesPage({ params }: { params: Params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const affectiveManagementList = dict.effective_management_list;
  const smartInsightsList = dict.smart_insights_list;
  const speedAndEfficiencyList = dict.speed_and_efficiency_list;

  return (
    <div className="min-h-screen bg-white ">
      {/* header section  */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10">
        <SectionHeader
          tag={{ title: dict?.features }}
          title={dict?.powerful_tools_manage}
          description={dict?.integrated_platform_desc}
        />
        <Button className="shadow-sm hover:shadow-md text-base">
          {dict?.start_now_free}
        </Button>
      </section>

      {/* features grid */}
      <section className="py-10 px-4 md:px-10 lg:px-16 bg-white">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex justify-center items-center">
            <SectionHeader
              title={dict?.everything_in_one_platform}
              description={dict?.comprehensive_advanced_tools}
            />
          </div>
          <FeaturesGrid dict={dict} />
        </div>
      </section>

      {/* everything in one platform section  */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10">
        <div className="flex justify-center items-center">
          <SectionHeader
            title={dict?.everything_in_one_platform}
            description={dict?.comprehensive_advanced_tools}
          />
        </div>
        <div className="flex justify-center items-center w-full max-w-4xl mx-auto">
          <Image
            src="/images/laptop_mob_screen.png"
            alt="Manage Real State"
            width={1200}
            height={600}
            className="w-full h-auto object-contain transform translate-x-4 md:translate-x-12"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
          />
        </div>
      </section>

      {/* detailed feature section */}
      <FeatureDetailSection
        dict={dict}
        tagText={dict.effective_management_tag}
        image="/images/details_screen.png"
        title={dict.effective_management_title}
        description={dict.effective_management_description}
        list={affectiveManagementList}
        imageFirst={false}
      />

      {/*  Smart insights section */}

      <FeatureDetailSection
        dict={dict}
        tagText={dict.smart_insights_tag}
        image="/images/smart_insights_section.png"
        title={dict.smart_insights_title}
        description={dict.smart_insights_description}
        list={smartInsightsList}
        imageFirst={true}
      />

      {/* Speed ​​and efficiency section */}

      <FeatureDetailSection
        dict={dict}
        tagText={dict.speed_and_efficiency_tag}
        image="/images/speed_section.png"
        title={dict.speed_and_efficiency_title}
        description={dict.speed_and_efficiency_description}
        list={speedAndEfficiencyList}
        imageFirst={false}
      />

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-10 lg:px-16 relative flex flex-col items-center justify-center gap-10 bg-white">
        <div className="min-h-screen bg-white">
          <FAQSection /> {/* FAQSection component */}
        </div>
      </section>
    </div>
  );
}
