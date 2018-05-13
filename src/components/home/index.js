import './style.css';

import React, { Component } from 'react';

import { Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Container>
          <h2 className="text-center">Home</h2>
          <div>Home page content</div>
        </Container>
      </div>
    );
  }
}

export default Home;
