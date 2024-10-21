import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Link extends React.Component {
  render() {
    const link = React.createElement("a", { href: this.props.url}, this.props.children);
    return React.createElement("p", null, link); 
  }
}

const boldReact = React.createElement("strong", null , "react");
const link1 = React.createElement(Link, { url: "//react.dev"}, boldReact);
const link2 = React.createElement(Link, { url: "//vuejs.org"}, "vue");
const link3 = React.createElement(Link, { url: "//angular.dev"}, "angular");

const group = React.createElement(React.Fragment, null, link1, link2, link3);
ReactDOM.createRoot(document.getElementById('root')).render(group);
