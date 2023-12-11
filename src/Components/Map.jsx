/* eslint-disable react/prop-types */
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ position, popUp }) => {
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
