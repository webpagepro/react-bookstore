import React, { Component } from 'react';
import {Card} from 'reactstrap'
import BookCart from './BookCart'

const BooksCartList = props => {
    let cartedBooksList = props.books.map(book => <BookCart key={book.id} book={book} removeBookFromCart={props.removeBookFromCart}  />)
    console.log("Books ", props)

return(
    <div>

   
    {cartedBooksList}
</div>

)
}

export default BooksCartList