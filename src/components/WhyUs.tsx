export default function WhyUs() {
  return (
    <section className="why" id="dlaczego-my">
      <div className="why__image-col">
        <svg className="why__svg" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="warmGlow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#136BAB" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#F0F1F2" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="600" height="700" fill="#F0F1F2" />
          <rect width="600" height="700" fill="url(#warmGlow)" />
          <g opacity="0.3">
            <rect x="80" y="150" width="440" height="280" rx="4" fill="none" stroke="#136BAB" strokeWidth="1" />
            <line x1="80" y1="220" x2="520" y2="220" stroke="#136BAB" strokeWidth="0.8" />
            <line x1="80" y1="290" x2="520" y2="290" stroke="#136BAB" strokeWidth="0.8" />
            <line x1="80" y1="360" x2="520" y2="360" stroke="#136BAB" strokeWidth="0.8" />
            <line x1="168" y1="150" x2="168" y2="430" stroke="#136BAB" strokeWidth="0.8" />
            <line x1="256" y1="150" x2="256" y2="430" stroke="#136BAB" strokeWidth="0.8" />
            <line x1="344" y1="150" x2="344" y2="430" stroke="#136BAB" strokeWidth="0.8" />
            <line x1="432" y1="150" x2="432" y2="430" stroke="#136BAB" strokeWidth="0.8" />
          </g>
          <line x1="520" y1="80" x2="80" y2="520" stroke="#136BAB" strokeWidth="1" opacity="0.2" />
          <line x1="540" y1="80" x2="100" y2="520" stroke="#136BAB" strokeWidth="0.5" opacity="0.1" />
          <rect x="40" y="40" width="60" height="60" fill="none" stroke="#136BAB" strokeWidth="0.5" opacity="0.2" />
          <rect x="500" y="600" width="60" height="60" fill="none" stroke="#136BAB" strokeWidth="0.5" opacity="0.15" />
          <circle cx="300" cy="290" r="60" fill="none" stroke="#136BAB" strokeWidth="0.5" opacity="0.25" />
          <circle cx="300" cy="290" r="30" fill="none" stroke="#136BAB" strokeWidth="0.5" opacity="0.2" />
          <circle cx="300" cy="290" r="8" fill="#136BAB" opacity="0.3" />
        </svg>
        <div className="why__img-overlay"></div>
      </div>
      <div className="why__content fade-in">
        <div className="section__tag">Ludzie, nie korporacja</div>
        <h2 className="section__title">
          Jakość i uczciwość<br />
          <em>zamiast ilości</em>
        </h2>
        <p
          style={{
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            marginBottom: '2rem',
            fontSize: '0.95rem',
          }}
        >
          W JMSolar nie ścigamy się na liczby. Działamy tak, żeby każda
          instalacja była dopięta na ostatni szczegół — od pierwszej rozmowy po
          serwis. Wierzymy, że lepiej zrobić mniej, ale dobrze, niż obiecywać
          wszystko i zostawić klienta z problemem.
        </p>
        <ul className="why__list">
          <li className="why-item">
            <span className="why-item__num">01</span>
            <div>
              <div className="why-item__title">
                Bez pośpiechu, z pełną odpowiedzialnością
              </div>
              <div className="why-item__desc">
                Montaż dopasowany do każdego dachu, indywidualne projekty, nie
                gotowe szablony. Jasna komunikacja na każdym etapie.
              </div>
            </div>
          </li>
          <li className="why-item">
            <span className="why-item__num">02</span>
            <div>
              <div className="why-item__title">
                Klient to nie numer w kolejce
              </div>
              <div className="why-item__desc">
                Rodzinna firma z tradycją. Każdy montaż nadzorowany osobiście
                przez właściciela. Stały kontakt z doradcą.
              </div>
            </div>
          </li>
          <li className="why-item">
            <span className="why-item__num">03</span>
            <div>
              <div className="why-item__title">Opieka po montażu</div>
              <div className="why-item__desc">
                Szybka reakcja w 24h, serwis zgodny z gwarancją producenta,
                spokój i pewność na lata. Jesteśmy z Tobą również po instalacji.
              </div>
            </div>
          </li>
          <li className="why-item">
            <span className="why-item__num">04</span>
            <div>
              <div className="why-item__title">
                2 ekipy pełnoetatowych pracowników
              </div>
              <div className="why-item__desc">
                Własny, doświadczony zespół montażowy. Bez podwykonawców — każda
                instalacja wykonana od A do Z przez naszych ludzi.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
