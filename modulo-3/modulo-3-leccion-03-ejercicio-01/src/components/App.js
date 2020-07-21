import React from 'react';
import './App.css';
import MediaCard from './MediaCard/MediaCard.js';

function App() {
  return (
    <div className="App">
      <MediaCard
        userName="Alba"
        date="2 de abril de 2020"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros ex, finibus vel congue id, facilisis eu dui. Etiam at augue ac purus imperdiet convallis. Donec et aliquam ipsum. Aliquam erat volutpat."
        isHeartFilled
      />
      <MediaCard
        userName="Sandra"
        date="21 de abril de 2020"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros ex, finibus vel congue id, facilisis eu dui. Etiam at augue ac purus imperdiet convallis. Donec et aliquam ipsum. Aliquam erat volutpat."
      />
    </div>
  );
}

export default App;
