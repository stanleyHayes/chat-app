import React, {useEffect, useState} from "react";
import "./chat.css";
import queryString from "query-string";
import io from "socket.io-client";
import {useLocation} from "react-router-dom";


import {SERVER_ENDPOINT, EMIT_JOIN, EMIT_DISCONNECT} from "../../constants/constants";
import InfoBar from "../../components/info-bar/info-bar";
import Input from "../../components/input/input";
import Messages from "../../components/messages/messages";
import TextContainer from "../../components/text-container/text-container";

const ChatPage = () => {
    const [name, setName] = useState("");
    const [users, setUsers] = useState('');
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    let socket;
    const location = useLocation();

    useEffect(() => {

        const {name, room} = queryString.parse(location.search);

        socket = io(SERVER_ENDPOINT);
        setRoom(room);
        setName(name);
        socket.emit(EMIT_JOIN, {name, room}, () => {

        });

        return () => {
            socket.emit(EMIT_DISCONNECT);
            socket.off();
        }

    }, [location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(() => [...messages, message]);
        });

        socket.on("roomData", ({users}) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = event => {
        event.preventDefault();
        if (!message) {
            return;
        }
        socket.emit('sendMessage', message, () => setMessage(''));
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                <div className="messages-container">
                    <Messages messages={messages} name={name}/>
                </div>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
            <TextContainer users={users}/>
        </div>
    )
}

export default ChatPage;
