import React, { FC, useEffect, useState } from "react";
import { WeatherEntry } from "../WeatherEntry/WeatherEntry";
import { Weather, WeatherLocation } from "../../model/Weather";
import { readForecast, readWeather } from "../../services/WeatherService";
import {TimeStamp} from "../Time/Time"
import {TimeStampForecast} from "../Time/TimeForecast"
import styled from 'styled-components'


interface WeatherSummaryProps {
  location: WeatherLocation | null;
}

const Ol = styled.ol`
    width: 95vw;
    display: grid;
    grid-template-columns: 
  repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  
    & > li {
      
      border-bottom: 1px solid ${({ theme }) => theme.text};
      padding-bottom: 10px;
      list-style-type: none;
      display: inline-block;
  
      &:hover {
        background: ${({ theme }) => theme.bg};
      }
    }
  `

export const WeatherSummary: FC<WeatherSummaryProps> = ({ location }) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Weather[] | null>(null);
  
  useEffect(() => {
    (async function () {
      if (location) {
        const [weather, forecast] = await Promise.all([
          readWeather(location.id),
          readForecast(location.id)
        ]);
        setWeather(weather);
        setForecast(forecast);
       
        console.log(weather
        );
        console.log(forecast);
      }
    })()
  }, [location]);

  if (!location || !weather || !forecast) return null;
  
  
 
  return (
    <div >

      <div style={{ marginLeft: "2rem" }}>
        <h2>{location.name}</h2>
        <TimeStamp weather={weather}/>
        <WeatherEntry weather={weather} />

        <hr />
        <h2 >Forecast</h2> </div>
      <div>
        <Ol style={({ whiteSpace: 'nowrap' })}>
          {forecast.map((timePoint,index )=>

            <li key={timePoint.dt}>
              <TimeStampForecast index={index} weather={weather}/>
              <WeatherEntry weather={timePoint} />
            </li>
          )}
        </Ol>
      </div>
    </div>
  );
};