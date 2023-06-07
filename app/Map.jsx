"use client";

import React, { useState } from "react";
import "../public/leaflet/leaflet.css";
import Script from "next/script";

export default function Map() {
  const [latLng, setLatLng] = useState({
    lat: "",
    lng: "",
  });

  //   console.log(`lat: ${latLng.lat}, lng: ${latLng.lng}`);

  return (
    <div>
      <Script
        // src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        // integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        // crossorigin=""
        src="/leaflet/leaflet.js"
        strategy="afterInteractive"
        onReady={() => {
          var map = L.map("map").setView([51.505, -0.09], 13);
          L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
              '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          }).addTo(map);

          //   you can use any icon you want
          var icon = L.icon({
            iconUrl: "/leaflet/images/marker-icon.png",
            shadowUrl: "/leaflet/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
          });

          //   var marker = L.marker([51.5, -0.09], { icon: icon }).addTo(map);

          //   var circle = L.circle([51.508, -0.11], {
          //     color: "red",
          //     fillColor: "#f03",
          //     fillOpacity: 0.5,
          //     radius: 500,
          //   }).addTo(map);

          //   var polygon = L.polygon([
          //     [51.509, -0.08],
          //     [51.503, -0.06],
          //     [51.51, -0.047],
          //   ]).addTo(map);

          //   marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
          //   circle.bindPopup("I am a circle.");
          //   polygon.bindPopup("I am a polygon.");

          //   var popup = L.popup()
          //     .setLatLng([51.513, -0.09])
          //     .setContent("I am a standalone popup.")
          //     .openOn(map);

          //   function onMapClick(e) {
          //     alert("You clicked the map at " + e.latlng);
          //   }

          //   map.on("click", onMapClick);

          //   var popup = L.popup();

          //   function onMapClick(e) {
          //     popup
          //       .setLatLng(e.latlng)
          //       .setContent("You clicked the map at " + e.latlng.toString())
          //       .openOn(map);
          //   }

          //   map.on("click", onMapClick);

          var marker = null;

          function onMapClick(e) {
            // remove previous marker
            if (marker) {
              map.removeLayer(marker);
            }

            console.log(e.latlng);
            setLatLng(e.latlng);

            const txt = e.latlng.toString();

            marker = L.marker(e.latlng, { icon: icon })
              .addTo(map)
              .bindPopup(txt)
              .openPopup();
          }

          map.on("click", onMapClick);
        }}
      />
      <div id="map"></div>
      <style jsx>{`
        #map {
          height: 600px;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
