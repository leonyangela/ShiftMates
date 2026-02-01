import { useEffect, useRef } from "react";

import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = () => {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZ3VkZXRhbWEiLCJhIjoiY2p6ODU1ZDljMHk2czNicGg5M2RubGh5MiJ9.E8v40kq9L9avhg_7iZ1m0g";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [153.0308782391196, -27.468051618835155],
      zoom: 14,
    });

    const marker1 = new mapboxgl.Marker({ color: "red" })
      .setLngLat([153.0308782391196, -27.468051618835155])
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div className="w-full h-full" id="map-container" ref={mapContainerRef} />
  );
};

export default MapComponent;
