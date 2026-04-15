import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://awebbarouni.vercel.app",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://awebbarouni.vercel.app/#about",
      lastModified: new Date().toISOString(),
    },
    {
        url: "https://awebbarouni.vercel.app/#services",
        lastModified: new Date().toISOString(),
      },
    {
      url: "https://awebbarouni.vercel.app/#project",
      lastModified: new Date().toISOString(),
    },
    {
        url: "https://awebbarouni.vercel.app/#contact",
        lastModified: new Date().toISOString(),
      },
  ];
}
