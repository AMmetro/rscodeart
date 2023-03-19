/* eslint-disable @typescript-eslint/ban-types */
import React, { Component, createRef } from 'react';
import searchLogo from './searchLogo.svg';
import Img from './webLogo.svg';

const pictureLink =
  'https://mobimg.b-cdn.net/v3/fetch/7e/7e84d5b2dbce7be2c1449f147855ab35.jpeg?w=1470&r=0.5625';

const cards = [
  { id: 1, name: 'name1', value: 'value1' },
  { id: 2, name: 'name2', value: 'value2' },
  { id: 3, name: 'name3', value: 'value3' },
  { id: 5, name: 'name4', value: 'value4' },
  { id: 6, name: 'name5', value: 'value4' },
  { id: 7, name: 'name6', value: 'value4' },
  { id: 8, name: 'name7', value: 'value4' },
  { id: 9, name: 'name8', value: 'value4' },
  { id: 10, name: 'name9', value: 'value4' },
  { id: 11, name: 'name10', value: 'value4' },
  { id: 12, name: 'name11', value: 'value4' },
];

type Props = {};

type FlexDirection =
  | 'column'
  | 'inherit'
  | '-moz-initial'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'
  | undefined;

type State = {
  isSearched: boolean;
  inputValue: string | null;
};

class Search extends Component<Props, State> {
  isNotSearchedStyle!: {
    width: string;
    height: string;
    backgroundImage: string;
    display: string;
    flexDirection: FlexDirection | undefined;
    justifyContent: string;
    alignItems: string;
  };
  isSearchedStyle!: {
    width: string;
    height: string;
    display: string;
    flexDirection: FlexDirection | undefined;
    justifyContent: string;
    alignItems: string;
  };

  textInput = createRef<HTMLInputElement>();
  state = {
    isSearched: false,
    inputValue: 'enter search value',
  };

  UNSAFE_componentWillMount() {
    this.restoreState();
  }

  componentWillUnmount() {
    if (this.textInput.current) localStorage.setItem('inputValue', this.textInput.current.value);
  }

  goSearch = () => {
    this.setState(() => {
      return { isSearched: true };
    });
  };

  restoreState = () => {
    let newState;
    const searchedValue = localStorage.getItem('inputValue');
    if (searchedValue != null) {
      newState = { isSearched: this.state.isSearched, inputValue: searchedValue };
      this.setState(newState);
    }
  };

  render() {
    this.isNotSearchedStyle = {
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${Img})`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
    };
    this.isSearchedStyle = {
      width: '100vw',
      height: '190vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
    };

    return (
      <div style={this.state.isSearched ? this.isSearchedStyle : this.isNotSearchedStyle}>
        <span>component is rendered</span>
        <div
          style={{
            margin: '30px 50px 0px 50px',
            width: '350px',
            height: '30px',
            border: '2px solid #6b9ded',
            backgroundColor: 'white',
            borderRadius: '20px',
            display: 'flex',
          }}
        >
          <img src={searchLogo} alt="search" style={{ marginTop: '3px', marginLeft: '20px' }} />
          <input
            type="text"
            defaultValue={this.state.inputValue ?? 'default'}
            ref={this.textInput}
            style={{
              border: '0 solid white',
              marginTop: '2px',
              marginLeft: '20px',
              outline: 'none',
            }}
          />
          <input
            type="button"
            value="GO"
            style={{
              border: '0 solid white',
              backgroundColor: '#6b9ded',
              marginTop: '0px',
              marginLeft: '85px',
              outline: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
            }}
            onClick={this.goSearch}
          />
        </div>
        {this.state.isSearched ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '50%' }}>
            {cards.map((card, i) => {
              return (
                <div
                  key={card.id}
                  style={{
                    margin: '10px',
                    backgroundColor: 'gray',
                    width: '250px',
                    height: '250px',
                    border: '1px solid blue',
                    borderRadius: '10%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                >
                  <>
                    <div>card number {i + 1}</div>
                    <div>card name {card.name}</div>
                    <img src={pictureLink} style={{ width: '100%' }} />
                    <div>hello</div>
                  </>
                </div>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Search;
