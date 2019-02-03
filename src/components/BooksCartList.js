import React, { Component } from 'react';
import {Card} from 'reactstrap'
import BookCart from './Book'

const Books = props => {
    let cartedBooksList = props.books.map(cbook => <BookCart key={cbook.id} book={cbook} />)
    console.log("Books ", props)

return(
    <div>

   
    {cartedBooksList}
</div>

)
}

export default Books