import React from 'react';
import {createRoot} from 'react-dom/client';
import ChemContext from './components/context/Context'
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = createRoot(document.getElementById('root'));

root.render(
    <>
    <BrowserRouter>
        <ChemContext>
            <App />
        </ChemContext>
    </BrowserRouter>
    </>
);
