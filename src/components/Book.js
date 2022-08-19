import React from "react";
import BookList from "./Booklist";
import Form from "./Form"

const Book= (props) => {
   return (
     <ul className="allBooks">
       {props.data.map((item) => {
         return (
           <BookList key={item.id} title={item.title} author={item.author} />
         );
       })}
       <Form />
       </ul>
   );
}

export default Book;