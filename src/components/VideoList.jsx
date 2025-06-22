// src/components/VideoList.jsx
import React, { useState } from 'react';
import bgImage from '../images/medapp.png';
import locales from '../locales/translations';

const videosData = {
  en: [
    {
      id: 'wva1rclob1g',
      title: 'Health Tips in English',
      pdf: 'https://odphp.health.gov/sites/default/files/2021-08/DGA-FactSheet-2021-03-26-compressed.pdf',
    },
  ],
  hi: [
    {
      id: 'sJUI_FnFoLg',
      title: 'स्वास्थ्य सुझाव हिंदी में',
      pdf: 'https://yoga.ayush.gov.in/api/uploads/assets/cyp/Common%20Yoga%20Protocol%20Book-Hindi.pdf',
    },
  ],
  ta: [
    {
      id: 'S5ZqdOp2aoU',
      title: 'தமிழில் ஆரோக்கியம்',
      pdf: 'https://pch.health.wa.gov.au/.../Tamil-Healthy-eating-and-drinking.pdf',
    },
  ],
  te: [
    {
      id: 's1evrsrojcs',
      title: 'తెలుగులో ఆరోగ్య సూచనలు',
      pdf: 'https://www.scribd.com/document/400365164/Millet-Recipe-Book-Telugu-pdf',
    },
  ],
  kn: [
    {
      id: 'DPrSiQwSAIo',
      title: 'ಆರೋಗ್ಯ ಸಲಹೆಗಳು ಕನ್ನಡದಲ್ಲಿ',
      pdf: 'https://www.imagicahealth.com/arogya/Meal_Planning/pdf/Kannada.pdf',
    },
  ],
  es: [
    {
      id: 'b8l7ThHka2Q',
      title: 'Consejos de salud en español',
      pdf: 'https://www.seghnp.org/sites/default/files/2017-06/conceptos-alimentacion.pdf',
    },
  ],
  fr: [
    {
      id: '071rT-6irr8',
      title: 'Conseils de santé en français',
      pdf: 'https://sante.gouv.fr/IMG/pdf/guide_alimentairetous.pdf',
    },
  ],

mr: [
  {
    id: 'R-iVvgOBuIw', // Marathi health tips video :contentReference[oaicite:1]{index=1}
    title: 'मराठीमध्ये आरोग्य टिप्स',
    pdf: 'https://education.maharashtra.gov.in/mdm/files/Introduction%20Marathi.pdf',
  },
],

ur: [
  {
    id: 'lAy0sss2Lq4', // Urdu/Hindi health tips :contentReference[oaicite:2]{index=2}
    title: 'صحت کی تجاویز اردو میں',
    pdf: 'https://www.chp.gov.hk/files/pdf/eatsmart_follow_the_healthy_eating_food_pyramid_urdu.pdf',
  },
],

ml: [
  {
    id: 'HH3wV_JOLyQ', // Malayalam healthy habits :contentReference[oaicite:3]{index=3}
    title: 'മലയാളത്തിൽ ആരോഗ്യ ടിപ്പുകൾ',
    pdf: 'https://dhs.kerala.gov.in/wp-content/uploads/2020/08/Diet_chart_general_public_malayalam.pdf',
  },
],

as: [
  {
    id: 'T8XnHTl0ep0', // Assamese health tips :contentReference[oaicite:4]{index=4}
    title: 'অসমীয়াত স্বাস্থ্য টিপস',
    pdf: 'https://example.com/assamese_health_tips.pdf',
  },
],

bn: [
  {
    id: 'DuDc1qNIuHw', // Bengali health tips :contentReference[oaicite:5]{index=5}
    title: 'বাংলায় স্বাস্থ্য পরামর্শ',
    pdf: 'https://example.com/bengali_health_tips.pdf',
  },
],

pa: [
  {
    id: 'My_zwfOQVpU', // Punjabi diabetes tips :contentReference[oaicite:6]{index=6}
    title: 'ਪੰਜਾਬੀ ਵਿੱਚ ਸਿਹਤ ਟਿੱਪਣੀਆਂ',
    pdf: 'https://example.com/punjabi_health_tips.pdf',
  },
],

gu: [
  {
    id: 'hbFDqbBtBMM', // Gujarati health tips :contentReference[oaicite:7]{index=7}
    title: 'ગુજરાતીમાં આરોગ્ય ટીપ્સ',
    pdf: 'https://example.com/gujarati_health_tips.pdf',
  },
],

sa: [
  {
    id: 'MduMiDkehIo', // Sanskrit definitions of health :contentReference[oaicite:8]{index=8}
    title: 'संस्कृते स्वास्थ्य निर्देशाः',
    pdf: 'https://example.com/sanskrit_health_tips.pdf',
  },
],
};

const VideoList = ({ language, onChangeLanguage, onLogout }) => {
  const videos = videosData[language] || [];
  const t = locales[language] || locales.en;

  const [showAppointment, setShowAppointment] = useState(false);
  const [symptoms, setSymptoms] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  const handleConfirm = () => {
    if (symptoms && date && time) {
      setAppointmentConfirmed(true);
    } else {
      alert(t.fillAllFields);
    }
  };

  return (
    <section
      className="py-5"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'brightness(0.9)',
      }}
    >
      {/* Top Bar */}
      <div className="container mb-4">
        <div className="d-flex justify-content-between align-items-center bg-white p-3 shadow-sm rounded">
          <h4 className="mb-0 text-dark">MedApp</h4>
          <div>
            <button className="btn btn-primary me-2" onClick={onChangeLanguage}>
              {t.changeLanguage}
            </button>
            <button className="btn btn-danger me-2" onClick={onLogout}>
              {t.logout}
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setShowAppointment(!showAppointment);
                setAppointmentConfirmed(false);
              }}
            >
              {showAppointment ? t.closeAppointment : t.bookAppointment}
            </button>
          </div>
        </div>
      </div>

      {/* Video Display */}
      <div className="container">
        {videos.length === 0 ? (
          <div className="alert alert-warning text-center">
            {t.noVideosAvailable}
          </div>
        ) : (
          videos.map(({ id, title, pdf }) => (
            <div className="row align-items-center mb-5" key={id || title}>
              <div className="col-lg-7 mb-3 mb-lg-0">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="col-lg-5 text-dark">
                <h5>{title}</h5>
                <p>{t.viewPdfPrompt}</p>
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  {t.viewPdf}
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Appointment Form */}
      {showAppointment && (
        <div className="container bg-white p-4 mt-4 rounded shadow">
          <h4 className="mb-3 text-dark">{t.bookAppointment}</h4>
          <div className="mb-3">
            <label className="form-label fw-bold text-dark">{t.symptoms}</label>
            <textarea
              className="form-control"
              placeholder={t.describeSymptoms}
              rows="3"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label fw-bold text-dark">{t.selectDate}</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold text-dark">{t.selectTime}</label>
              <input
                type="time"
                className="form-control"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-secondary"
              onClick={() => {
                setSymptoms('');
                setDate('');
                setTime('');
                setAppointmentConfirmed(false);
              }}
            >
              {t.clear}
            </button>
            <button className="btn btn-success" onClick={handleConfirm}>
              {t.confirmAppointment}
            </button>
          </div>

          {appointmentConfirmed && (
            <div className="alert alert-success mt-3">
               {t.appointmentConfirmed}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default VideoList;
