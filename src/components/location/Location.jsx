
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "./Location.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { icon,icon2,myloc } from "../constants/map";
import Navbar from "../navbar/Navbar";

// Cordinates of Marcillac
const center = [12.942786, 77.687524];
const purpleOptions = { color: "white" };

function LeafletgeoSearch() {
 const map = useMap();
 useEffect(() => {
 const provider = new OpenStreetMapProvider();

 const searchControl = new GeoSearchControl({
 provider,
 marker: {
 icon,
 },
 });

 map.addControl(searchControl);

 return () => map.removeControl(searchControl);
 }, []);
 return null;
}

const TrackLocation = () => {
 const [location, setLocation] = useState({
 latitude: 12.958184,
 longitude: 77.6421466,
 });
 useEffect(() => {
 const success = (position) => {
 setLocation({
 latitude: position.coords.latitude,
 longitude: position.coords.longitude,
 });
 };
 const error = () => {
 console.log("Error while accessing location...");
 };
 navigator.geolocation.getCurrentPosition(success, error);
 console.log(location?.latitude, location?.longitude);
 }, []);

 return (
    <>
    <Navbar/>
 <div className="TrackLocation">
 <div id="mapid">
 <MapContainer
 center={[location.latitude, location.longitude]}
 zoom={16}
 scrollWheelZoom={true}
 style={{ width: "100%", height: "calc(100vh - 4rem)" }}
 >
 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
 <Marker
 position={[location.latitude, location.longitude]}
 icon={icon2}
 className="myloc"
 >
 <Popup className="myloc">Office Location</Popup>
 </Marker>
 <Marker
 position={[10.88527,77.00831]}
 icon={icon}
 className="myloc"
 >
 <Popup className="myloc">
  <div className="bin-details">
    <ul>
        <li>Bin No: 101</li>
        <li>Bin Location: Karpagam Hospital</li>
        <li>Bin Quantity: 25 Kg</li>
        <li>Filled Percentage: 80%</li>
    </ul>
  </div>
 </Popup>
 </Marker>
 <Marker
 position={[ 10.86932, 77.02248]}
 icon={icon}
 className="myloc"
 >
 <Popup className="myloc">
  <div className="bin-details">
    <ul>
        <li>Bin No: 102</li>
        <li>Bin Location: Myleripalayam GOVT. Hospital,</li>
        <li>Bin Quantity: 25 Kg</li>
        <li>Filled Percentage: 70%</li>
    </ul>
  </div>
 </Popup>
 </Marker>

 <Marker
 position={[ 10.91859, 76.98638 ]}
 icon={icon}
 className="myloc"
 >
 <Popup className="myloc">
  <div className="bin-details">
    <ul>
        <li>Bin No: 103</li>
        <li>Bin Location: Bay Grill</li>
        <li>Bin Quantity: 25 Kg</li>
        <li>Filled Percentage: 30%</li>
    </ul>
  </div>
 </Popup>
 </Marker>
 <LeafletgeoSearch />
 </MapContainer>
 </div>
 </div>
 </>
 );
};
export default TrackLocation;