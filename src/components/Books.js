import React, { Component } from 'react';
import { Card } from 'reactstrap'
import Book from './Book'

class Books extends Component {
    state = {
        filtered: ""
    }
    
handleChange = e => {
  
    let { name, value } = e.target
    this.setState({
        [name]: value
} )
}

//filteredByAuthor = this.state.books.filter(book => book.author.includes(this.state.filter.toLowerCase()))
//filteredByTitle = this.state.books.filter(book => book.title.includes(this.state.filter.toLowerCase()))

render(){
 //const 
    //const 
    let booksList = this.props.books
    .filter(book => book.title.includes(this.state.filtered))
    .map(book => <Book key={book.id} book={book}
        addBookToCart={this.props.addBookToCart}
        books={this.props.books}
    />)

    return (
        <div>

            <input
                type="text"
                id="standard-name"
                value={this.state.filtered}
                onChange={this.handleChange}
                label="Name"
                name="filtered"
                margin="normal"
            />
            {booksList}
        </div>

    )
}
}
export default Books