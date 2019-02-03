import React, { Component } from 'react';
import {Container, Row, Card, NavBar, Col} from 'reactstrap'
import TopNavBar from './components/TopNavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Books from './components/Books'
import BooksFilter from './components/BooksFilter'
import BooksCartList from './components/BooksCartList'
import axios from 'axios'


class App extends Component {

  state = {
    books: [],
    filter: '', 
    isLoading: true,
    error: false
   }

   setFilter = filter => {
    this.setState({
      filter
    })
    console.log("filter", filter)
  }
  
   componentDidMount = async() => {
  try{
    const res = await fetch('http://localhost:8000/books')
    if(!res.ok){
      throw new Error('Bad request to API')
    }
      const books = await res.json()
      setTimeout(()=>{

            this.setState({
              books: books,
              isLoading: false
            })
           }, 5000)
}

  catch(error) { 
    this.setState({error:true})
  } 
}


addBookToCart = id => {
  axios.patch(`http://books/cart/add/${id}`)
.then(res => {
  let otherBooks = this.state.books
 this.setState({
  books: [...otherBooks.filter(book => book.id !== id), res.data]})
 })
}

removeBookFromCart = id => {
  axios.patch(`http://books/cart/remove/${id}`)
.then(res => {
  let otherBooks = this.state.books
  console.log("otherBooks", otherBooks)
 this.setState({

  books: [...otherBooks.filter(book => book.id !== id), res.data]})
 })
}


  render() {
 

    const filteredBooks = this.state.books.filter(book => book.title.includes(this.state.filter.toLowerCase()))
    console.log("filteredBooks", filteredBooks)

    return (
      <div className="App">
      <Container  className="container-fluid">
      <TopNavBar/>
      
        <Header className="App-header"/>
       <BooksFilter setFilter={this.setFilter} />
       <div className="columnContainer">
       <Col sm="6" md={{ size: 6, offset: 0}}>
       
        {this.state.isLoading ? 'Loading....  5 seconds timeout function running' :  <Books books={this.state.books.filter(book => book.inCart == false )} filteredBooks={filteredBooks} setFilter={this.setFilter} addBookToCart={this.addBookToCart} />}
      
      </Col>
      <Col  sm="12" md={{ size: 4, offset: 0}}>
        <Card className="rightCol"> 
        {!this.state.books ? 'No books in cart' :  <BooksCartList books={this.state.books.filter(book => book.inCart == true )} filteredBooks={filteredBooks} setFilter={this.setFilter} removeBookFromCart={this.removeBookFromCart} />}
      </Card> 
      </Col>
        </div>
        <Footer copy='2019'/>
        </Container>
      </div>
    );
  }
}

export default App;
