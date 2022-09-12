// import React from 'react';
// import{ createRoot } from "react-dom/client";

// import App from './App';

// // ReactDOM.createRoot( <App/>, document.getElementById('root'));

   
// const domContainer =  document.getElementById('root');
// const root = createRoot(domContainer);
// root.render(<App/>);
import React from "react";
// import ReactDOM from "react-dom/client";
import App from "./App";

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//         <App />
//         );
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App  />);