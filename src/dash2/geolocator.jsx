import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import usaJson from '/usa-map.json';

const Geolocator = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [geoData, setGeoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '../keys/geolocator.txt';

  const fetchGeoData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.getgeoapi.com/v2/ip/${ipAddress}?api_key=${API_KEY}&format=json`);
      const data = await response.json();
      if (data.status === 'success') {
        setGeoData(data);
      } else {
        setError(data.error.message);
      }
    } catch (err) {
      setError('An error occurred while fetching data');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>IP Geolocator</h2>
      <input
        type="text"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
        placeholder="Enter IP address"
      />
      <button onClick={fetchGeoData} disabled={loading}>
        {loading ? 'Loading...' : 'Get Location'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {geoData && (
        <div>
          <h3>Location Data:</h3>
          <p>City: {geoData.city.name}</p>
          <p>Country: {geoData.country.name}</p>
          <p>Latitude: {geoData.location.latitude}</p>
          <p>Longitude: {geoData.location.longitude}</p>
          <div style={{ width: '100%', height: '400px' }}>
            <ComposableMap projection="geoAlbersUsa">
              <Geographies geography={usaJson}>
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
                    />
                  ))
                }
              </Geographies>
              {geoData && (
                <Marker coordinates={[geoData.location.longitude, geoData.location.latitude]}>
                  <circle r={8} fill="#F00" stroke="#fff" strokeWidth={2} />
                </Marker>
              )}
            </ComposableMap>
          </div>
        </div>
      )}
    </div>
  );
};

export default Geolocator;
