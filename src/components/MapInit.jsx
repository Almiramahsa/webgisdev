import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { useEffect } from 'react';

function MapInit() {
  function ResizeMapListener() {
    const map = useMap();
    useEffect(() => {
      function handleResize() {
        map.flyTo([-0.8917, 119.8707]); //coordinate Palu
      }

      map.on('resize', handleResize);
      return () => {
        map.off('resize', handleResize);
      };
    }, [map]);

    return null;
  }

  return (
    <MapContainer center={[-2.5, 117]} zoom={5} minZoom={3} id="mapid">
      <ResizeMapListener />
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default MapInit;

//Open streetmap version base map :
//<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="<attribution>" />
