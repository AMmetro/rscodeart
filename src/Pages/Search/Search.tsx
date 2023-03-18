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

const cards = [
  { id: 1, name: 'ВЭБ РФ', value: 'value1' },
  { id: 2, name: 'ВЭБ РФ', value: 'value2' },
  { id: 3, name: 'ВЭБ РФ', value: 'value3' },
  { id: 5, name: 'ВЭБ РФ', value: 'value4' },
  { id: 6, name: 'ВЭБ РФ', value: 'value4' },
  { id: 7, name: 'ВЭБ РФ', value: 'value4' },
  { id: 8, name: 'ВЭБ РФ', value: 'value4' },
  { id: 9, name: 'ВЭБ РФ', value: 'value4' },
  { id: 10, name: 'ВЭБ РФ', value: 'value4' },
  { id: 11, name: 'ВЭБ РФ', value: 'value4' },
  { id: 12, name: 'ВЭБ РФ', value: 'value4' },
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
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                style={{
                  margin: '10px',
                  width: '150px',
                  height: '50px',
                  border: '1px solid blue',
                  borderRadius: '10%',
                }}
              >
                {card.name}
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
