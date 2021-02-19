import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
    100% {
        opacity: 1;
    }
`

const StyledFooter = styled.div`
opacity: 0;
animation: ${kf} 4.0s ease-in-out forwards;
color: yellow;
`

export default function Footer() {
    return (
        <StyledFooter>
            <h2>May the Force be with you</h2>
        </StyledFooter>      
    )
}