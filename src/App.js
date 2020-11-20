import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Quizzme from './components/Quizzme';
import MiriamExnerDesign from './components/MiriamExnerDesign';
import MiddleButtons from './components/MiddleButtons';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route path="*">
          <MiddleButtons />
          <Quizzme />
          <MiriamExnerDesign />
        </Route>
      </Router>
    </>
  );
}

export default App;
