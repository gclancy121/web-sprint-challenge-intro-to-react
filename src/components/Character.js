// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledHolder = styled.div`
background-color: gray;
  display: flex;
  margin-left: 15%;
  flex-direction: column;
  border: 1px solid white;
  opacity: 75%;
  width: 70%;
`

export default function Character(props) {
    const {character} = props;
    
   
return (
    <StyledHolder className='character-holder'>
        <h1>{character.name}</h1>
            <div>
                <p>Birth Year: {character.birth_year}</p>
                <p>Eye Color: {character.eye_color}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Films: {character.films.join(', ')} </p>
            </div>
    </StyledHolder>
)

}