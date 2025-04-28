import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { companyDetails } from "../util/constant";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});
const MapComponent = () => {
  const position = [12.960951, 77.648331];

  return (
    <div
      className="w-full md:w-1/2 h-72 md:h-[30rem] relative rounded-lg overflow-hidden z-30"
      data-aos="fade-left"
    >
      <MapContainer
        center={position}
        zoom={14}
        style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>{companyDetails.address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
