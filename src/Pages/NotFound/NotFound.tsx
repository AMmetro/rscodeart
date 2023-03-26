import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#bcd4f7',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <h1>wrong url (error 404)</h1>
        <div style={{ width: '50%', border: '1px solid red' }}></div>
      </div>
    );
  }
}

export default NotFound;
