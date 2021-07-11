import React from 'react'
import '../Styles/Header.css'

export default function Header() {
    return (
        <div className="Header">
            <div className="container">
                <div className="Header-content">
                    <h1 className="Header-title">More than just <br></br>shorter links</h1>
                    <p className="Header-text">Build your brand recognition and get detailed<br></br>insights on how your links are performing</p>
                    <button>Get Started</button>
                </div>
                <div className="Header-img">
                    <img src="/images/illustration-working.svg" alt="illustration"></img>
                </div>
            </div>
        </div>
    )
}
