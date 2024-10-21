import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Link extends React.Component {
  render() {
    const link = React.createElement(
      "a",
      { href: this.props.url},
      `Read more about ${this.props.framework}`
    );

    return React.createElement("p", null, link);
  }
}

const link1 = React.createElement(Link, { framework : "React", url: "//react.dev"});
const link2 = React.createElement(Link, { framework : "Vue", url : "//vuejs.org"});
const link3 = React.createElement(Link, { framework : "Angular", url: "//angular.dev"});
const linkGroup = React.createElement(React.Fragment, null, link1, link2, link3);
ReactDOM.createRoot(document.getElementById('root')).render(linkGroup);
