import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../utils/Books-Api";

import CurrentlyReading from "../sections/CurrentlyReading";
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
      <Header />
      <main>
        <CurrentlyReading books={books} loading={isLoading} />
        <div className="link-container">
          <Link to="/search" className="link">+</Link>
        </div>
      </main>
    </Fragment>
  );
}
 
export default Home;