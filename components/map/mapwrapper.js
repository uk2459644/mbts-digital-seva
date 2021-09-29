
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer,Marker, Popup, TileLayer } from "react-leaflet";


const Map = ({items}) => {
    const position = [`${items[0].latitude}`,`${items[0].longitude}`]

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}
   
    className="w-full h-96"
    >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
    <Marker position={position} animate={true}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
};

export default Map;