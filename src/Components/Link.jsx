import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from 'styled-components';
// import '../Styles/Link.css'


const LinkDiv = styled.div`
    width: 100%;
    min-height: 100px; 
    background-color: white;
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;

    .Link {
        height:100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
    }

    .Link-long {
        width: 50%;
        color: #232127;
        padding-left: 70px;
        overflow:hidden;
    }

    .Link-short {
        padding-right: 70px;
        width: 40%;
        display:flex;
        justify-content:space-around;
        align-items: center;

    }
    .Link-short > span {
        color: #2acfcf;
        padding-right: 35px;
    }

    button {
        width: 100px;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .Link-short > button:hover {
        background-color: #5ff3f3;
    }

    #Copied,
    #Copied:hover {
        background-color: #3b3054;
    }

    @media screen and (max-width: 1000px) {
        .Link {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
        }
        .Link-long {
            display: flex;
            align-items: center;
            padding: 0;
            width: 90%;
            height: 80px;
            border-bottom: 1px solid rgb(211, 211, 211);
        }
        .Link-short {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
        }
        .Link-short > span {
            display: flex;
            align-items: center;
            height: 80px;
            text-align: left;
            width: 83%;
        }
        button {
            width: 90%;
            margin: 20px;
        }
    }

`
export default function Link(props) {
    const { link, short } = props
    const [copied, setCopy] = useState(false)

    const handleCopy = () => {
        setCopy(true)
    }

    useEffect(() => {
        setTimeout(() => setCopy(false), 1500)
    }, [copied])
    return (
        <CopyToClipboard text={short} onCopy={handleCopy}>
            <LinkDiv>
                <div className="Link">
                    <span className="Link-long">{link}</span>
                    <div className="Link-short">
                        <span>{short}</span>
                        {!copied && <button>Copy</button>}
                        {copied && <button id="Copied">Copied!</button>}
                    </div>
                </div>
            </LinkDiv>
        </CopyToClipboard>
    )
}
