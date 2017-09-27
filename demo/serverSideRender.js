import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';

class CustomAttribute extends Component {
    render() {
        return (
            <div mycustomattribute="something" data-foo="42" aria-label="Close" tabIndex="2">
                Hello {this.props.name}.
            </div>
        );
    }
}

console.log('React.version -> ', React.version);
console.log('renderToString -> ', ReactDOMServer.renderToString(<CustomAttribute name="React 16" />));
console.log('renderToStaticMarkup -> ', ReactDOMServer.renderToStaticMarkup(<CustomAttribute name="React 16" />));
console.log('renderToNodeStream -> ', ReactDOMServer.renderToNodeStream(<CustomAttribute name="React 16" />));
console.log('renderToStaticNodeStream -> ', ReactDOMServer.renderToStaticNodeStream(<CustomAttribute name="React 16" />));
