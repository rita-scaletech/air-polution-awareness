import { FC, useState } from 'react';
import GoogleMapReact from 'google-map-react';

interface IMarkerProps {
  pollutionData?: any;
  key?: number;
  text?: string;
  lat?: number;
  lng?: number;
  sensor_name?: string;
  co?: number;
  pm25?: number;
  markerPosition?: any
  onMouseOver?: () => void
}


const GoogleMap: FC<IMarkerProps> = ({ pollutionData }) => {
  const [hoveredArea, setHoveredArea] = useState<IMarkerProps | null>(null);
  const [markerPosition, setMarkerPosition] = useState({ lat: 23.0225, lng: 72.5714 })
  const [zoomVal, setZoomVal] = useState(12)


  const handleMarkerHover = (area: IMarkerProps) => {
    setHoveredArea(area);
  };

  const Marker: FC<IMarkerProps> = ({ text, sensor_name, co, pm25, markerPosition }) => (
    <div>
      <div
        style={{
          color: 'red',
          fontWeight: 'bold',
          position: 'absolute',
        }}
        onMouseEnter={() => handleMarkerHover({
          text, sensor_name, co, pm25
        })}
        onMouseLeave={() => setHoveredArea(null)}
      >
        {text}
      </div>
    </div >
  );

  const onZoomEvent = (value: any,) => {
    setMarkerPosition({
      lat: value.center.lat, lng: value.center.lng
    })
    setZoomVal(value.zoom)
  }

  return (
    <div className='google--map position--relative'>
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }} // Replace with your Google Maps API key
          defaultCenter={{ lat: 23.0225, lng: 72.5714 }} // Set initial map center coordinates
          defaultZoom={zoomVal}
          options={{ zoomControl: true }}
          zoom={zoomVal}
          onChange={(value) => onZoomEvent(value)}
        >
          {/* Render markers based on your pollution data */}
          {pollutionData && pollutionData.map((area: any) => {
            const { id, latitude, longitude, location, co, pm25 } = area
            return (
              <Marker
                key={id}
                lat={latitude}
                lng={longitude}
                text={location}
                sensor_name={location}
                co={co}
                pm25={pm25}
                markerPosition={markerPosition}
              />
            );
          })}
        </GoogleMapReact>
      </div>

      {/* Show details on hover */}
      {hoveredArea && (
        <div
          style={{
            position: 'absolute',
            top: '60%',
            left: '60%',
            background: '#79ad3d',
            padding: '20px',
            height: 'auto',
          }}
        >
          {/* Add more details as needed */}
          <p className='sensor--details'>Sensor Name :<span className='font-size--sm ml--5'> {hoveredArea.sensor_name}</span></p>
          <p className='sensor--details'>Pollution CO : <span className='font-size--sm ml--5'>{hoveredArea.co}</span></p>
          <p className='sensor--details'>Pollution PM25 :<span className='font-size--sm ml--5'>{hoveredArea.pm25}</span></p>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;
