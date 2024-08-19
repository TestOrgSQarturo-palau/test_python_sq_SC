import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
  render() {
    return <div class="hello">Hello, World!</div>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));