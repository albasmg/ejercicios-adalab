import React from 'react';
import Item from './Item';
import '../stylesheets/App.css';

const arrayOfItems = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
];

function App() {
  return (
    <div className="App">
      {arrayOfItems
        .filter((item) => item.price < 10)
        .map((item) => (
          <Item
            key={item.name}
            quantity={item.quantity}
            name={item.name}
            description={item.description}
            category={item.category}
            price={item.price}
          />
        ))}
    </div>
  );
}

export default App;
