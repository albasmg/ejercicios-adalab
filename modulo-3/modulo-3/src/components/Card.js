import React from 'react';

const Card = ({ name, id, onDeleteCard, onFavoriteCard, isFavorite }) => {
  return (
    <>
      <h5>{name}</h5>
      <button onClick={() => onDeleteCard(id)}>Delete</button>
      <button onClick={() => onFavoriteCard(id)}>Favorito</button>
      {isFavorite && <p>¡Favorito!</p>}
    </>
  );
};

export default Card;
