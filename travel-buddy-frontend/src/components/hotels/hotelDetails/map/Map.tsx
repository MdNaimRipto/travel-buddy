import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const markerIcon = new Icon({
  iconUrl: "https://i.ibb.co.com/SVCz61H/location-pin.png",
  iconSize: [56, 60],
});

const Map = () => {
  const position: LatLngExpression = [21.425, 91.97995];

  return (
    <div className="w-full h-[400px] overflow-hidden">
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker opacity={0.9} position={position} icon={markerIcon}>
          <Popup>
            <h2>Hotel Waldorf Astoria Maldives Ithaafushis Location</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
