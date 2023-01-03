import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../utils/Books-Api";

import ShelfSection from "../section/ShelfSection";
import Header from "../UI/Header";
import './Home.css';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resevedBooks = await getAll();
      console.log(resevedBooks);
      setBooks(resevedBooks);
      setIsLoading(false);
    }
    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <Fragment>
      <Header path="/" />
      <main>
        <ShelfSection
          books={books}
          loading={isLoading}
          shelfTitle="Currently Reading"
          shelf="currentlyReading"
        />
        <ShelfSection
          books={books}
          loading={isLoading}
          shelfTitle="Want To Read"
          shelf="wantToRead"
        />
        <ShelfSection
          books={books}
          loading={isLoading}
          shelfTitle="Read"
          shelf="read"
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