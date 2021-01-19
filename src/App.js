import './App.css';
import Header from './struct/header/header.jsx'
import Content from './struct/content/content.jsx'
import React from "react";


function App(props) {
  return (
    <div>
      <Header />
      <Content store={props.store} />
    </div>
  );
}

export default App;
