import React, { FC } from "react";
import styled from "styled-components"
import { WeatherLocation } from "../../model/Weather";

interface LocationTableProps {
  locations: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
}

const Div = styled.div`
display: grid;
    grid-template-columns: 
    repeat(auto-fit, minmax(100px, 1fr));
gap:1rem;
cursor:pointer;

& div > p {
  font-size: 1.1rem;
  width: 100px;
  height: 1.4rem;
  text-align: center;
  
}`

export const LocationTable: FC<LocationTableProps> = ({ locations, onSelect, current }) =>
  <div>



    <Div>
      {locations.map(location =>
        <div key={location.id}
          onClick={() => onSelect(location)}>
          <p className={current?.id === location.id ? 'primary' : ''}>{location.name}</p>

        </div>
      )}
    </Div>

  </div>;