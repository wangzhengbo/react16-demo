import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';

class RenderToArray extends Component {
    render() {
        return [
            <li key="A">First Item</li>,
            <li key="B">Second Item</li>,
            <li key="C">Third Item</li>
        ];
    }
}

console.log('RenderToArray -> ', ReactDOMServer.renderToString(<RenderToArray />));
console.log('RenderToArray -> ', ReactDOMServer.renderToStaticMarkup(<RenderToArray />));
