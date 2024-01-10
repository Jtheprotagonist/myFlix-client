import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const MyFlixApplication = () => {
  return (
    <div className='my-flix'>
      <div>Good morning</div>
    </div>
  );
};

const container = document.getElementById('root');
ReactDOM.render(<MyFlixApplication />, container);
