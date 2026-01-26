import { getDictionary } from "@/lib/dictionary";
import { Params } from "../layout";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export default async function TermsPage({ params }: { params: Params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    // Cast the dictionary content to the expected type
    const termsData = dict.terms_page as {
        title: string;
        last_updated: string;
        sections: LegalSection[];
    };

    return (
        <LegalPageLayout
            title={termsData.title}
            lastUpdated={termsData.last_updated}
            sections={termsData.sections}
        />
    );
}
