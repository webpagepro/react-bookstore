import React, { Component } from 'react';
import {Card} from 'reactstrap'
import BookCart from './BookCart'

const BooksCartList = props => {
    let cartedBooksList = props.books.map(book => <BookCart key={book.id} book={book} removeBookFromCart={props.removeBookFromCart}  />)
    console.log("Books ", props)

    let total = props.booksInCart.reduce((acc, item) => {
        return acc + Number(item.price)
      }, 0) 
    
    console.log('cartedBooksList total', total)

  let cost = parseFloat(total).toFixed(2)

return(
    <div>
            <div className="cart-title">Cart Items</div>

   
    {cartedBooksList}
   

    Total: ${(cost)} 
</div>

)
}

export default BooksCartList