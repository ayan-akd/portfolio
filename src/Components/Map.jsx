/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), {
  ssr: false, // Disable server-side rendering
});

const Map = ({ position, popUp }) => {
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  useEffect(() => {
    setLeafletLoaded(true);
  }, []);

  if (!leafletLoaded) {
    return null; // or a loading indicator
  }

  const { Marker, Popup, TileLayer } = require("react-leaflet");
  const L = require("leaflet");
  const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={true}
      style={{
        width: "100%",
        height: "340px",
        zIndex: 1,
        margin: "auto",
        border: "1px solid black",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={icon} position={position}>
        <Popup>{popUp}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
