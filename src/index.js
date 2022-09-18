import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontPage from './pages/frontpage'
import MoviesPage from './pages/movies250'
import SeriesPage from './pages/series250'
import InfoPage from './pages/infoPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='movies' element={<MoviesPage/>}></Route>
      <Route path='series' element={<SeriesPage/>}></Route>
      <Route path='movies/:id' element={<InfoPage/>}></Route>
      <Route path='series/:id' element={<InfoPage/>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
