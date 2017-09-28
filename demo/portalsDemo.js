import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const dom = new JSDOM(`
    <html>
        <body>
            <div id="app-root"></div>
            <div id="modal-root"></div>
        </body>
    </html>
`);
const document = dom.window.document;

// These two containers are siblings in the DOM
const htmlNode = document.querySelector('html');
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child the div
          with onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

ReactDOM.render(<Parent />, appRoot);
console.log('htmlNode -> ', htmlNode.outerHTML);

const button = document.querySelector("button");
button.click();
console.log('button clicked -> ', htmlNode.querySelector('p').outerHTML);

button.click();
console.log('button clicked -> ', htmlNode.querySelector('p').outerHTML);
