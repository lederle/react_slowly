import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Link extends React.Component {
  render() {
    const link = React.createElement("a", { href : "\\react.dev"}, "Read more about react");
    return React.createElement("p", null , link);
  }
}

const link1 = React.createElement(Link);
const link2 = React.createElement(Link);
const link3 = React.createElement(Link);

const group = React.createElement(React.Fragment, null, link1, link2, link3);
ReactDOM.createRoot(document.getElementById('root')).render(group);
