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
    })
console.log("BooksFilter ", name, value)
}

render(){

    let booksList = this.props.books
    .filter(book => book.title.includes(this.state.filtered))
    .map(book => <Book key={book.id} book={book}
        addBookToCart={this.props.addBookToCart}
        books={this.props.books}
/>)

    return (
        <div>
<p>
            <input
                type="text"
                id="standard-name"
                value={this.state.filtered}
                onChange={this.handleChange}
                label="Name"
                name="filtered"
                margin="normal"
                placeholder="Search books using books title capitalization eg: Book Title"
            />
            {booksList}
     </p>  
</div>
    )
}
}
export default Books