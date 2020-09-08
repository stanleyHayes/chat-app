import React from "react";
import "./input.css";

const Input = ({setMessage, message, sendMessage}) => {

    return (
        <form className="form">
            <input
                value={message}
                onChange={event => setMessage(event.target.value)}
                type="text"
                placeholder="Type a message"
                className="input"
            />

            <button
                className="send-button"
                onClick={(event) => sendMessage(event)}>
                Send
            </button>
        </form>
    )
}

export default Input;
