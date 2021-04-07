import React from "react";
import "./App.scss";
import Router from "./Router";

class App extends React.Component {
  render() {
    return (
      <>
        <main className="bg-main">
            <Router />
        </main>
      </>
    );
  }
}

export default App;
