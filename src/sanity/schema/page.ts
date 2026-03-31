import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Seiten",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Seitentitel",
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
      name: "seoTitle",
      title: "SEO Titel",
      type: "string",
      description: "Überschreibt den Seitentitel in Suchmaschinen",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Beschreibung",
      type: "text",
      rows: 3,
      description: "Meta-Beschreibung für Suchmaschinen (max. 160 Zeichen)",
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: "content",
      title: "Inhalt",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
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
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
  },
});
