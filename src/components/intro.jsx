// src/components/IntroSection.jsx
import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Intro() {
  const { t } = useTranslation();

  return (
    <Card className="text-center shadow">
      <CardBody>
        <CardTitle tag="h2">{t('name')}</CardTitle>
        <h4 className="text-muted mb-4">{t('title')}</h4>
        <CardText>{t('bio')}</CardText>
      </CardBody>
    </Card>
  );
}
export default Intro;
