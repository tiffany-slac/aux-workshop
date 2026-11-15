"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const labs: {
  name: string;
  lat: number;
  lng: number;
  tooltipDirection?: "top" | "left" | "right" | "bottom";
  tooltipOffset?: [number, number];
}[] = [
  { name: "SLAC", lat: 37.4219, lng: -122.205, tooltipDirection: "right", tooltipOffset: [12, -20] },
  { name: "LBNL", lat: 37.8755, lng: -122.247, tooltipDirection: "left", tooltipOffset: [-12, -20] },
  { name: "Fermilab", lat: 41.842, lng: -88.2575 },
  { name: "INL", lat: 43.515, lng: -112.033 },
  { name: "LANL", lat: 35.842, lng: -106.287 },
  { name: "Argonne", lat: 41.718, lng: -87.982, tooltipDirection: "right", tooltipOffset: [12, -20] },
  { name: "Brookhaven", lat: 40.869, lng: -72.879 },
  { name: "Jefferson Lab", lat: 37.098, lng: -76.478, tooltipDirection: "left", tooltipOffset: [-12, -20] },
  { name: "Diamond", lat: 51.573, lng: -1.317 },
  { name: "DESY", lat: 53.575, lng: 9.879, tooltipDirection: "right", tooltipOffset: [12, -20] },
  { name: "European XFEL", lat: 53.583, lng: 9.896, tooltipDirection: "left", tooltipOffset: [-12, -20] },
  { name: "CERN", lat: 46.234, lng: 6.055 },
];

export default function LabMap() {
  return (
    <MapContainer
      center={[45, -40]}
      zoom={3}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {labs.map((lab) => (
        <Marker key={lab.name} position={[lab.lat, lab.lng]} icon={icon}>
          <Tooltip direction={lab.tooltipDirection ?? "top"} offset={lab.tooltipOffset ?? [0, -42]} permanent>
            {lab.name}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
