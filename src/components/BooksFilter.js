import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap'
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 0,
    marginRight: 0,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
};

class BooksFilter extends Component {

state = {
    filtered: "",
}

  handleChange = e => {
  
        let { name, value } = e.target
        this.setState({
            [name]: value
   } )
   console.log("BooksFilter ", name, value)
}

  render() {

    console.log('BooksFilter total', this.handleChange)

    const { filtered } = this.props;
    return (
      <form>
        <input
          type="text"
          id="standard-name"
          value={filtered}
          onChange={this.handleChange}
          label="Name"
          name="filtered"
          margin="normal"
        />
      </form>
    );
    }
}


//BooksFilter.propTypes = {
   // classes: PropTypes.object.isRequired,
  //};
  
 
  export default BooksFilter