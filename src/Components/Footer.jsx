import React from 'react'
import '../Styles/Footer.css'

export default function Footer() {
    return (
        <div className="Footer">
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
        </div>
    )
}
