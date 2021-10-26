import dynamic from "next/dynamic";
import { InfoOutline } from "@styled-icons/evaicons-outline/InfoOutline";

import type { NextPage } from "next";
import React from "react";
import { LinkWrapper } from "components/LinkWrapper";

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

const Home: NextPage = () => {
  const placeOne = {
    id: "1",
    name: "Petrópolis",
    slug: "petrópolis",
    location: {
      latitude: 0,
      longitude: 0,
    },
  };
  const placeTwo = {
    id: "2",
    name: "Reykjavik",
    slug: "reykjavik",
    location: {
      latitude: -10,
      longitude: -50,
    },
  };

  return (
    <>
      <Map places={[placeOne, placeTwo]} />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
    </>
  );
};

export default Home;
