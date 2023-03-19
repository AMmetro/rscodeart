import React, { Component } from 'react';
import './App.css';

export function mathfunc(a: number, b: number) {
  const c = a + b;
  return c;
}

class App extends Component {
  render() {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Default page
      </div>
    );
  }
}

export default App;
