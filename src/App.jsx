// src/App.jsx
import React, { useState } from 'react';
import Welcome from './components/Welcome.jsx';
import LoginForm from './components/LoginForm.jsx';
import LanguageSelection from './components/LanguageSelection.jsx';
import VideoList from './components/VideoList.jsx';
import translations from './locales/translations.js';

const App = () => {
  const [step, setStep] = useState('welcome'); // Start with Welcome
  const [user, setUser] = useState({ name: '', contact: '', address: '' });
  const [language, setLanguage] = useState('en'); // Default to English

  const t = translations[language] || translations.en;

  return (
    <div>
      {step === 'welcome' && (
        <Welcome onNext={() => setStep('login')} t={t} />
      )}

      {step === 'login' && (
        <LoginForm
          user={user}
          setUser={setUser}
          onLogin={() => setStep('language')} // After login, go to language selection
          t={t}
        />
      )}

      {step === 'language' && (
        <LanguageSelection
          onSelectLanguage={(lang) => {
            setLanguage(lang);
            setStep('videos');
          }}
        />
      )}

      {step === 'videos' && (
        <VideoList
          language={language}
          t={t}
          onChangeLanguage={() => setStep('language')}
          onLogout={() => setStep('welcome')}
        />
      )}
    </div>
  );
};

export default App;
