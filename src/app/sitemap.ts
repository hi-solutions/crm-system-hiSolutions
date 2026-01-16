import { MetadataRoute } from "next";
import { locales } from "@/middleware";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://hiestate.app";

    // Base paths for all locales
    const routes = ["", "/about", "/pricing", "/contact"].flatMap((route) =>
        locales.map((locale) => ({
            url: `${baseUrl}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: route === "" ? 1 : 0.8,
        }))
    );

    return routes;
}
