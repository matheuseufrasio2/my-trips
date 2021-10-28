import Image from "next/image";

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
    };
    gallery: ImageProps[];
  };
}

export function PlaceTemplate({ place }: PlaceTemplateProps) {
  // const router = useRouter();

  // if (router.isFallback) return null;

  return (
    <>
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
