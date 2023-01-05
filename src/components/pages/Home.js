import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../utils/Books-Api";

import ShelfSection from "../section/ShelfSection";
import Header from "../UI/Header";
import './Home.css';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const resevedBooks = await getAll();
      setBooks(resevedBooks);
      setIsLoading(false);
    }
    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  }, [bookStatus]);

  return (
    <Fragment>
      <Header path="/" />
      <main className="home">
        <ShelfSection
          books={books}
          loading={isLoading}
          shelfTitle="Currently Reading"
          shelf="currentlyReading"
          bookStatus={setBookStatus}
          status={bookStatus}
        />
        <ShelfSection
          books={books}
          loading={isLoading}
          shelfTitle="Want To Read"
          shelf="wantToRead"
          bookStatus={setBookStatus}
          status={bookStatus}
        />
        <ShelfSection
          books={books}
          loading={isLoading}
          shelfTitle="Read"
          shelf="read"
          bookStatus={setBookStatus}
          status={bookStatus}
        />
        <div className="link-container">
          <Link to="/search" className="link">
            +
          </Link>
        </div>
      </main>
    </Fragment>
  );
}
 
export default Home;