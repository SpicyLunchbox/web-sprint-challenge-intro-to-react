import React from 'react';
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
    100% {
        opacity: 1;
    }
`
const StyledCharacter = styled.div`
opacity: 0;
animation: ${kf} 3.0s ease-in-out forwards;
`

export default function Character({individual}) {
    return (
        <StyledCharacter>
            <h3>{individual.name}</h3>
            <ul>
                <li>Born: {individual.birth_year}</li>
                <li>Eye Color: {individual.eye_color}</li>
                <li>Gender: {individual.gender}</li>
                <li>Hair Color: {individual.hair_color}</li>
            </ul>
        </StyledCharacter>
    )
}   
