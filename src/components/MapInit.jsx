import { MapContainer, TileLayer } from 'react-leaflet';

function MapInit() {
  return (
    <MapContainer center={[-2.5, 117]} zoom={5} id="mapid">
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default MapInit;
//<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="<attribution>" />
