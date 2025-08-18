// src/components/LanguageSwitcher.jsx
import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <ButtonGroup className="mb-4">
      <Button onClick={() => i18n.changeLanguage('pt')}>PT-BR</Button>
      <Button onClick={() => i18n.changeLanguage('en')}>EN</Button>
    </ButtonGroup>
  );
}

export default LanguageSwitcher;
