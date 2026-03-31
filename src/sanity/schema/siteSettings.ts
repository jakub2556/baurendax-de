import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Nastavenia webu",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Názov firmy",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefónne číslo",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Adresa",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "openingHours",
      title: "Otváracie hodiny",
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
      title: "Predvolený SEO titulok",
      type: "string",
    }),
    defineField({
      name: "seoDefaultDescription",
      title: "Predvolený SEO popis",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Nastavenia webu" };
    },
  },
});
