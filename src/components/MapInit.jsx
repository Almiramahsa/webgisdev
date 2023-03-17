import React, { useEffect } from 'react';
import L from 'leaflet';

function MapInit() {
  useEffect(() => {
    const map = L.map('mapid').setView([-2.5, 117], 4);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return (
    <div>
      <p className="font-bold text-4xl">TES</p>
      <div id="mapid"></div>
    </div>
  );
}

export default MapInit;
