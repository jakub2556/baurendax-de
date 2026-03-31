import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog-Beiträge",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL-Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Kurzbeschreibung",
      type: "text",
      rows: 3,
      description: "Wird in der Blog-Übersicht und als Meta-Beschreibung angezeigt",
    }),
    defineField({
      name: "mainImage",
      title: "Beitragsbild",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternativtext",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          { title: "Kosten & Förderung", value: "kosten-foerderung" },
          { title: "Technik", value: "technik" },
          { title: "Ratgeber", value: "ratgeber" },
          { title: "Aktuelles", value: "aktuelles" },
        ],
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Veröffentlicht am",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Inhalt",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Zitat", value: "blockquote" },
          ],
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alternativtext",
              type: "string",
            },
            {
              name: "caption",
              title: "Bildunterschrift",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Veröffentlicht (neueste zuerst)",
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
        subtitle: date ? new Date(date).toLocaleDateString("de-DE") : "Entwurf",
      };
    },
  },
});
