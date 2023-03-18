import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from '../Search/Search';

type MyProps = {
  // using `interface` is also ok
  // message: string;
};
type MyState = {
  count: number;
};

class Routing extends Component<MyProps, MyState> {
  //   state: MyState = {
  //     count: 50,
  //   };

  render() {
    return (
      <Routes>
        <Route path="/" element={<div>Main page</div>} />
        <Route path="/search" element={<Search /* message={"myprops"} */ />} />
        <Route path="/cards" element={<div>Cards location: {window.location.pathname}</div>} />
        <Route path="/about" element={<div>About location: {window.location.pathname}</div>} />
        <Route path="*" element={<h1>NOT NOTHING</h1>} />
      </Routes>
    );
  }
}

export default Routing;
