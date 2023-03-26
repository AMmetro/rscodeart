import React, { Component } from 'react';
import './Cards.css';

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

type State = {
  isSearched: boolean;
  inputValue: string;
};

type Props = {
  children?: React.ReactNode;
};

class Cards extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSearched: true,
      inputValue: localStorage.getItem('search') || '',
    };
  }

  render(): React.ReactNode {
    return (
      <div className="cardsWrapper">
        {this.state.isSearched ? (
          <div className="cardsContainer">
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
                    <div>card {card.name}</div>
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

export default Cards;
