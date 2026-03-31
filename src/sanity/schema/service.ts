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
      name: "features",
      title: "Výhody / Body",
      type: "array",
      of: [{ type: "string" }],
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
