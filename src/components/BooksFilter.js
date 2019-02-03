import React from 'react';
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

class BooksFilter extends React.Component {
  handleChange = e => {
    this.props.setFilter(e.target.value)
  console.log("handleChange", this.setFilter)
  }
  
  render() {


    const { filter } = this.props;
    return (
      <form>
        <input
          type="text"
          id="standard-name"
          value={filter}
          onChange={this.handleChange}
          label="Name"
          name="filter"
          margin="normal"
        />
      </form>
    );
  }
}


BooksFilter.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
 
  export default BooksFilter