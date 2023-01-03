import { useRef } from 'react';

import './Header.css';

const Header = (props) => {
  const searchInputRef = useRef();

  const searchInputHandler = () => {
    console.log(searchInputRef.current.value);
  };

  if (props.path === "/search") {
    return (
      <header>
        <input type="text" onChange={searchInputHandler} ref={searchInputRef} />
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