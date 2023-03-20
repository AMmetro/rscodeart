import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'gray',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>wrong url (error 404)</h1>
      </div>
    );
  }
}

export default NotFound;
