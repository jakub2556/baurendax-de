import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog články",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulok",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL adresa",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Krátky popis",
      type: "text",
      rows: 3,
      description: "Zobrazí sa v prehľade blogu a ako meta popis",
    }),
    defineField({
      name: "mainImage",
      title: "Hlavný obrázok",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Popis obrázka",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Kategória",
      type: "string",
      options: {
        list: [
          { title: "Náklady a dotácie", value: "kosten-foerderung" },
          { title: "Technika", value: "technik" },
          { title: "Poradca", value: "ratgeber" },
          { title: "Aktuality", value: "aktuelles" },
        ],
      },
    }),
    defineField({
      name: "readTime",
      title: "Čas čítania",
      type: "string",
      description: "napr. '8 Min.'",
    }),
    defineField({
      name: "publishedAt",
      title: "Dátum zverejnenia",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Obsah článku",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normálny", value: "normal" },
            { title: "Nadpis 2", value: "h2" },
            { title: "Nadpis 3", value: "h3" },
            { title: "Citát", value: "blockquote" },
          ],
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Popis obrázka",
              type: "string",
            },
            {
              name: "caption",
              title: "Popis pod obrázkom",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Najnovšie",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "mainImage", date: "publishedAt" },
    prepare({ title, media, date }) {
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString("sk-SK") : "Koncept",
      };
    },
  },
});
