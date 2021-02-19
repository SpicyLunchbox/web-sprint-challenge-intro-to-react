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
h3 {
    color: yellow;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
a {
    color: yellow;
    text-decoration: none;
}
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
                <li>{individual.name === "Darth Vader" && <a href="http://www.nooooooooooooooo.com/">Click when Vader's code won't compile</a>}</li>
            </ul>
        </StyledCharacter>
    )
}   