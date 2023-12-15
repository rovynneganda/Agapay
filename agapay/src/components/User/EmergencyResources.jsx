import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import { emergencyResources } from "../../constants";
import { yellowbg1 } from '../../assets';
import Footer from "./Footer";
import Hotlines from "./Hotlines";
import user_icon from '../../assets/user_icon.png';
import HospitalIcon from '../../assets/hospital.png';
import fire_station from '../../assets/fire_station.png';
import police_station from '../../assets/police_station.png';
import haversine from 'haversine';
const getMarkerIcon = (types) => {
  if (types.includes('hospital')) {
    return { url: HospitalIcon, scaledSize: new window.google.maps.Size(40, 40) };
  } else if (types.includes('police')) {
    return { url: police_station, scaledSize: new window.google.maps.Size(40, 40) };
  } else if (types.includes('fire_station')) {
    return { url: fire_station, scaledSize: new window.google.maps.Size(40, 40) };
  } else {
    return null; // Use a default icon or no icon for other types
  }
};

//Nearby Location List component
const LocationList = ({ locations, onLocationClick,onOpenInGoogleMapsClick }) => (
  <div className="bg-gray-200 p-4 max-h-screen overflow-y-auto">
    <h2 className="text-xl font-semibold mb-2">Nearby Locations</h2>
    <ul>
      {locations.map((location, index) => (
        <li key={location.place_id} className={`cursor-pointer mb-4 ${index !== locations.length - 1 ? 'border-b border-gray-300' : ''}`} onClick={() => onLocationClick(location)}>
          <h3 className="text-lg font-semibold">{location.name}</h3>
          {location.rating && (
            <div>
              <p>Rating: {location.rating} stars</p>
              {/* Display stars based on the rating */}
              {Array.from({ length: Math.floor(location.rating) }).map((_, index) => (
                <span key={index} role="img" aria-label="star" className="text-yellow-500">
                  ⭐
                </span>
              ))}
            </div>
          )}
          <p>{location.vicinity}</p>
          <p>Distance: {location.distance.toFixed(2)} km</p>
          
          {location.opening_hours && (
            <div>
              <p>{location.opening_hours.open_now ? 'Open Now' : 'Closed Now'}</p>
            </div>
          )}
          {location.formatted_phone_number && (
            <p>Phone: {location.formatted_phone_number}</p>
          )}
            <li key={location.place_id} className={`cursor-pointer mb-4 ${index !== locations.length - 1 ? 'border-b border-gray-300' : ''}`} onClick={() => onLocationClick(location)}>
    
    <button className="text-primary font-inter text-lg font-semibold hover:underline" onClick={() => onOpenInGoogleMapsClick(location.place_id)}>
      Open in Google Maps
    </button>
  </li>
          
        </li>
        
      ))}
    </ul>
  </div>
);
// End Nearby Location List component

const EmergencyResources = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [location, setLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationType, setLocationType] = useState(null);

  useEffect(() => {
    // Get user's location using the geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }, []);
  // close the information if changed the types of nearby
  useEffect(() => {
    if (location && locationType) {
      fetchNearbyLocations(locationType);
    }
  }, [location, locationType]);
    // end of close the information if changed the types of nearby

    // redirect on googlemaps
    const handleOpenInGoogleMapsClick = (placeId) => {
      window.open(`https://www.google.com/maps/place/?q=place_id:${placeId}`);
    };

  const fetchNearbyLocations = (type) => {
     // close the information if changed the types of nearby
     setSelectedLocation(null); // Reset selectedLocation when fetching new locations
     setLocationType(type); // Update the location type 
      // end of close the information if changed the types of nearby
    const apiUrl = 'http://localhost/Backend/Server.php';
    const apiKey = 'AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4';
    const locationParam = `${location.lat},${location.lng}`;
    const radius = 5000; // 5 kilometers
    const fields = 'formatted_address,name,geometry,place_id,types,opening_hours,formatted_phone_number,rating';
  
    axios.get(
      `http://localhost/Backend/Server.php?location=${locationParam}&radius=${radius}&type=${type}&key=${apiKey}&fields=${fields}`
    )
      .then((response) => {
        const updatedLocations = response.data.results.map((result) => {
          console.log('Location:', location);
          console.log('Result:', result);

          // for distance result
          const distance = haversine(
            { latitude: location.lat, longitude: location.lng },
            {
              latitude: result.geometry.location.lat,
              longitude: result.geometry.location.lng,
            }
          );
  
          console.log('Distance:', distance);
          return { ...result, distance };
        });
        // for distance result
  
        // Ensure that the state is updated after the haversine calculations
        setLocations(updatedLocations);
      })
       
      .catch((error) => {
        console.error(error);
      });
     
  };

  const openInGoogleMaps = (placeId) => {
    window.open(`https://www.google.com/maps/place/?q=place_id:${placeId}`);
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4',
    // Other options, libraries, and modules if needed
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {/* <div className="bg-white py-16 mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-secondary font-poppins">
              Explore Emergency Resources Instantly
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl  font-inter">
              Essential Emergency Information
            </p>
            <p className="mt-6 text-lg leading-8 font-poppins ">
              In times of crisis, access to critical resources can make all the
              difference. 
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-12 lg:mt-12 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {emergencyResources.map((resources) => (
                <div key={resources.name} className="relative pl-16">
                  <dt className=" text-base font-semibold leading-7 font-inter text-primary">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300">
                      <div
                        dangerouslySetInnerHTML={{ __html: resources.icon }}
                        className="h-6 w-6 text-white  "
                      />
                    </div>
                    {resources.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 font-poppins">
                    {resources.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div> */}

       <div
  className="bg-cover bg-center bg-no-repeat sm:py-40 pt-32 pb-10  p-5" // Add any additional classes you need and adjust height as necessary
  style={{ backgroundImage: `url(${yellowbg1})` }}
><div className='mt-20'>
<h2 className="sm:text-6xl text-4xl  font-semibold mb-2 text-primary font-inter text-center">
         Emergency Resources
        </h2>
        <p className="font-poppins text-lg font-normal text-center">
          Discover nearby hospitals, police stations, and fire stations to <br/>
          ensure you know where to find help when you need it.
        </p>
        </div>
</div>
<Hotlines />
          <section className=' pb-10'>
      <div className="flex flex-col justify-center items-center pt-5 p-2  ">
       
      <h1 className="text-4xl font-semibold mb-3 font-poppins text-primary text-center">
        Emergency Services Locator
        </h1>
        <p className="lg:w-1/2 w-full text-black font-medium leading-relaxed font-poppins text-xl text-center">To ensure you have immediate access to essential emergency services</p>
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl gap-2 p-5 ">
      <div className="flex sm:flex-row flex-wrap justify-center items-center gap-3">
  <div className="mb-2  ">
    <button onClick={() => fetchNearbyLocations('police')} className="w-full px-4 py-2 bg-primary font-inter text-white font-semibold hover:bg-primarydark rounded-lg">
      Police Stations
    </button>
  </div>
  <div className="mb-2  ">
    <button onClick={() => fetchNearbyLocations('fire_station')} className="w-full px-4 py-2 bg-primary font-inter text-white font-semibold hover:bg-primarydark rounded-lg">
      Fire Stations
    </button>
  </div>
  <div className="mb-2 ">
    <button onClick={() => fetchNearbyLocations('hospital')} className="w-full px-4 py-2 bg-primary font-inter text-white font-semibold hover:bg-primarydark rounded-lg">
      Hospitals
    </button>
  </div>
</div>

      </div>
      
      <section className='pb-10 flex flex-col lg:flex-row'>
       {/* for locationlist  */}
        {/* {locationType && ( */}
        <div className="lg:w-1/4 w-full overflow-hidden lg:overflow-visible lg:transition-all duration-300">
          <div className="bg-gray-200 p-4 max-h-screen overflow-y-auto">     
      <LocationList
        locations={locations}
        onLocationClick={setSelectedLocation} 
        onOpenInGoogleMapsClick={handleOpenInGoogleMapsClick}       
      />
       </div>
        </div> 
        {/* )}     */}
         {/* for locationlist  */}
      <div className="lg:w-3/4 w-full lg:ml-4 lg:transition-all duration-300 max-w-5xl ">     
      <GoogleMap
        center={location || { lat: 0, lng: 0 }}
        zoom={15}
        mapContainerStyle={{ height: '400px', width: '100%',}}
      >

        {/* Display user's location as a marker */}
        {location && (
          <Marker
            position={location}
            label="You are here"
            icon={{ url: user_icon, scaledSize: new window.google.maps.Size(60, 60) }}
          />
        )}
     
        {/* Display nearby locations as markers and info windows */}
        {locations.map((location) => (
          <Marker
            key={location.place_id}
            position={{
              lat: location.geometry.location.lat,
              lng: location.geometry.location.lng,
            }}
            onClick={() => {
              setSelectedLocation(location);
            }}
            icon={getMarkerIcon(location.types)}
          />
        ))}
{selectedLocation && (
  <InfoWindow
    position={{
      lat: selectedLocation.geometry.location.lat,
      lng: selectedLocation.geometry.location.lng,
    }}
    onCloseClick={() => {
      setSelectedLocation(null);
    }}
  >
    <div>
    
      <h2 className='font-inter text-md'>{selectedLocation.name}</h2>
      <p className='font-inter text-md'>{selectedLocation.vicinity}</p>
      <p className='font-inter text-md'>Type: {selectedLocation.types.join(', ')}</p>
      <button className='text-primary font-inter text-lg font-semibold hover:underline' onClick={() => openInGoogleMaps(selectedLocation.place_id)}>
        Open in Google Maps
      </button>
    </div>
  </InfoWindow>
)}
      </GoogleMap>
      </div>
      </section>
   
      </section>    
      <Footer />
    </>
  );
};

export default EmergencyResources;