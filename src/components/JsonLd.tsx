/**
 * Renders a JSON-LD block.
 *
 * `<` is escaped so a stray "</script>" inside any string value can never
 * break out of the script element.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
