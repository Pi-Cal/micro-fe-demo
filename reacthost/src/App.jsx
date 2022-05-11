import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import cardWrapper from "remoteclient/cardWrapper";

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    cardWrapper(divRef.current);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: reacthost</div>
      <div ref={divRef}></div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
