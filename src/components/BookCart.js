import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';

class BookCart extends Component {
    render() {
        console.log("Book", this.props.book.filteredBook)
        return (
            
            
            <div className="rightCol">
           <Card  className="cart"><b>{this.props.book.title}</b>
                    <i>{this.props.book.subtitle}</i>
                        {this.props.book.author}<br />
                 {/*        {this.props.book.publisher}<br />
                        <a href={`${this.props.book.website}`}>{this.props.book.website}</a>
                        {this.props.book.pages}&nbsp;pages<br />                                */} 
           <Button className="remove" onClick={() => this.props.removeBookFromCart(this.props.book.id)}>Remove {this.props.book.id}</Button></Card>
           
            </div>
        );
    }
}

export default BookCart;