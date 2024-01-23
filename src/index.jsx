import React from 'react';
import { createRoot } from 'react-dom/client';
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


root.render(<MyFlixApplication />);
