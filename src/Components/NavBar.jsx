import React from 'react'
import styled from 'styled-components'


const Navbar = styled.div`
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;

    .NavBar-container{
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .NavBar-left {
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .NavBar-left > li, .NavBar-right > li{
        list-style: none;
        color: #919191;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .NavBar-left > li:hover, .NavBar-right>li:hover {
        color: #34313d;
    }

    .NavBar-right {
        width: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        color: #919191;
    }

    .NavBar-right > button {
        font-family: "Poppins", sans-serif;
        background-color: #2acfcf;
        color: white;
        font-weight: 500;
        font-size: 18px;
        padding: 5px 20px;
        outline: none;
        border: none;
        border-radius: 50px;
        cursor: pointer;
    }

    .hamburger {
        display: none;
    }

    @media screen and (max-width: 750px) {
        .NavBar-container {
            justify-content: space-between;
        }
        .NavBar-left > li,
        .NavBar-right > li {
            display: none;
        }
        .NavBar-right {
            flex-direction: row-reverse;
        }
        .NavBar-right > button {
            display: none;
        }
        .hamburger {
            display: block;
            font-size: 30px;
        }
    }
`

export default function NavBar() {
    return (
        <Navbar>
            <div className="NavBar-container">
                <div className="NavBar-left">
                    <img src='/images/logo.svg' alt='Shortly-logo' />
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </div>
                <div className="NavBar-right">
                    <li>Login</li>
                    <button>Sign Up</button>
                    <i class="fas fa-bars hamburger"></i>
                </div>
            </div>
        </Navbar>
    )
}
