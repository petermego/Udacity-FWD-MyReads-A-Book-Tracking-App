import { useEffect, useState } from 'react';
import BookCard from '../UI/BookCard';

import './Section.css';

const ShelfSection = (props) => {
  const [shelfBooks, setShelfBooks] = useState([]);
  const {status, bookStatus} = props;

  useEffect(() => {
    const statusFilter = async () => {
      const books = await props.books;
      const filteredBooks = await books.filter(book => book.shelf === props.shelf);
      await setShelfBooks(filteredBooks);
      bookStatus(true);
      await console.log(filteredBooks);
    };

    try {
      statusFilter();
    } catch (error) {
      throw new Error(error);
    }
  }, [props.books, props.shelf, status, bookStatus]);

  if (!shelfBooks)return;

    return (
      <section>
        <h2>{props.shelfTitle}</h2>
        <hr />
        <div className="books-container">
          {props.loading && <p className="loading">Loading...</p>}
          {!props.loading &&
            shelfBooks.map(book => (
              <BookCard
                key={book.id}
                id={book.id}
                thumbnail={book.imageLinks.thumbnail}
                alt={book.title}
                bookTitle={book.title}
                authors={book.authors}
                book={book}
                bookStatus={props.bookStatus}
                shelf={props.shelf}
                path="/"
              />
            ))}
        </div>
      </section>
    );
}
 
export default ShelfSection;