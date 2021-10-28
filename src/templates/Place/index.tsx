import Image from "next/image";
import { NextSeo } from "next-seo";

import { CloseOutline } from "@styled-icons/evaicons-outline";
import { LinkWrapper } from "components/LinkWrapper";

import { Body, Container, Gallery, Heading, Wrapper } from "./styles";
// import { useRouter } from "next/router";

interface ImageProps {
  url: string;
  height: number;
  width: number;
}

export interface PlaceTemplateProps {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
      text: string;
    };
    gallery: ImageProps[];
  };
}

export function PlaceTemplate({ place }: PlaceTemplateProps) {
  // const router = useRouter();

  // if (router.isFallback) return null;

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          "A simple project to show in a map the places that I went and show more informations and photos when clicked."
        }
        canonical="https://mytrips.com"
        openGraph={{
          url: "https://mytrips.com",
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            "A simple project to show in a map the places that I went and show more informations and photos when clicked.",
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`,
            },
          ],
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <Wrapper>
        <Container>
          <Heading>{place.name}</Heading>

          <Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || "" }}
          />

          <Gallery>
            {place.gallery.map((item, index) => (
              <Image
                key={index}
                src={item.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </Gallery>
        </Container>
      </Wrapper>
    </>
  );
}
