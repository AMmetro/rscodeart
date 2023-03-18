import React, { Component } from 'react';
import './App.css';
import Header from './Pages/Header/Header';
import Routing from './Pages/Routing/Routing';

export function testir(a: number, b: number) {
  const c = a + b;
  console.log('====c===', c);
  return 'da';
}

class App extends Component {
  render() {
    function testa(i: any, arr: any) {
      console.log(i);
    }

    [1, 2, 3, 4].map(testa);

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
        <h1>learn react</h1>
        <Header />
        <Routing />
      </div>
    );
  }
}

export default App;
