import React from 'react'
import '../Styles/Link.css'

export default function Link(props) {
    const { link, short } = props
    return (
        <div className="Link">
            <span className="Link-long">{link}</span>
            <div className="Link-short">
                <span>{short}</span>
                <button>Copy</button>
            </div>
        </div>
    )
}
