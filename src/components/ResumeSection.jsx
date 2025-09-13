// src/components/ResumeSection.jsx
import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Badge } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function ResumeSection() {
  const { t } = useTranslation();

  const experiences = t('resume.experience', { returnObjects: true });
  const education = t('resume.education', { returnObjects: true });

  return (
    <Container className="py-5">
      <Row>
        <Col md="6">
          <h3 className="mb-3">📁 {t('resume.professional')}</h3>
          {experiences.map((exp, index) => (
            <Card key={index} className="mb-3">
              <CardBody>
                <div className="d-flex justify-content-between">
                  <CardTitle tag="h5" className="mb-1">{exp.role}</CardTitle>
                  <Badge bg="primary">{exp.period}</Badge>
                </div>
                <h6 className="text-primary">{exp.company}</h6>
                <CardText className="mb-2">{exp.description}</CardText>
                {exp.bullets && (
                  <ul className="mb-0">
                    {exp.bullets.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </CardBody>
            </Card>
          ))}
        </Col>
        <Col md="6">
          <h3 className="mb-3">🎓 {t('resume.academic')}</h3>
          {education.map((edu, index) => (
            <Card key={index} className="mb-3">
              <CardBody>
                <div className="d-flex justify-content-between">
                  <CardTitle tag="h5" className="mb-1">{edu.degree}</CardTitle>
                  <Badge bg="primary">{edu.period}</Badge>
                </div>
                <h6 className="text-primary">{edu.institution}</h6>
                <CardText>{edu.description}</CardText>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeSection;
