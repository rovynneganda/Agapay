import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'ffe63745a1e6cbad92e44b2bf6f0ea6a'; // Replace with your API key
const CITY_NAME = 'Caloocan,PH';

const TimeAndDate = () => {
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    async function fetchTimestamp() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
        );

        setTimestamp(response.data.dt * 1000); // Convert to milliseconds
      } catch (error) {
        console.error('Error fetching timestamp', error);
      }
    }

    // Fetch the initial timestamp and set up an interval to update it every second
    fetchTimestamp();
    const interval = setInterval(fetchTimestamp, 1000);// Update the time every second

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
 
      <p>Time and Date:&nbsp;
        {timestamp
          ? new Date(timestamp).toLocaleString('en-US', {
              timeZone: 'Asia/Manila', // Set the timezone to Caloocan, Philippines
            })
          : 'Loading...'}
      </p>
    </div>
  );
};

export default TimeAndDate;