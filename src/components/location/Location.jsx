import React, { useEffect, useState } from "react";
import { initializeApp, firebase } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/database";
import { getDatabase, ref, get } from "firebase/database";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "./Location.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { icon, icon2, myloc } from "../constants/map";
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

  // Initialize Firebase with your web app's Firebase configuration
  // Use 'ref' function to access the database reference

  const [data, setData] = useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyDRtEQ1FZ9AqBCtsrk-p5S3UJus9X_NAK0",
    authDomain: "smartbin-d50c0.firebaseapp.com",
    databaseURL: "https://smartbin-d50c0-default-rtdb.firebaseio.com",
    projectId: "smartbin-d50c0",
    storageBucket: "smartbin-d50c0.appspot.com",
    messagingSenderId: "482675214816",
    appId: "1:482675214816:web:8891e47285184358514385",
    measurementId: "G-N0HK6J5Q1M",
  };
  // useEffect(() => {
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
  // }, []);
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const db = getDatabase();
    const dbRef = ref(db, "bin");

    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      }
    });
  }, []);
  console.log("dbdata", data);
  if (data) localStorage.setItem("datas", JSON.stringify(data));
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("fffff");

      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const db = getDatabase();
      const dbRef = ref(db, "bin");
      get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        }
      });
    }, 5000);

    setIntervalId(id);
     return () => {
       if (intervalId) {
         clearInterval(intervalId);
       }
     };
  }, []);
  return (
    <>
      <Navbar />
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
              ī
            >
              <Popup className="myloc">Office Location</Popup>
            </Marker>
            {/* {data &&
              Object.keys(data).map((key, index) => {
                const product = data[key];
                console.log(product); */}
            {console.log(data, "data")}
            <Marker
              position={[
                data?.Latitude || 11.598339,
                data?.Longitude || 78.5871354,
              ]}
              icon={icon}
              className="myloc"
            >
              <Popup className="myloc">
                <div className="bin-details">
                  <ul>
                    <li>Bin No: 101</li>
                    <li>Bin Location: Karpagam Hospital</li>
                    <li>Bin Quantity: 25 Kg</li>
                    <li>Filled Percentage: {data?.bin1?.Capacity} %</li>
                    <p>================</p>
                    <li>Bin No: 102</li>
                    <li>Bin Location: Karpagam Hospital</li>
                    <li>Bin Quantity: 25 Kg</li>
                    <li>Filled Percentage: {data?.bin2?.Capacity} %</li>
                  </ul>
                </div>
              </Popup>
            </Marker>
            ;{/* })} */}
          </MapContainer>
        </div>
      </div>
    </>
  );
};
export default TrackLocation;
