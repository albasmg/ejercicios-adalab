import React, { useState } from 'react';
import '../stylesheets/App.css';
import List from './List';
import clubsFromApi from '../clubs/clubs.json';

function App() {
  const [clubs, setClubs] = useState(clubsFromApi);
  return (
    <div className="App">
      <List clubs={clubs} />
    </div>
  );
}

export default App;
