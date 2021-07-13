import React, { Component } from 'react'
import styled from 'styled-components'

import Card from './Card'
import cardData from '../Helpers/Card-data'


const Maincontent = styled.div`
    margin-top: 55px;

    .MainContent{
        height:100%;
        width:100%;
    }

    .MainContent-title {
        color: #34313d;
        text-align: center;
    }

    .MainContent-text {
        color: #919191;
        font-size: 18px;
        text-align: center;
    }

    .MainContent-cards {
        display: flex;
        margin: 100px 0;
    }

    @media screen and (max-width: 1000px) {
        .MainContent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .MainContent-cards {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .MainContent-text {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90%;
        }
    }

`

export class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: cardData
        }
    }
    render() {
        return (
            <Maincontent>
                <div className="MainContent">
                    <h1 className="MainContent-title">Advanced Statistics</h1>
                    <p className="MainContent-text">Track how your links are performing across web with <br></br>our advanced statistics dashboard.</p>

                    <div className="MainContent-cards">
                        {this.state.cardData.map((data) => (
                            <Card title={data.title} text={data.text} src={data.src} translate={data.translate} />
                        ))}
                    </div>
                </div>
            </Maincontent>
        )
    }
}

export default MainContent

