import React, { Component } from 'react';
import { Card } from 'reactstrap'
import BookCart from './BookCart'

const BooksCartList = props => {
    let cartedBooksList = props.booksInCart.map(book => <BookCart key={book.id} book={book} removeBookFromCart={props.removeBookFromCart} booksInCart={props.booksInCart} />)
    console.log("Books booksInCart", props.booksInCart)

    let total = props.booksInCart.reduce((acc, item) => {
        return acc + Number(item.price)
    }, 0)

    console.log('booksInCart total', props.booksInCart)

    let cost = parseFloat(total).toFixed(2)

    return (
        <div>
            <div className="cart-title">Cart Items</div>

            {cartedBooksList}

            <div className="total">Total: ${(cost)}</div>
        </div>

    )
}

export default BooksCartList