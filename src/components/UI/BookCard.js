import { useEffect, useRef } from "react";

import { update } from "../../utils/Books-Api";
import Card from "./Card";

const BookCard = (props) => {
  const selectMenuRef = useRef();
  const currentlyReadingRef = useRef();
  const wantToReadRef = useRef();
  const readRef = useRef();
  const noneRef = useRef();

  const setBookStatusHandler = (id) => {
    update(id, selectMenuRef.current.value);
    props.bookStatus((state) => !state);
  };

  const bookContainer = (
    <Card>
      <div>
        <img src={props.thumbnail} alt={props.alt} />
        <select ref={selectMenuRef} onChange={() => setBookStatusHandler(props.id)} id="books-categories">
          <option disabled={true}>Move to...</option>
          <option ref={currentlyReadingRef} value="currentlyReading">Currently Reading</option>
          <option ref={wantToReadRef} value="wantToRead">Want To Read</option>
          <option ref={readRef} value="read">Read</option>
          <option ref={noneRef} value="none">None</option>
        </select>
      </div>
      <p>{props.bookTitle}</p>
      {props.authors && props.authors.length > 1 && (
        <span>{props.authors.join(", ")}</span>
      )}
    </Card>
  );

  useEffect(() => {
    if (props.path === "/") {
      if (props.shelf === "currentlyReading") {
        currentlyReadingRef.current.setAttribute("selected", "");
      }
      if (props.shelf === "wantToRead") {
        wantToReadRef.current.setAttribute("selected", "");
      }
      if (props.shelf === "read") {
        readRef.current.setAttribute("selected", "");
      }
    } 
    if (props.path === "/search") {
      noneRef.current.setAttribute("selected", "");
    }
  }, [props.book, props.shelf, props.path]);

  if (props.book) return bookContainer;
}
 
export default BookCard;