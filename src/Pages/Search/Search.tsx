import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import searchLogo from './searchLogo.svg';
import Img from './webLogo.svg';

type MyProps = any;
//  {
//   message: string;
// };
type MyState = {
  isSearched: boolean;
};

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

class Search extends Component<MyProps, MyState> {
  textInput: any;
  isSearchedStyle: any;
  isNotSearchedStyle: any;

  constructor(props: MyProps) {
    super(props);

    this.textInput = React.createRef();

    this.state = {
      isSearched: false,
    };
  }

  myRef = React.createRef();

  render() {
    this.isSearchedStyle = {
      width: '200vw',
      height: '200vh',
      backgroundImage: `url(${Img})`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };

    this.isNotSearchedStyle = {
      width: '200vw',
      height: '200vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
    };

    const goSearch = () => {
      this.setState(() => {
        return { isSearched: !this.state.isSearched };
      });
    };

    return (
      <div style={this.state.isSearched ? this.isNotSearchedStyle : this.isSearchedStyle}>
        <div
          style={{
            margin: '50px',
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
            ref={this.textInput}
            // value="search input"
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
              marginLeft: '90px',
              outline: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
            }}
            onClick={() => goSearch()}
          />
        </div>

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
                  {/* <div
                    style={{ backgroundImage: `url(${pictureLink})`, width: '100%', height: '80%' }}
                  ></div> */}
                  <div>hello</div>
                </>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;

// class Search extends React.Component {
//   textInput: any;
//   constructor(props:any) {
//     super(props);
//     // создадим реф в поле `textInput` для хранения DOM-элемента
//     this.textInput = React.createRef();
//     this.focusTextInput = this.focusTextInput.bind(this);
//   }

//   focusTextInput() {
//     // Установим фокус на текстовое поле с помощью чистого DOM API
//     // Примечание: обращаемся к "current", чтобы получить DOM-узел
//     this.textInput.current.focus();
//   }

//   render() {
//     // описываем, что мы хотим связать реф <input>
//     // с `textInput` созданным в конструкторе
//     return (
//       <div>
//         <input
//           type="text"
//           ref={this.textInput} />
//         <input
//           type="button"
//           value="Фокус на текстовом поле"
//           onClick={this.focusTextInput}
//         />
//       </div>
//     );
//   }
// }

// export default Search;
