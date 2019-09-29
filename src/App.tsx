import React from "react";

import { PageView, SuperProperty, TrackLink } from "./lib";

import MyExample from "./components/MyExample";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SuperProperty name="isDev" value={true} />
      <SuperProperty name="Example Value" value="From Dev" />
      <PageView name="Home Page" />
      <MyExample />
      <TrackLink href={"//google.com"}>Google</TrackLink>
    </div>
  );
};

export default App;
