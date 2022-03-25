import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character"
import styled from 'styled-components';



const App = () => {
  const [isLoading, setLoading] =useState(true);
  const [characterData, setCharacterData] = useState([]);
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then (res => {
      setCharacterData(res.data);
      setLoading(false);
    })

  }, []);

 
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  if (isLoading) {
    return <div className='App'>
      <h1>Loading...</h1>
      </div>;
  }  else {

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
     {characterData.map(person => {
      return <Character character={person}/>
     })}
    </div>
  );
  }
}

export default App;
