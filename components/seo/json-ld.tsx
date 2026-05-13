/**
 * JSON-LD structured data component.
 * File path: /components/seo/json-ld.tsx
 *
 *   <JsonLd data={buildLocalBusiness()} />
 */

type Props = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
