import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from 'Pages/Search/Search';
import Header from 'Pages/Header/Header';
import CommonLayout from 'Pages/CommonLayout/CommonLayout';
import NotFound from 'Pages/NotFound/NotFound';
import AboutUs from 'Pages/AboutUs/AboutUs';
import Form from 'Pages/Form/Form';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Header />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
