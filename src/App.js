import React from 'react';
import './App.css';
import Welcome from './Welcome';
import { IntlProvider } from 'react-intl';
import en from './translation/en';
import fr from './translation/fr';

const LANGUAGES = {
  ENGLISH: 'en',
  FRENCH: 'fr'
};

const INTL_MESSAGES = {
  [LANGUAGES.ENGLISH]: en,
  [LANGUAGES.FRENCH]: fr
}

function App() {
  return (
    <IntlProvider
      locale={LANGUAGES.FRENCH}
      messages={INTL_MESSAGES[LANGUAGES.FRENCH]}
    >
      <div className="App">
        <Welcome />
      </div>
    </IntlProvider>
  );
}

export default App;
