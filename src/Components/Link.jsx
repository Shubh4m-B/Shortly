import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import '../Styles/Link.css'

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
            <div className="Link">
                <span className="Link-long">{link}</span>
                <div className="Link-short">
                    <span>{short}</span>
                    {!copied && <button>Copy</button>}
                    {copied && <button id="Copied">Copied!</button>}
                </div>
            </div>
        </CopyToClipboard>
    )
}
