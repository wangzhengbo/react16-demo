import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';

class RenderToString extends Component {
    render() {
        return `Hello ${this.props.name}.`;
    }
}

console.log('renderToString -> ', ReactDOMServer.renderToString(<RenderToString name="React 16" />));
console.log('renderToStaticMarkup -> ', ReactDOMServer.renderToStaticMarkup(<RenderToString name="React 16" />));
