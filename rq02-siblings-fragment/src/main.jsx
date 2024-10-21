import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const title = React.createElement("h1", null, "Hello, World!");
const link = React.createElement("a", { href : "//react.dev"}, "Read more");
const group = React.createElement(React.Fragment, null, title, link);
ReactDOM.createRoot(document.getElementById('root')).render(group);
