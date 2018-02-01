import React from 'react';
import { render } from 'react-dom';
import './css/reset.css';
import big from './img/15.jpg';

const App = () => {
  return (
    <div className='my-app'>
      <h1> Hello World</h1>
      <img src={big} alt='big' />
    </div>
  );
};

render(<App />, document.getElementById('app'));
