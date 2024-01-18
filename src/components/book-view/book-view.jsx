// Import React and PropTypes
import React from "react";
import PropTypes from "prop-types";

// Your BookView component
const BookView = ({ book, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={book.image} alt={`Cover for ${book.title}`} />
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

// Add PropTypes for the props used in BookView
BookView.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    // Add more PropTypes for other properties as needed
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default BookView;
