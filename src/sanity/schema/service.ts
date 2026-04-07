import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Služby",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Názov služby",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL adresa",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "description",
      title: "Popis",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Obrázok",
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
      name: "shortDescription",
      title: "Krátky popis",
      type: "string",
      description: "Zobrazí sa na karte služby na homepage",
    }),
    defineField({
      name: "features",
      title: "Výhody / Body",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "process",
      title: "Postup",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Názov kroku", type: "string" },
            { name: "description", title: "Popis kroku", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "faq",
      title: "Často kladené otázky",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "q", title: "Otázka", type: "string" },
            { name: "a", title: "Odpoveď", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Poradie",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Podľa poradia",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
