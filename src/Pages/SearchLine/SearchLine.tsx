import React, { ChangeEvent, createRef, ReactNode } from 'react';
import searchLogo from './searchLogo.svg';
import './SearchLine.css';

type Props = {
  children?: React.ReactNode;
};

type State = {
  isSearched: boolean;
  inputValue: string;
};

class SearchLine extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isSearched: false, inputValue: localStorage.getItem('searchTxt') || '' };
  }

  textInput = createRef<HTMLInputElement>();

  componentDidMount() {
    const storagedInput = localStorage.getItem('searchTxt');
    if (storagedInput) this.setState({ inputValue: storagedInput });
  }

  componentWillUnmount() {
    this.saveDataToLocalStorage();
  }

  handleInputEvent = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
    this.saveDataToLocalStorage();
  };

  saveDataToLocalStorage() {
    if (this.textInput.current !== null) {
      localStorage.setItem('searchTxt', this.textInput.current.value);
    }
  }

  goSearch = () => {
    this.setState(() => {
      if (this.textInput.current !== null) {
        localStorage.setItem('searchTxt', this.textInput.current.value);
      }
      return { ...this.state, isSearched: true };
    });
  };

  render(): ReactNode {
    return (
      <div className="searchLineWrapper">
        <div className="searchLine">
          <img src={searchLogo} alt="search" className="searchLogo" />
          <input
            type="text"
            defaultValue={this.state.inputValue ?? 'default'}
            ref={this.textInput}
            placeholder="enter search value"
            className="searchInput"
          />
          <input type="button" value="GO" className="searchButton" onClick={this.goSearch} />
        </div>
      </div>
    );
  }
}

export default SearchLine;
