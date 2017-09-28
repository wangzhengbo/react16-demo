import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
        <body>
            <div id="app"></div>
            <div id="domNode"></div>
        </body>
    </html>
`);
const document = dom.window.document;
const htmlNode = document.querySelector("html");
const appNode = document.querySelector("#app");
const domNode = document.querySelector("#domNode");

class Portals extends Component {
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            domNode,
        );
    }
}

ReactDOM.render(
    <Portals>
        <h1>hello</h1>
        <span>Hello React 16.</span>
    </Portals>,
    appNode
);
console.log('htmlNode -> ', htmlNode.outerHTML);
