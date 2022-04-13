import React from "react";
import { FC, useState } from "react";
import styled from "styled-components"

interface LocationSearchProps {
  onSearch: (search: string) => void;
}

const Div = styled.div`
width: 100vw;

margin-top: 1rem;
margin-left: 2rem;
display: flex;
flex-direction: row;
gap: 1rem;
& > input {
  width: 100px;
}
`

export const LocationSearch: FC<LocationSearchProps> = ({ onSearch }) => {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';

  const addLocation = () => {
    onSearch(locationSearch); // Prop callback invoked - string passed
    setLocationSearch('');
  };

  return (
    <Div>
      <label>
        Add Location
      </label>
      <input type="text" value={locationSearch}
        onChange={e => setLocationSearch(e.target.value)} />

      <button
        onClick={addLocation} disabled={disableSearch}>Search</button>
    </Div>
  );
}