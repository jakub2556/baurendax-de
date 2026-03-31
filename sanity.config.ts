import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schema";
import { projectId, dataset } from "@/sanity/env";

export default defineConfig({
  name: "baurendax",
  title: "Baurendax CMS",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Inhalt")
          .items([
            S.listItem()
              .title("Website-Einstellungen")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            S.documentTypeListItem("page").title("Seiten"),
            S.documentTypeListItem("post").title("Blog-Beiträge"),
            S.documentTypeListItem("service").title("Leistungen"),
            S.documentTypeListItem("faq").title("FAQ"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
