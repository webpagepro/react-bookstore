import React, { Component } from 'react';


class Footer extends Component {

     render(){
       console.log('Footer ', this )
                return(
<nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#">&copy;{this.props.copy}</a>
</nav>
                )

     }     

}

export default Footer