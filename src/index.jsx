import { createRoot } from 'react-dom/client';
<<<<<<< Updated upstream
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
=======
import "./index.scss";
import MainView from "./components/main-view/main-view";


const MyFlixApplication = () => {
    return (
        <div className='my-flix'>
            {/* Use the MainView component here */}
            <MainView />
            <div>Good morning</div>
        </div>
    );
};

const container = document.querySelector("#root");
const root = createRoot(container);

>>>>>>> Stashed changes
root.render(<MyFlixApplication />);
