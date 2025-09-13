// src/App.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/intro';
import LanguageSwitcher from './components/LanguageSwitcher';
import ResumeSection from './components/ResumeSection';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md="8" lg="6" className="text-center">
            <LanguageSwitcher />
            <Intro />
            <Projects />
          </Col>
        </Row>
      </Container>

      {/* Seção de currículo */}
      <ResumeSection />
    </>
  );
}

export default App;
