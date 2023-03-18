import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const headerMenu = ['search', 'cards', 'about'];

type MyProps = {
  // using `interface` is also ok
  // message: string;
};
type MyState = { count: number };

class Header extends Component<MyProps, MyState> {
  state: MyState = { count: 50 };

  componentDidUpdate(prevProps: any) {
    // Популярный пример (не забудьте сравнить пропсы):
    console.log('componentDidUpdate');

    if (this.props === prevProps) {
    }
  }

  render() {
    console.log('==========rerender===');

    const testa = () => {
      this.setState({ count: 2 });
    };

    // console.log(window.location.pathname)
    // console.log(window.location.href)

    return (
      <div
        style={{
          backgroundColor: '#6b9ded',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          position: 'absolute',
          top: '0px',
          height: '30px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'yellow',
            display: 'flex',
            height: '70%',
            borderRadius: '20px',
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {window.location.pathname}
        </div>

        <button onClick={testa}>test</button>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {headerMenu.map((el, i) => (
            <Link
              onClick={() => {
                testa();
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
