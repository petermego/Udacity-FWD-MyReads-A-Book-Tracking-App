import { Link } from "react-router-dom";
import { search } from "../../utils/Books-Api";

import './Header.css';

const Header = (props) => {

  const searchInputHandler = async(e) => {
    let books
    try {
      if (e.target.value.trim()) {
        const retrievedBooks = await search(e.target.value);
        if (retrievedBooks.error)return;
        if (e.target.value === '') {
          return await props.bookState(null);
        }
        await props.bookState(retrievedBooks);
        books = retrievedBooks;
        // props.searchingStatus();
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      console.log(books);
    }
  };

  if (props.path === "/search") {
    return (
      <header>
        <div className="link-container__header">
          <Link className="home-link__header" to="/">&#8592;</Link>
        </div>
        <input
          type="text"
          placeholder="Enter Book Name..."
          onChange={searchInputHandler}
        />
      </header>
    );
  }

  return (
    <header>
      <span>MyReads</span>
    </header>
  );
};
 
export default Header;