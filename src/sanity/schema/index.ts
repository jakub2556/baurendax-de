import { type SchemaTypeDefinition } from "sanity";
import { page } from "./page";
import { post } from "./post";
import { service } from "./service";
import { faq } from "./faq";
import { siteSettings } from "./siteSettings";

export const schemaTypes: SchemaTypeDefinition[] = [page, post, service, faq, siteSettings];
