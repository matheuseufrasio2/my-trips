import { useRouter } from "next/router";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
// import { Container } from "./styles";

interface Place {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface MapProps {
  places?: Place[];
}

export function Map({ places }: MapProps) {
  const router = useRouter();

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(({ id, name, slug, location }) => {
        const { latitude, longitude } = location;

        return (
          <Marker
            key={`place-${id}`}
            title={name}
            position={[latitude, longitude]}
            eventHandlers={{
              click: () => {
                router.push(`/place/${slug}`);
              },
            }}
          />
        );
      })}
    </MapContainer>
  );
}
