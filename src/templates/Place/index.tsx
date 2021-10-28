// import { Container } from "./styles";

interface ImageProps {
  url: string;
  height: number;
  width: number;
}

export interface PlaceTemplateProps {
  place: {
    slug: string;
    name: string;
    description: {
      html: string;
    };
    gallery: ImageProps[];
  };
}

export function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <div>
      <h1>{place.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />

      {place.gallery.map((item, index) => (
        <img key={index} src={item.url} alt={place.name} />
      ))}
    </div>
  );
}
