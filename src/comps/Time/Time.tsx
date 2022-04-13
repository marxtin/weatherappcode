import React, {FC} from 'react';

import styled from "styled-components";
import { Weather } from "../../model/Weather";

interface TimeEntryProps {
    weather: Weather;
  }

const Div = styled.div`
font-family: "robotoslab";`

export const TimeStamp: FC<TimeEntryProps> = ({ weather }) => 
    <Div>{new Date((weather.dt+weather.timezone-7200)*1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    })}</Div>



