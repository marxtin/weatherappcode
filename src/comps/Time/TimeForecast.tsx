import React, {FC} from 'react';

import { Weather } from "../../model/Weather";

interface TimeEntryProps {
    weather: Weather;
    index: number;
  }


export const TimeStampForecast: FC<TimeEntryProps> = ({ weather,index }) => 
    <div>{new Date(((weather.dt+weather.timezone+((index+1)*10800))-7200)*1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    })}</div>



