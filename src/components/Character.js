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

export default function Character(props) {
    const {characterData} = props
    
    

    

    return (
        <StyledCharacter>
            <p>{characterData.name}</p>
        </StyledCharacter>
    )
}