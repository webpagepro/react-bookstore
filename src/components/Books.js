import React, { Component } from 'react';
import {Card} from 'reactstrap'
import Book from './Book'
const Books = props => {
    let booksList = props.books.map(book => <Book key={book.id} book={book} />)
    console.log("Books ", props)

return(
    <div>

   
    {booksList}
</div>

)
}

export default Books