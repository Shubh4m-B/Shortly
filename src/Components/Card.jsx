import React from 'react'
import styled from 'styled-components'
// import '../Styles/Card.css'

const CardDiv = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 40px;
    margin: 20px 20px 40px 20px;
    height: 200px;
    max-width: 300px;

    .Card-content {
        width: 100%;
        height: 100%;
        transform: translateY(-80px);
    }

    .Card-img {
        background-color: #3b3054;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 40px 0;
    }

    .Card-title {
        color: #34313d;
    }

    .Card-text {
        color: #919191;
    }

    @media screen and (max-width: 1000px) {
        .Card-content {
            transform: translateY(-30px);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            text-align: center;
        }
        .Card-img {
            min-height: 80px;
            margin-bottom: 10px;
        }
    }

`
export default function Card(props) {

    const { title, text, src } = props

    return (
        <CardDiv>
            <div className="Card-content">
                <div className="Card-img">
                    <img src={src} alt="Brand Recognition" />
                </div>
                <h2 className="Card-title">{title}</h2>
                <p className="Card-text">{text}</p>
            </div>
        </CardDiv>
    )
}
