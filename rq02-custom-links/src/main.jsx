import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const link1 = React.createElement("a", { href : "\\react.dev"}, "read more about react");
const p1 = React.createElement("p", null, link1);
const link2 = React.createElement("a", { href : "\\react.dev"}, "read more about react");
const p2 = React.createElement("p", null, link1);
const link3 = React.createElement("a", { href : "\\react.dev"}, "read more about react");
const p3 = React.createElement("p", null, link1);

const group = React.createElement(React.Fragment, null, p1, p2, p3);
ReactDOM.createRoot(document.getElementById('root')).render(group);
