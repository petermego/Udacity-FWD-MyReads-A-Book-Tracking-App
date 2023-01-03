import { useEffect, useState } from 'react';
import BookCard from '../UI/BookCard';

import './Section.css';

const ShelfSection = (props) => {
  const [shelfBooks, setShelfBooks] = useState([]);

  useEffect(() => {
    const currentlyReadingFilter = async () => {
      const books = await props.books;
      const filteredBooks = await books.filter(book => book.shelf === props.shelf);
      setShelfBooks(filteredBooks);
    };

    try {
      currentlyReadingFilter();
    } catch (error) {
      throw new Error(error);
    }
  }, [props.books, props.shelf]);

  return (
    <section>
      <h2>{props.shelfTitle}</h2>
      <hr />
      <div className="books-container">
        {props.loading && <p className="loading">Loading...</p>}
        {!props.loading &&
          shelfBooks.map((book) => (
            <BookCard
             key={book.id}
             thumbnail={book.imageLinks.thumbnail}
             alt={book.title}
             bookTitle={book.title}
             authors={book.authors}
            />
          ))}
      </div>
    </section>
  );
}
 
export default ShelfSection;