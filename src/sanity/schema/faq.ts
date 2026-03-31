import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "Časté otázky",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Otázka",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Odpoveď",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategória",
      type: "string",
      options: {
        list: [
          { title: "Náklady a dotácie", value: "kosten-foerderung" },
          { title: "Inštalácia a technika", value: "installation-technik" },
          { title: "Servis a priebeh", value: "service-ablauf" },
        ],
      },
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
    select: { title: "question", subtitle: "category" },
  },
});
