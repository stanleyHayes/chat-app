import React, {useEffect, useState} from "react";
import "./chat.css";
import queryString from "query-string";
import io from "socket.io-client";
import {useLocation} from "react-router-dom";


import {SERVER_ENDPOINT, EMIT_JOIN, EMIT_DISCONNECT} from "../../constants/constants";
import InfoBar from "../../components/info-bar/info-bar";
import Input from "../../components/input/input";

const ChatPage = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    let socket = io(SERVER_ENDPOINT);
    const location = useLocation();

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        setRoom(room);
        setName(name);
        socket.emit(EMIT_JOIN, {name, room}, () => {

        });

        return () => {
            socket.emit(EMIT_DISCONNECT);
            socket.off();
        }

    }, [location.search, socket]);

    useEffect(() => {
        socket.on('message', (message) => {
            console.log(message);
            setMessages([...messages, message]);
        });
    }, [messages, socket]);

    const handleMessageChange = event => {
        setMessage(event.target.value);
    }

    const sendMessage = event => {
        event.preventDefault();
        if (!message) {
            return;
        }
        socket.emit('sendMessage', message, () => setMessage(''));
    }

    console.log(messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default ChatPage;
