import React from "react";

type AnyObj = Record<string, any>;

export default function JsonLd({ data }: { data: unknown }) {
  const normalized = (() => {
    if (Array.isArray(data)) {
      return { "@context": "https://schema.org", "@graph": data };
    }

    if (data && typeof data === "object") {
      const obj = data as AnyObj;
      if (!obj["@context"]) {
        return { "@context": "https://schema.org", ...obj };
      }
    }

    return data;
  })();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(normalized) }}
    />
  );
}
