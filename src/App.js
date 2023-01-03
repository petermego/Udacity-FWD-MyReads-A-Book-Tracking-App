import { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './components/pages/Home';
import Search from "./components/pages/Search";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/search" element={<Search />} exact />
      </Routes>
    </Fragment>
  );
}

export default App;
