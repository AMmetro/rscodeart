/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const headerMenu = ['search', 'form', 'about'];

interface Props {}
interface State {
  status: number;
}

class Header extends Component<Props, State> {
  state: State = { status: 0 };

  render() {
    let currentPage = '';

    switch (window.location.pathname) {
      case '/search':
        currentPage = 'search';
        break;
      case '/about':
        currentPage = 'about';
        break;
      case '/form':
        currentPage = 'form';
        break;
      default:
        currentPage = '404';
    }

    return (
      <div
        style={{
          backgroundColor: '#a7c3ec',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          position: 'fixed',
          top: '0px',
          height: '30px',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '40%', display: 'flex' }}>
          <span style={{ marginRight: '10px' }}>Current page:</span>
          <div
            style={{
              backgroundColor: 'yellow',
              display: 'flex',
              height: '70%',
              borderRadius: '20px',
              width: '75px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {currentPage}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {headerMenu.map((el, i) => (
            <Link
              onClick={() => {
                this.setState({ status: 0 });
              }}
              key={i}
              to={`/${el}`}
              style={{
                textDecoration: 'none',
              }}
            >
              {el} {i < headerMenu.length - 1 ? <>&nbsp;|&nbsp;</> : ''}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Header;
