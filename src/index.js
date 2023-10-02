import React from "react";
import ReactDOM from "react-dom"; // Correct the import here
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>,
  rootElement
);



// import React from "react";
// import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
// import "./index.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
// import { StateProvider } from "./context/StateProvider";
// import { initialState } from "./context/initialState";
// import reducer from "./context/reducer";

// const root = document.getElementById("root");
// const rootContainer = createRoot(root);

// rootContainer.render(
//   <Router>
//     <StateProvider initialState={initialState} reducer={reducer}>
//       <App />
//     </StateProvider>
//   </Router>
// );
