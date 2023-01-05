import { Fragment, useState } from "react";

import "./Search.css";
import BookCard from "../UI/BookCard";
import Header from "../UI/Header";

const Search = () => {
  // const [searchingStatus, setSearchingStatus] = useState(false);
  const [books, setBooks] = useState([]);

  const searchingStatusHandler = () => {
    // setSearchingStatus((state) => !state);
  }

  const retreivingBooksHandler = (resBooks) => setBooks(resBooks);

  if (books === null) {
    return (
      <Fragment>
        <Header
          path="/search"
          bookState={retreivingBooksHandler}
          searchingStatus={searchingStatusHandler}
        />
        <main></main>
      </Fragment>
    );
  }
  
  return (
    <Fragment>
      <Header
        path="/search"
        bookState={retreivingBooksHandler}
        searchingStatus={searchingStatusHandler}
      />
      <main className="search">
        {Array.isArray(books) && books.map(book => (
          <BookCard
            book={book}
            key={book.id}
            id={book.id}
            thumbnail={!book.hasOwnProperty('imageLinks') ? '' : book.imageLinks.thumbnail}
            alt={book.title}
            bookTitle={book.title}
            authors={book.authors}
            path="/search"
          />
        ))}
      </main>
    </Fragment>
  );
};
 
export default Search;