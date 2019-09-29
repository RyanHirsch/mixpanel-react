import React from "react";

import PageView from "./lib/PageView";
import SuperProperty from "./lib/SuperProperty";

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
    </div>
  );
};

export default App;
