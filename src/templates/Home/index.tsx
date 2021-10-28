import { NextSeo } from "next-seo";

import dynamic from "next/dynamic";
import { InfoOutline } from "@styled-icons/evaicons-outline/InfoOutline";

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
      <NextSeo
        title="My Trips"
        description="A simple project to show my favorite spots on the world"
        canonical="https://my-trips.matheuseufrasio.com.br"
        openGraph={{
          url: "https://my-trips.matheuseufrasio.com.br",
          title: "My Trips",
          description:
            "A simple project to show in a map the places that I went and show more informations and photos when clicked.",
          images: [
            {
              url: "https://my-trips.matheuseufrasio.com.br/img/cover.png",
              width: 1280,
              height: 720,
              alt: "My Trips",
            },
          ],
          site_name: "My Trips",
        }}
      />
      <Map places={places} />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
    </>
  );
}
