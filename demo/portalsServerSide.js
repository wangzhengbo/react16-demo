import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
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
const domNode = document.querySelector("#domNode");

class Portals extends Component {
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            domNode,
        );
    }
}

const str = ReactDOMServer.renderToString(
    <Portals>
        <h1>hello</h1>
        <span>Hello React 16.</span>
    </Portals>
);
console.log('str', str);
console.log('htmlNode -> ', htmlNode.outerHTML);
