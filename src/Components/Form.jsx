import React from 'react'
import '../Styles/Form.css'

export default function Form() {
    return (
        <div className="container">
            <div className="Form" style={{ backgroundImage: "url(/images/bg-shorten-desktop.svg)" }}>
                <form>
                    <input type="text" placeholder="Shorten a link here ... " />
                    <button type="submit">Shorten It!</button>
                </form>
            </div>
        </div>
    )
}
