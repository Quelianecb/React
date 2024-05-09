import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes';
import GlobalStyle from './style/globalStyle';

ReactDom.render
( <>
  <Routes/>
  <GlobalStyle/>
  </>,
  document.getElementById('root'));

 

