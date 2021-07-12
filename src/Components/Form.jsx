import React, { useState } from 'react'
import axios from 'axios';
import Link from './Link';
import '../Styles/Form.css'

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
        console.log(res);
        const newLink = {
            link: link,
            short: res.data.result.full_short_link
        }
        setLinks(links => [...links, newLink]);
        setLink("")
    }

    return (
        <div className="Form-container">
            <div className="Form" style={{ backgroundImage: "url(/images/bg-shorten-desktop.svg)" }}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Shorten a link here ... " value={link} onChange={handleChange} />
                    <button type="submit">Shorten It!</button>
                </form>
            </div>
            {links.map((link) => (
                <Link link={link.link} short={link.short} />
            ))}
        </div>
    )
}
