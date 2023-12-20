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
import { PhoneIcon } from "@heroicons/react/20/solid";
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

//Nearby Location List information component
const LocationList = ({ locations, onLocationClick, onOpenInGoogleMapsClick, locationType }) => (
  <div className="max-h-screen w-full lg:max-w-sm max-w-full">
    <h2 className="text-2xl text-primary font-semibold font-inter mb-2">
      Nearby {locationType &&
        (locationType.toLowerCase() === 'police'
          ? 'Police Stations'
          : locationType.toLowerCase() === 'fire_station' ? 'Fire Stations' :
            locationType.toLowerCase() === 'hospital' ? 'Hospitals' : ''
        )}
    </h2>

    <ul>
      {locations.map((location, index) => (
        <li key={location.place_id} className={`font-inter mb-4 ${index !== locations.length - 1 ? '' : ''}`} onClick={() => onLocationClick(location)}>
          <h3 className="text-lg font-semibold font-inter">{location.name}</h3>
          {location.rating && (
            <div className='flex flex-row'>
              <p className='font-inter font-medium'>Rating: {location.rating} stars </p>
              {/* Display stars based on the rating */}
              {Array.from({ length: Math.floor(location.rating) }).map((_, index) => (
                <span key={index} role="img" aria-label="star" className="text-yellow-500">
                   ⭐
                </span>
              ))}
            </div>
          )}
          <p className='font-inter font-medium'>Location: {location.vicinity}</p>
          <p className='font-inter font-medium'>Distance: {location.distance.toFixed(2)} km</p>

          {location.opening_hours && (
            <div>
              <p className='font-inter font-medium'>{location.opening_hours.open_now ? 'Open Now' : 'Closed Now'}</p>
            </div>
          )}
       {location.details && location.details.formatted_phone_number && (
            <div className='flex flex-row justify-between'>
              <p className='font-inter font-medium'>Phone: {location.details.formatted_phone_number}</p>

              {/* Add a call icon to trigger the phone call */}
              <button className='sm:hidden block text-lg  mr-5'>
              <a href={`tel:${location.details.formatted_phone_number}`} className='text-primary font-inter font-semibold '>
                <PhoneIcon className="inline-block text-lg  w-5 h-5 mb-1" />   CALL
              </a>
              </button>
            </div>
          )}
          <div className={`cursor-pointer ${index !== locations.length - 1 ? 'border-b border-gray/30' : ''}`} onClick={() => onLocationClick(location)}>
            <button className="text-primary font-inter text-lg font-semibold mb-4 hover:underline" onClick={() => onOpenInGoogleMapsClick(location.place_id)}>
              Open in Google Maps
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
// End Nearby Location List information component

const EmergencyResources = () => {
  const [isLoading, setIsLoading] = useState(false);

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

  // for phone number in locationlist
  const fetchPlaceDetails = (placeId) => {
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
    const apiUrl2 = 'http://localhost/Backend/Server2.php';
  
    return axios.get(`${apiUrl2}?placeid=${placeId}&fields=formatted_phone_number`)
      .then((response) => {
        // Handle the response from your PHP script
        console.log(response.data);
        return response.data.result; // Return the details, including the phone number
      })
      .catch((error) => {
        console.error(error);
        return {}; // Return an empty object in case of an error
      });
  };
   // end for phone number in locationlist
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
     setIsLoading(true); 
      // end of close the information if changed the types of nearby
    const apiUrl = 'http://localhost/Backend/Server.php';
    const apiKey = 'AIzaSyDQOMaCyapoFRbaagiFUZ3qRGk1UJni7nk';
    const locationParam = `${location.lat},${location.lng}`;
    const radius = 5000; // 5 kilometers
    const fields = 'formatted_address,name,geometry,place_id,types,opening_hours,formatted_phone_number,rating';
  
    axios.get(
      `http://localhost/Backend/Server.php?location=${locationParam}&radius=${radius}&type=${type}&key=${apiKey}&fields=${fields}`
    )
    .then((response) => {
      const updatedLocations = response.data.results.map(async (result) => {
        const details = await fetchPlaceDetails(result.place_id);
        const distance = haversine(
          { latitude: location.lat, longitude: location.lng },
          { latitude: result.geometry.location.lat, longitude: result.geometry.location.lng }
        );
  
        return { ...result, distance, details };
      });
  
      Promise.all(updatedLocations)
        .then((completedLocations) => {
          setLocations(completedLocations);
        });
    })
    .catch((error) => {
      console.error('Error fetching nearby locations:', error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  const openInGoogleMaps = (placeId) => {
    window.open(`https://www.google.com/maps/place/?q=place_id:${placeId}`);
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDQOMaCyapoFRbaagiFUZ3qRGk1UJni7nk',
    // Other options, libraries, and modules if needed
  });

  if (!isLoaded) {
    return         <div className='w-full max-w-xs flex justify-center items-center'>

    <button disabled type="button" className="text-primary font-inter text-xl animate-pulse  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-primary animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...
    </button>
            </div>;
  }
  return (
    <>
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
      
      <section className='pb-10 flex flex-col lg:flex-col justify-center  items-center'>
       {/* for locationlist  */}
       
         {/* for locationlist  */}
      <div className="flex lg:flex-row flex-col  max-w-7xl w-full lg:transition-all duration-300  ">     
      <GoogleMap
        center={location || { lat: 0, lng: 0 }}
        zoom={15}
        mapContainerStyle={{ height: '500px', width: '100%',}}
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
      {isLoading ? (
        <div className='w-full max-w-xs flex justify-center items-center'>

<button disabled type="button" className="text-primary font-inter text-xl animate-pulse  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
<svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-primary animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Loading...
</button>
        </div>
      ) : (
        location && (
          <>
            {locationType && (
              <div className='overflow-y-scroll max-h-[500px] p-2'>
                <LocationList
                  locations={locations}
                  onLocationClick={setSelectedLocation}
                  onOpenInGoogleMapsClick={handleOpenInGoogleMapsClick}
                  locationType={locationType}
                />
              </div>
            )}
          </>
        )
      )}
      </div>
      {/* <div className="lg:w-3/5 mt-3 w-full">
          <div className="bg-gray-200  p-4  overflow-y-scroll">     

       </div>
        </div>  */}
      </section>
   
      </section>    
      <Footer />
      
    </>
  );
};

export default EmergencyResources;