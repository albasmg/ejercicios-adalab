import React from 'react';
import './MediaCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class MediaCard extends React.Component {
  render() {
    return (
      <div className="card">
        <h1 className="name">{this.props.userName}</h1>
        <p className="date">{this.props.date}</p>
        <p className="text">{this.props.text}</p>
        {this.props.isHeartFilled ? (
          <FontAwesomeIcon icon={faHeart} />
        ) : (
          <FontAwesomeIcon icon={faCoffee} />
        )}
      </div>
    );
  }
}

export default MediaCard;
