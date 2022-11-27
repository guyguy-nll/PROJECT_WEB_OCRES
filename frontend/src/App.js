import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
//import { render } from "../../backendold/app";

/*
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }
}

callAPI() {
  fetch("http://localhost:7000")
    .then(res => res.text())
    .then(res => this.setState=({apiResponse: res}));
}

ComponentWillMount(){
  this.callAPI();
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>{this.state.apiResponse}</p>
    </div>
  );
}
*/

function App() {
  const [msg, setMsg] = useState("");
  const handleClick = async () => {
    console.log("click");
    const data = await window.fetch("/api/youtube");
    console.log("Récupération du backend");
    const json = await data.json();
    console.log("Data transformer en JSON");
    const msg = json.msg;

    setMsg(msg);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Bouton</button>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
