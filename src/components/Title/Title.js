import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
     } from 'reactstrap';
  import "./Title.css"

export default class Title extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
 
    return (
      <div className="col-md-12">
        <Navbar light expand="md">
          <NavbarBrand>Clicky Game</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="col-md-5 offset-1">Click on an image to earn points, but don't click on any more than once!</Nav>  
                <Nav className="col-md-2">{this.props.gameState}</Nav>          
              <Nav className="col-md-2">Score: {this.props.score}</Nav>
              <Nav className="col-md-2">Top Score: {this.props.topScore}</Nav>
       
          </Collapse>
        </Navbar>
      </div>
    );
  }
}