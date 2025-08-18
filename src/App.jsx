// src/App.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/intro';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md="8" lg="6" className="text-center">
          <LanguageSwitcher />
          <Intro />
        </Col>
      </Row>
    </Container>
  );
}

export default App;