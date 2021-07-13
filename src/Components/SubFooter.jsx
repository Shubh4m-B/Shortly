import React from 'react'
import styled from 'styled-components'

const SubFoot = styled.div`
    height: 30vh;
    background-color: #3b3054;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    
    .SubFooter{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height:100%;
        width:100%;
        background-image: url("/images/bg-boost-desktop.svg");
        background-size: 110%;
    }

    button {
        font-family: "Poppins", sans-serif;
        background-color: #2acfcf;
        color: white;
        max-width: 170px;
        font-weight: 500;
        font-size: 18px;
        padding: 10px 25px;
        outline: none;
        border: none;
        border-radius: 50px;
        margin: 30px 0;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    button:hover{
        background-color: #5ff3f3;
    }

    @media screen and (max-width: 750px) {
        .SubFooter {
            background-image: url("/images/bg-boost-mobile.svg");
            background-size: 120%;
            text-align: center;
            height: 40vh;
        }
    }
`

export default function SubFooter() {
    return (
        <SubFoot>
            <div className="SubFooter">
                <h1>Boost your links today</h1>
                <button>Get Started</button>
            </div>
        </SubFoot>
    )
}
