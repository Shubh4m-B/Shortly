import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 40em;
    overflow-x: hidden;

    .Header-container {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Header-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: bottom;
        justify-content: space-evenly;
    }

    .Header-title {
        color: #34313d;
        font-size: 5em;
        font-weight: 700;
        margin: 0;
        padding: 0;
        line-height: 100px;
    }

    .Header-text {
        color: #919191;
        font-size: 18px;
    }

    .Header-img {
        width: 40%;
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
    }

    button:hover{
        background-color: #5ff3f3;
    }

    @media screen and (max-width: 750px) {
        .Header-container {
            flex-direction: column-reverse;
            justify-content: center;
        }
        .Header-img {
            width: 100%;
        }
        .Header-content {
            align-items: center;
            text-align: center;
        }
        .Header-title {
            margin-top: 40px;
            font-size: 50px;
            line-height: normal;
        }
    }

`
export default function Header() {
    return (
        <Head>
            <div className="Header-container">
                <div className="Header-content">
                    <h1 className="Header-title">More than just <br></br>shorter links</h1>
                    <p className="Header-text">Build your brand recognition and get detailed<br></br>insights on how your links are performing</p>
                    <button>Get Started</button>
                </div>
                <div className="Header-img">
                    <img src="/images/illustration-working.svg" alt="illustration"></img>
                </div>
            </div>
        </Head>
    )
}
