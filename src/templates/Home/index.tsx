import dynamic from "next/dynamic";
import { InfoOutline } from "@styled-icons/evaicons-outline/InfoOutline";

import React from "react";
import { LinkWrapper } from "components/LinkWrapper";
import { MapProps } from "components/Map";

const Map = dynamic(
  () =>
    import("components/Map").then(
      (item) => item.Map,
      () => null as never,
    ),
  {
    ssr: false,
  },
);

export function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <Map places={places} />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
    </>
  );
}
