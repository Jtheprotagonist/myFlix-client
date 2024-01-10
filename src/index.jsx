import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.scss';

const MyFlixApplication = () => {
  return (
    <div className='my-flix'>
      <div>Good morning</div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyFlixApplication />);
