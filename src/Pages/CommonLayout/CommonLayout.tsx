import Header from 'Pages/Header/Header';
import React, { Component } from 'react';

import { Outlet } from 'react-router-dom';

class CommonLayout extends Component {
  render() {
    return (
      <>
        <Header />

        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

export default CommonLayout;
