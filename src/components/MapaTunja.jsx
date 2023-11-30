import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapaTunja = () => {
    const mapContainerStyle = {
      width: '90%',
      height: '500px',
    };
  
    const center = {
      lat: 5.5346273,
      lng: -73.3605736,
    };
  
    return (
      <>
        <div className="container d-flex justify-content-center">
  
          <LoadScript googleMapsApiKey="AIzaSyCi0MUUDR5Y5tvgJVDJrsc7OOj4m_d3tLM">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={14}
            >
            </GoogleMap>
          </LoadScript>
        </div>
  
      </>
    )
  
  }
  export default MapaTunja;