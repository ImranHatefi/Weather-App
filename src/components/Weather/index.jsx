import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const search = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4996f8cbef13bc9adce8184464576435`;

  return (
    <div className="page">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={search}
          type="text"
        />
      </div>
      <div className="container">
        {data.name !== undefined && (
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
<div className="icon">
{data.weather ? <img{'https://openweathermap.org/img/wn/{data.weather[0].icon}@4x.png'}/> : null}
</div>
          </div>
        )}

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed} KM/S</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
