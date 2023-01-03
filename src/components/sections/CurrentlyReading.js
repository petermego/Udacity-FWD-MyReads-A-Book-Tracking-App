import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import './Section.css';

const CurrentlyReading = (props) => {
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);

  useEffect(() => {
    const currentlyReadingFilter = async () => {
      const books = await props.books;
      const filteredBooks = await books.filter((book) => book.shelf === "currentlyReading");
      setCurrentlyReadingBooks(filteredBooks);
    };

    try {
      currentlyReadingFilter();
    } catch (error) {
      throw new Error(error);
    }
  }, [props.books]);

  return (
    <section>
      <h2>Currently Reading</h2>
      <hr />
      <div className="books-container">
        {props.loading && <p className="loading">Loading...</p>}
        {!props.loading &&
          currentlyReadingBooks.map((book) => (
            <Card key={book.id}>
              <img src={book.imageLinks.thumbnail} alt={book.title} />
              <form>
                <select name="book-status">
                  <option value=""></option>
                </select>
              </form>
              <p>{book.title}</p>
              <span>{book.authors.join(", ")}</span>
            </Card>
          ))}
      </div>
    </section>
  );
}
 
export default CurrentlyReading;