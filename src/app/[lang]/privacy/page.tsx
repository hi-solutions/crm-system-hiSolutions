import { getDictionary } from "@/lib/dictionary";
import { Params } from "../layout";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export default async function PrivacyPage({ params }: { params: Params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const privacyData = dict.privacy_page as {
        title: string;
        last_updated: string;
        sections: LegalSection[];
    };

    return (
        <LegalPageLayout
            title={privacyData.title}
            lastUpdated={privacyData.last_updated}
            sections={privacyData.sections}
        />
    );
}
