import React from 'react';
import './App.css';
import CharecterList from './components/CharecterList';
import HeroList from './components/HeroList';

function App() {
    return (
        <div className="App">
            <h2>SuperSquad</h2>
            <div className="col-md-6 floating">
                <CharecterList />
            </div>
            <div className="col-md-6 floating">
                <HeroList />
            </div>
        </div>
    );
}

export default App;
