



import { useState } from 'react';
import Inputs from './Inputs';
import { useEffect } from 'react';
import getFormattedWeatherData from '../services/weatherServices';
import TimeAndLocation from './TimeAndLocation';
import Temperature from './Temperature';
import Forecast from './Forecast';


function Application() {


  const [query, setQuery] = useState({q: 'berlin'})
  const [units, setUnit] = useState('metric')
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    
  const fetchWeather = async () => {
    await getFormattedWeatherData({...query,units}).then(
      (data) => { 
        setWeather(data);
      });
      
    
  
  };
  fetchWeather();


  },[query,units] )

  return (
    <div className="w-full mx-auto max-w-lg   p-5  bg-darkblue h-fit shadow-md sm:rounded-b-lg rounded-b-lg font-inter">
     
     {/* <TopButtons setQuery={setQuery}/> */}
     <Inputs setQuery={setQuery} units={units} setUnits />


     {weather && (
      <div>
    
       <Forecast title="Hourly Forecast" items={weather.hourly}/>
       <Forecast title="Daily Forecast"items={weather.daily}/>
</div>

     )}

    
    </div>
  );
}


export default Application;
