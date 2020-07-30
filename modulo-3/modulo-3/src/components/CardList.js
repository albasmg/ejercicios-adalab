import React, { useState } from 'react';
import Card from './Card';

const initalCards = [
  {
    id: 1,
    name: 'Alba',
  },
  {
    id: 2,
    name: 'Alvaro',
  },
  {
    id: 3,
    name: 'Elena',
  },
];

const CardList = () => {
  const [cards, setCards] = useState(initalCards);

  const handleDeleteCard = (cardId) => {
    const newCards = cards.filter((card) => card.id !== cardId);
    setCards(newCards);
  };

  const handleFavoriteCard = (cardId) => {
    const newCards = cards.map((card) => ({
      ...card,
      isFavorite: card.id === cardId ? !card.isFavorite : card.isFavorite,
    }));
    setCards(newCards);
  };

  return (
    <>
      <h1>Listado de Cards</h1>
      <div>
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            id={card.id}
            isFavorite={card.isFavorite}
            onDeleteCard={handleDeleteCard}
            onFavoriteCard={handleFavoriteCard}
          />
        ))}
      </div>
    </>
  );
};

export default CardList;
