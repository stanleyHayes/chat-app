import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./join.css";

const JoinPage = () => {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const history = useHistory();


    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleRoomChange = event => {
        setRoom(event.target.value);
    };


    const handleJoinClick = event => {
        event.preventDefault();
        if (!name || !room) {
            return;
        }
        history.push(`/chat?name=${name}&room=${room}`);
    };

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input
                        value={name}
                        placeholder="Name"
                        className="joinInput"
                        type="text"
                        onChange={handleNameChange}
                    />
                </div>

                <div>
                    <input
                        value={room}
                        placeholder="Room"
                        className="joinInput mt-20"
                        type="text"
                        onChange={handleRoomChange}
                    />
                </div>
                <div>
                    <button onClick={handleJoinClick} className="button mt-20" type="submit">Sign In</button>
                </div>
            </div>
        </div>
    )
};

export default JoinPage;
