import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
    background: #232127;
    padding: 3em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    min-height: 35vh;

    .container {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    li {
        list-style: none;
        padding: 0.7em;
    }

    a {
        text-decoration: none;
        color: #bfbfbf;
        transition: all 0.3s ease-in-out;
    }

    a:hover {
        color: #2acfcf;
    }

    .Footer-icons {
        display: flex;
        justify-content: space-evenly;
        width: 20%;
        padding: 0.7em 0;
    }

    a > i {
        font-size: 30px;
    }

    a > i:hover {
        color: #2acfcf;
    }

    @media screen and (max-width: 750px) {
        .container {
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .Footer-section {
            margin: 20px 0;
        }
        .Footer-icons {
            width: 60%;
            margin-top: 20px;
        }
    }

`

export default function Footer() {
    return (
        <Foot>
            <div className="container">
                <div style={{ width: "25%" }}>
                    <h1>Shortly</h1>
                </div>
                <div className="Footer-section">
                    <li>Features</li>
                    <li><a href="#">Link Shortening</a></li>
                    <li><a href="#">Branded Links</a></li>
                    <li><a href="#">Analytics</a></li>
                </div>
                <div className="Footer-section">
                    <li>Resources</li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Support</a></li>
                </div>
                <div className="Footer-section">
                    <li>Company</li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contract</a></li>
                </div>
                <div className="Footer-icons">
                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </Foot>
    )
}
