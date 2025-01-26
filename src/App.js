import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
    </div>
  );
}

export default App;
