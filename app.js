import React from 'react';
import ReactDOM from 'react-dom/client';


const heading1 = React.createElement("h1", {
    id: "title1"
}, "Hello All!");
const heading2 = React.createElement("h2", {
    id: "title2"
}, "Welcome to React world!");
const container = React.createElement("div", {
    className: "container"
}, [heading1, heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);