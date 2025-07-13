"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from "leaflet";
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css";
import "leaflet-extra-markers";
import { renderToStaticMarkup } from 'react-dom/server';
import { GiBigDiamondRing } from "react-icons/gi";
import { TbParkingCircleFilled } from "react-icons/tb";



export default function Map() {

  //remove default icon method to allow for custom icons
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });


  const createCustomIcon = (icon) => {
    const iconMarkup = renderToStaticMarkup(icon);
    return L.divIcon({
      html: iconMarkup,
      className: 'custom-icon',
      iconSize: [30, 30],
    });
  };

  const ceremony = [43.238209, -79.101139];
  const parking = [43.23977, -79.09937];

  const ceremonyIcon = createCustomIcon(<GiBigDiamondRing style={{ color: '#6b6b6b', fontSize: '40px', fontWeight: 'bold' }} />);
  const parkingIcon = createCustomIcon(<TbParkingCircleFilled style={{ color: '#3D53BB', fontSize: '40px', fontWeight: 'bold' }} />);

  return (
    <MapContainer
      center={ceremony}
      zoom={15}
      style={{ height: "40vh", width: "70vw" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={ceremony} icon={ceremonyIcon}>
        <Popup>
          Ceremony Location: A long expected wedding!
        </Popup>
      </Marker>
      <Marker position={parking} icon={parkingIcon}>
        <Popup>
          Parking Location: Reserved for our guests
        </Popup>
      </Marker>
    </MapContainer>
  );
};
