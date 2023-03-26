import React, { ChangeEvent, createRef, ReactNode } from 'react';
import SearchLine from 'Pages/SearchLine/SearchLine';
import Cards from 'Pages/Cards/Cards';
import './Search.css';

type Props = {
  children?: React.ReactNode;
};

type State = {
  isSearched: boolean;
  inputValue: string;
};

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isSearched: false, inputValue: localStorage.getItem('searchTxt') || '' };
  }

  render(): ReactNode {
    return (
      <div className="searchWrapper">
        search page {/* for test */}
        <SearchLine />
        <Cards />
      </div>
    );
  }
}

export default Search;
