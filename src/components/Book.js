import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';

class Book extends Component {
    render() {
        //console.log("Book", this.props.book.title)
        return (
            
            <div> 
            <div className="leftCol">
          
          <Card><td><b>{this.props.book.title}</b></td><td><i>{this.props.book.subtitle}</i></td>
           <td>{this.props.book.author}</td> <td>{this.props.book.pages}&nbsp;pages</td></Card>
           <Button onClick={() => this.props.addBookToCart(this.props.book.id)}>Add To Cart {this.props.book.id}</Button>

            
              </div>  
            </div>
        );
    }
}

export default Book;