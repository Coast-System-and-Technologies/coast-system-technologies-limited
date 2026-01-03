// components/insights/JsonLd.tsx
import React from "react";

export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD should be a raw JSON string in the DOM
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
