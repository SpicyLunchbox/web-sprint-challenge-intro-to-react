import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
    100% {
        opacity: 1;
    }
`

const StyledHeader = styled.div`
opacity: 0;
animation: ${kf} 1.0s ease-in-out forwards;
`

export default function Header() {
    return (
        <StyledHeader>
            <h1>Star Wars</h1>
            <p>A long time ago in a galaxy far far away...</p>
        </StyledHeader>      
    )
}