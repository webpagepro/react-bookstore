import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';

class Book extends Component {
    render() {
        console.log("Book", this.props.book.title)
        return (
            
            <div> 
            <div className="rightCol">
            
           <tr><Card><td><b>{this.props.cbook.title}</b></td><td><i>{this.props.cbook.subtitle}</i></td>
           <td>{this.props.cbook.author}</td>
           <Button onClick={() => this.props.removeBookFromCart(this.props.cbook.id)}>Remove From Cart {this.props.cbook.id}</Button></Card></tr>
           
              </div>  
            </div>
        );
    }
}

export default Book;