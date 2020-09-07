import React, {useEffect, useState} from "react";
import "./chat.css";
import queryString from "query-string";

const ChatPage = ({location}) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        setRoom(room);
        setName(name);
    }, [location.search]);
    return (
        <div>
            <h1>Chat Page</h1>
        </div>
    )
};

export default ChatPage;
