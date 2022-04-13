import React, { FC } from "react";
import { Weather} from "../../model/Weather";
import styled from "styled-components";
import { getIconUrl } from "../../services/WeatherService";



interface WeatherEntryProps {
  weather: Weather;
}

const Div = styled.div`
font-family:'robotoslab'
`

export const WeatherEntry: FC<WeatherEntryProps> = ({ weather }) =>
  <Div>
    
    <div>
      <strong>{weather.main.temp}°C</strong>
      <div>({weather.main.temp_min}°C / {weather.main.temp_max}°C)</div>
    </div>
    <div>Humidity: {weather.main.humidity}%</div>
    {weather.weather.map(condition =>
      <div key={condition.id}>
        <img src={getIconUrl(condition.icon)} alt={condition.main} /> {condition.main}: {condition.description}
      </div>)
    }
  </Div>;


