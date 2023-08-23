import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/common/Header';


const Container = () => 
    (
         <Header />
    )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Container />);