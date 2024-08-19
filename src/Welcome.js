import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
  render() {
    return <div className="hello">Hello, World!</div>; // Correct: Use className instead of class
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));