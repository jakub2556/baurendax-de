import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Stránky",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Názov stránky",
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
      name: "seoTitle",
      title: "SEO titulok",
      type: "string",
      description: "Prepíše názov stránky vo vyhľadávačoch",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO popis",
      type: "text",
      rows: 3,
      description: "Meta popis pre vyhľadávače (max. 160 znakov)",
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: "content",
      title: "Obsah",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normálny", value: "normal" },
            { title: "Nadpis 2", value: "h2" },
            { title: "Nadpis 3", value: "h3" },
            { title: "Nadpis 4", value: "h4" },
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
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
  },
});
