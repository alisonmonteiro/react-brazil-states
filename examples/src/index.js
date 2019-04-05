import React from 'react';
import { render } from 'react-dom';
import SelectBrazilStates, { states } from '../../src';

const App = () => (
  <div className="states">
    <SelectBrazilStates />
    {states.map((item, key) => (
      <p key={key}>- {item.name} ({item.abbreviation})</p>
    ))}
  </div>
);

render(<App />, document.getElementById("root"));