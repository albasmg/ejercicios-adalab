import React from 'react';
import HalfPage from './HalfPage';
import '../stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <HalfPage>
        <h1>Hola</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
          consequat ex, et dictum nibh. Nullam non convallis ipsum. Aliquam
          mauris tellus, ultrices cursus sem vestibulum, bibendum sodales augue.
          Quisque pharetra placerat nulla, et feugiat purus suscipit in.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Donec efficitur a ligula vel placerat. Aenean
          ut volutpat justo.
        </p>
      </HalfPage>
      <HalfPage>
        <h1>Adios</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
          consequat ex, et dictum nibh. Nullam non convallis ipsum. Aliquam
          mauris tellus, ultrices cursus sem vestibulum, bibendum sodales augue.
          Quisque pharetra placerat nulla, et feugiat purus suscipit in.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Donec efficitur a ligula vel placerat. Aenean
          ut volutpat justo.
        </p>
      </HalfPage>
    </div>
  );
}

export default App;
