import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Website-Einstellungen",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Firmenname",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefonnummer",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "E-Mail",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Adresse",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "openingHours",
      title: "Öffnungszeiten",
      type: "string",
    }),
    defineField({
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "seoDefaultTitle",
      title: "Standard SEO-Titel",
      type: "string",
    }),
    defineField({
      name: "seoDefaultDescription",
      title: "Standard SEO-Beschreibung",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Website-Einstellungen" };
    },
  },
});
