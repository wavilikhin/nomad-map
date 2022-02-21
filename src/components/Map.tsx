import { MapContainer } from 'react-leaflet';
import { useMap } from '../hooks';
import { MapMainLayer } from './MapMainLayer';

export const Map = () => {
  const { position } = useMap();

  return (
    <MapContainer
      center={position}
      zoom={4.5}
      scrollWheelZoom={true}
      style={{ minHeight: '100vh', minWidth: '100vw' }}
    >
      <MapMainLayer center={position} />
    </MapContainer>
  );
};
