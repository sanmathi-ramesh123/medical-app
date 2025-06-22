// src/components/LoginForm.jsx
import React from 'react';
import bgImage from '../images/medapp.png';
import locales from '../locales/translations'; // ✅ Match import alias used in VideoList

const LoginForm = ({ user, setUser, onLogin, language }) => {
  const t = locales[language] || locales.en; // ✅ Same logic as VideoList

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.contact || !user.address) {
      alert(t.fillAllFields);
      return;
    }
    onLogin();
  };

  return (
    <section
      className="vh-100 d-flex flex-column justify-content-center align-items-center px-3"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'brightness(0.9)',
      }}
    >
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-4 text-center">{t.login}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">{t.name}</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              placeholder={t.enterName}
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
  <label htmlFor="contact" className="form-label">{t.contact}</label>
  <input
    id="contact"
    name="contact"
    type="tel"
    className="form-control"
    placeholder={t.enterContact}
    value={user.contact}
    onChange={handleChange}
    pattern="\d{10}" 
    title={t.contactValidation || "Please enter a valid 10-digit phone number"}
    required
  />
</div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">{t.address}</label>
            <textarea
              id="address"
              name="address"
              className="form-control"
              placeholder={t.enterAddress}
              value={user.address}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {t.loginButton || t.login}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
