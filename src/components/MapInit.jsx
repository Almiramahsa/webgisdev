import { MapContainer, TileLayer } from 'react-leaflet';

function MapInit() {
  return (
    <MapContainer center={[-2.5, 117]} zoom={4} id="mapid">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="<attribution>" />
    </MapContainer>
  );
}

export default MapInit;
