import React from "react";
import PropTypes from "prop-types";

export const BookView = ({ book, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={book.image} alt={book.title} />
      </div>
      <div>
        <span>Title: </span>
        <span>{book.title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{book.author}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

// PropTypes validation
BookView.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    // Add other book properties as needed
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
