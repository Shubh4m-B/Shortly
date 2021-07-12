import React, { Component } from 'react'
import Card from './Card'

import cardData from '../Helpers/Card-data'

import '../Styles/MainContent.css'

export class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: cardData
        }
    }
    render() {
        return (
            <div className="MainContent">
                <h1 className="MainContent-title">Advanced Statistics</h1>
                <p className="MainContent-text">Track how your links are performing across web with <br></br>our advanced statistics dashboard.</p>

                <div className="MainContent-cards">
                    {this.state.cardData.map((data) => (
                        <Card title={data.title} text={data.text} src={data.src} />
                    ))}
                </div>
            </div>
        )
    }
}

export default MainContent

