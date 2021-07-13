import React from 'react'
import styled from 'styled-components'

import Form from './Form'
import MainContent from './MainContent'

const MainDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #eff1f7;
    margin-top: 100px;
`

export default function Main() {
    return (
        <MainDiv>
            <Form />
            <MainContent />
        </MainDiv>
    )
}
