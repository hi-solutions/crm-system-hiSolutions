import React from "react";
import SectionHeader from "./SectionHeader/SectionHeader";

export interface LegalSection {
    heading: string;
    content: string;
}

interface LegalPageLayoutProps {
    title: string;
    lastUpdated?: string;
    intro?: string;
    sections?: LegalSection[];
    guaranteeTitle?: string;
    guaranteeContent?: string;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
    title,
    lastUpdated,
    intro,
    sections,
    guaranteeTitle,
    guaranteeContent,
}) => {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden py-12 md:py-20 px-4 md:px-10 lg:px-16">
            {/* Decorative background elements consistent with other pages */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-5"
            >
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl opacity-10"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="mb-12">
                    <SectionHeader
                        title={title}
                        description={lastUpdated}
                        className="mb-8"
                    />
                </div>

                <div className="prose prose-lg max-w-none text-[#425061]">
                    {intro && <p className="mb-8 text-lg">{intro}</p>}

                    {guaranteeTitle && guaranteeContent && (
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                            <h3 className="text-xl font-bold text-[#18063C] mb-2">
                                {guaranteeTitle}
                            </h3>
                            <p>{guaranteeContent}</p>
                        </div>
                    )}

                    {sections &&
                        sections.map((section, index) => (
                            <div key={index} className="mb-8">
                                <h3 className="text-2xl font-semibold text-[#18063C] mb-4">
                                    {section.heading}
                                </h3>
                                <p className="leading-relaxed text-gray-600">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default LegalPageLayout;
