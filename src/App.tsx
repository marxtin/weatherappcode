import React, { useState } from 'react';
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import styled from "styled-components"
import { useLocalStorage } from 'usehooks-ts'
import { LocationSearch } from "./comps/LocationSearch/LocationSearch";
import { LocationTable } from "./comps/LocationTable/LocationTable";
import { ErrorAlert, WarningAlert } from "./comps/Alert/Alert";
import { WeatherSummary } from "./comps/WeatherSummary/WeatherSummary";
import OrangeIcon from "./comps/icons/Orange";
import BlueIcon from "./comps/icons/Blue"
import { WeatherLocation } from "./model/Weather";
import { searchLocation } from "./services/WeatherService";



const Button = styled.button`
border: none;
background: none;
cursor: pointer;
white-space: nowrap;
color: ${({ theme }) => theme.revtext};`

const Header = styled.header`
display: flex;
flex-direction: row;
align-items: center;
margin-left: 1.5rem;
gap:0.5rem;
height: 100%;
& > h1 {
  color: ${({ theme }) => theme.body};
  filter: drop-shadow(1px 1px 1px ${({ theme }) => theme.text}) drop-shadow(2px 2px 1px ${({ theme }) => theme.text});
  font-size: 3rem;
}

`
const Subheader = styled.header`
display: flex;
flex-direction: row;
align-items: flex-end;
gap: 6rem;
margin-top:1rem;
padding-left: 2rem;
width:100vw;
color: ${({ theme }) => theme.revtext};
background-color: ${({ theme }) => theme.revbody};
height: 2rem;
& > h2 {
  margin: 0;
  font-size: 1,75rem;
}
`

function App() {

  const [locations, setLocations] = useLocalStorage<WeatherLocation[]>("locations", []);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);
  const [dark, setDark] = useLocalStorage("theme",false)

  const resetAlerts = () => {
    setError('');
    setWarning('');
  }

  let addLocation = async (term: string) => {
    resetAlerts();
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location found called '${term}'`);
    } else if (locations.find(item => item.id === location.id)) {
      setWarning(`Location '${term}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
    }
  };

  const handleThemeClick = () => {
    setDark(!dark)
  }

  const handleClear = () => {
    setLocations([]);
    window.location.reload();
  }


 

  return (
    <div>
      <ThemeProvider theme={dark ? darkTheme : lightTheme} >
        <GlobalStyles />
        <Header>
          <h1>Weather App</h1>
          <Button onClick={() => handleThemeClick()}>{dark ? <OrangeIcon /> : <BlueIcon />}</Button>
        </Header>
        <LocationSearch onSearch={addLocation} />
        <ErrorAlert message={error} />
        <WarningAlert message={warning} />
        <Subheader>
          <h2>Locations</h2>
          <Button onClick={() => handleClear()}>clear locations</Button>
        </Subheader>
        <LocationTable locations={locations}
          current={currentLocation}
          onSelect={location => setCurrentLocation(location)} />

     
        <WeatherSummary location={currentLocation} />
      </ThemeProvider>
    </div>
  );
}

export default App;
