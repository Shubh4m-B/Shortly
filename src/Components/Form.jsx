import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Link from './Link';


const FormDiv = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transform: translateY(-80px);

    .Form {
        width: 100%;
        border-radius: 10px;
        background-color: #3b3054;
        background-repeat: no-repeat;
        background-size: 110%;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0;
        margin-bottom: 5px;
    }

    .Form > form {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        margin: 10px 40px;
    }

    input {
        width: 70%;
        padding: 15px 25px;
        font-size: 18px;
        color: #919191;
        outline: none;
        border-radius: 5px;
        border: none;
    }

    button {
        font-family: "Poppins", sans-serif;
        background-color: #2acfcf;
        color: white;
        font-weight: 500;
        font-size: 18px;
        outline: none;
        border: none;
        transition: all 0.3s ease-in-out;
        width:20%;
        border-radius: 5px;
        padding: 12px 25px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    button:hover {
        background-color: #5ff3f3;
    }

    @media screen and (max-width: 1200px) {
        .Form {
            background-size: 300%;
        }
    }

    @media screen and (max-width: 750px) {
        .Form {
            padding: 20px 0;
        }
        form {
            background-size: 500%;
            flex-direction: column;
            width: 100%;
        }
        input {
            width: 84%;
        }
        button {
            width: 100%;
            margin: 10px 0 0 0;
            padding: 12px 25px;
        }
    }

`

export default function Form() {
    const BASE_URL = "https://api.shrtco.de/v2/shorten?url="
    const [links, setLinks] = useState([]);

    const [link, setLink] = useState(undefined);

    const handleChange = (e) => {
        setLink(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = `${BASE_URL}${link}`
        let res = await axios.get(url)
        const newLink = {
            link: link,
            short: res.data.result.full_short_link
        }
        setLinks(links => [...links, newLink]);
        setLink("")
    }

    return (
        <FormDiv>
            <div className="Form" style={{ backgroundImage: "url(/images/bg-shorten-desktop.svg)" }}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Shorten a link here ... " value={link} onChange={handleChange} />
                    <button type="submit" className="Submit" >Shorten It!</button>
                </form>
            </div>
            {links.map((link) => (
                <Link link={link.link} short={link.short} />
            ))}
        </FormDiv>
    )
}
