import React from 'react';
import Router from './wrappers/router';
import Theme from './wrappers';
import Expanded from './wrappers/expanded';

function App() {
  return (
    <Theme>
      <Expanded>
        <Router />
      </Expanded>
    </Theme>
  );
}

export default App;
