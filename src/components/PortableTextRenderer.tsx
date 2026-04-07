import { PortableText, type PortableTextComponents } from "next-sanity";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-heading mt-12 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-foreground font-heading mt-10 mb-4">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-muted leading-relaxed mb-4 text-lg">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-6 my-6 text-muted italic text-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 space-y-2 list-decimal list-inside">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
        <span className="text-muted leading-relaxed">{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-muted leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-accent hover:underline"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PortableTextRenderer({ value }: { value: any[] }) {
  if (!value || value.length === 0) {
    return <p className="text-muted">Kein Inhalt verfügbar.</p>;
  }
  return <PortableText value={value} components={components} />;
}
