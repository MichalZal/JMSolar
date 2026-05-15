import { useRef, useState } from 'react';

export default function Contact() {
  return (
    <section className="section contact fade-in" id="kontakt">
      <div className="contact__info">
        <div className="section__tag">Kontakt</div>
        <h2 className="section__title">
          Porozmawiajmy<br />o <em>Twojej</em> instalacji
        </h2>
        <p
          style={{
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            fontSize: '0.95rem',
            marginBottom: '0.5rem',
          }}
        >
          Zostaw kontakt, a doradzimy Ci najlepsze rozwiązanie dla Twojego
          domu. Oddzwonimy w 24h.
        </p>
        <div className="contact__details">
          <div className="contact-line">
            <div className="contact-line__label">Adres</div>
            <div className="contact-line__value">
              Konopnickiej 6a, 67-115 Bytom Odrzański
            </div>
          </div>
          <div className="contact-line">
            <div className="contact-line__label">Telefon</div>
            <div className="contact-line__value">
              <a href="tel:+48518337406">518 337 406</a>
            </div>
          </div>
          <div className="contact-line">
            <div className="contact-line__label">E-mail</div>
            <div className="contact-line__value">
              <a href="mailto:biuro@jmsolar.pl">biuro@jmsolar.pl</a>
            </div>
          </div>
          <div className="contact-line">
            <div className="contact-line__label">Social</div>
            <div className="contact-line__value" style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="https://www.facebook.com/FirmaJMSolar"
                target="_blank"
                rel="noopener"
                style={{ color: 'var(--primary)' }}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/jmsolar.pl/"
                target="_blank"
                rel="noopener"
                style={{ color: 'var(--primary)' }}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    const data = new FormData(formRef.current);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="form" ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        <div className="form__group">
          <label className="form__label" htmlFor="name">Imię i nazwisko</label>
          <input type="text" id="name" name="name" className="form__input" placeholder="Jan Kowalski" required />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="phone">Telefon</label>
          <input type="tel" id="phone" name="phone" className="form__input" placeholder="+48 …" required />
        </div>
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="address">Adres nieruchomości</label>
        <input type="text" id="address" name="address" className="form__input" placeholder="Miejscowość, ulica" />
      </div>
      <div className="form__row">
        <div className="form__group">
          <label className="form__label" htmlFor="interest">Zainteresowany/a</label>
          <select id="interest" name="interest" className="form__input">
            <option value="">Wybierz usługę</option>
            <option>Fotowoltaika</option>
            <option>Magazyn energii</option>
            <option>Fotowoltaika + magazyn</option>
            <option>Audyt energetyczny</option>
            <option>Dofinansowanie</option>
          </select>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="consumption">Roczne zużycie energii</label>
          <input type="text" id="consumption" name="consumption" className="form__input" placeholder="np. 4000 kWh" />
        </div>
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="message">Wiadomość</label>
        <textarea id="message" name="message" className="form__input" placeholder="Opisz krótko swoją nieruchomość i oczekiwania…"></textarea>
      </div>
      <button type="submit" className="form__submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Wysyłanie…' : 'Wyślij zapytanie'}
      </button>
      {status === 'success' && (
        <p className="form__success">Dziękujemy! Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
      )}
      {status === 'error' && (
        <p className="form__error">Wystąpił błąd. Prosimy spróbować później lub zadzwonić pod +48 518 337 406.</p>
      )}
    </form>
  );
}
