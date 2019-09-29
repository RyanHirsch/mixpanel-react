import React, { useState } from "react";

import TrackEvent from "../lib/TrackEvent";

const MyExample: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <TrackEvent name="MyExample Rendered" />
      <TrackEvent name="MyExample Count" props={{ count }} />
      Hello
      <button type="button" onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </div>
  );
};

export default MyExample;
