import React from 'react';
import './App.css';
import GlobalStyles from './GlobalStyles';
import Quizzme from './components/Quizzme';
import MiriamExnerDesign from './components/MiriamExnerDesign';
import MiddleButtons from './components/MiddleButtons';

function App() {
  return (
    <>
      <GlobalStyles />
      <MiddleButtons />
      <Quizzme />
      <MiriamExnerDesign />
    </>
  );
}

export default App;
