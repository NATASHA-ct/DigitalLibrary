const BookList = (props) => {
   return (
     <li>
       <h3>{props.title}</h3>
       <p>{props.author}</p>
     </li>
   );
    
}

export default BookList;