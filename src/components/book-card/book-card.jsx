import React from "react";
import PropTypes from "prop-types";

export const BookCard = ({ book, onBookClick }) => {
  return (
    <div
      onClick={() => {
        onBookClick(book);
      }}
    >
      {book.title}
    </div>
  );
};

// PropTypes validation
BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // Add other book properties as needed
  }).isRequired,
  onBookClick: PropTypes.func.isRequired,
};
