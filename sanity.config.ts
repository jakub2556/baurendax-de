import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schema";
import { projectId, dataset } from "./src/sanity/env";

export default defineConfig({
  name: "baurendax",
  title: "Baurendax CMS",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Obsah")
          .items([
            S.listItem()
              .title("Nastavenia webu")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            S.documentTypeListItem("page").title("Stránky"),
            S.documentTypeListItem("post").title("Blog články"),
            S.documentTypeListItem("service").title("Služby"),
            S.documentTypeListItem("faq").title("Časté otázky"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
