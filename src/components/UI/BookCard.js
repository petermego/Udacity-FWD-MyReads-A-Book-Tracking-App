import Card from "./Card";

const BookCard = (props) => {
  return (
    <Card key={props.key}>
      <img src={props.thumbnail} alt={props.alt} />
      <p>{props.bookTitle}</p>
      <span>{props.authors.join(", ")}</span>
    </Card>
  );
}
 
export default BookCard;