import React from 'react'
import '../Styles/Card.css'

export default function Card(props) {

    const { title, text, src } = props

    return (
        <div className="Card">
            <div className="Card-content">
                <div className="Card-img">
                    <img src={src} alt="Brand Recognition" />
                </div>
                <h2 className="Card-title">{title}</h2>
                <p className="Card-text">{text}</p>
            </div>
        </div>
    )
}
