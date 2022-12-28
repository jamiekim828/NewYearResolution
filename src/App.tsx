import React from 'react';

import './App.css';
import Form from './components/Form';
import ResolutionList from './components/ResolutionList';
import Favorite from './components/Favorite';

function App() {
  return (
    <div className='App'>
      <h1>New Year's Resolution</h1>
      <Form />
      <ResolutionList />
      <Favorite />
    </div>
  );
}

export default App;
