import { getDictionary } from "@/lib/dictionary";
import { Params } from "../layout";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export default async function RefundPage({ params }: { params: Params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const refundData = dict.refund_page as {
        title: string;
        last_updated: string;
        intro: string;
        guarantee_title: string;
        guarantee_content: string;
        sections: LegalSection[];
    };

    return (
        <LegalPageLayout
            title={refundData.title}
            lastUpdated={refundData.last_updated}
            intro={refundData.intro}
            guaranteeTitle={refundData.guarantee_title}
            guaranteeContent={refundData.guarantee_content}
            sections={refundData.sections}
        />
    );
}
