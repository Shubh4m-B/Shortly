import React from 'react'
import '../Styles/NavBar.css'

export default function NavBar() {
    return (
        <div className="NavBar">
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
                </div>
            </div>
        </div>
    )
}
