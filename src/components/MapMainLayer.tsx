import { LatLngExpression } from 'leaflet';
import { FC, useEffect } from 'react';
import { TileLayer, Marker, useMap, GeoJSON } from 'react-leaflet';
const { VITE_USERNAME, VITE_STYLE_ID, VITE_ACCESS_TOKEN } = import.meta.env;

export const MapMainLayer: FC<{ center: LatLngExpression }> = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 15);
  }, [center]);

  return (
    <>
      <TileLayer
        attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/${VITE_USERNAME}/${VITE_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${VITE_ACCESS_TOKEN}`}
      />

      <Marker position={center} />
    </>
  );
};
