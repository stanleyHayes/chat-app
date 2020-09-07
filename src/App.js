import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import JoinPage from "./pages/join/join-page";
import ChatPage from "./pages/chat/chat-page";

function App() {
  return (
   <BrowserRouter>
     <Switch>
       <Route exact={true} path="/">
         <JoinPage/>
       </Route>

       <Route exact={true} path="/chat">
         <ChatPage/>
       </Route>
     </Switch>
   </BrowserRouter>
  );
}

export default App;
