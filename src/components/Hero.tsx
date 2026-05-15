import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__left">
        <div className="hero__eyebrow">Fotowoltaika i magazyny energii</div>

        <h1 className="hero__title">
          Nie przepłacaj<br />
          za prąd.<br />
          <em>Zainwestuj raz,</em>
          <br />
          oszczędzaj przez lata.
        </h1>

        <p className="hero__desc">
          Montujemy fotowoltaikę i magazyny energii, które realnie obniżają
          rachunki. Przyjedziemy, policzymy, pokażemy Ci, ile naprawdę możesz
          zyskać.
        </p>

        <div className="hero__actions">
          <Link to="/#kontakt" className="btn-primary">
            Umów spotkanie z doradcą
          </Link>
          <Link to="/#uslugi" className="btn-ghost">
            Nasze usługi
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 10h12M10 4l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="hero__right">
        <svg
          className="hero__svg"
          viewBox="0 0 800 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="sunGrad" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#136BAB" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="900" fill="#F0F1F2" />
          <rect width="800" height="900" fill="url(#sunGrad)" />
          <ellipse
            cx="400"
            cy="580"
            rx="500"
            ry="120"
            fill="#136BAB"
            opacity="0.04"
          />
          <rect y="560" width="800" height="340" fill="#E6E9EB" opacity="0.5" />
          <g opacity="0.3">
            <polygon points="200,360 380,220 560,360" fill="#D4D9DD" />
            <rect x="240" y="360" width="280" height="200" fill="#D4D9DD" />
            <rect
              x="310"
              y="440"
              width="60"
              height="120"
              fill="#E6E9EB"
            />
          </g>
          <g opacity="0.6">
            <rect
              x="230"
              y="278"
              width="50"
              height="32"
              rx="2"
              fill="#136BAB"
              stroke="#136BAB"
              strokeWidth="1.5"
            />
            <line
              x1="255"
              y1="278"
              x2="255"
              y2="310"
              stroke="#136BAB"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <line
              x1="230"
              y1="294"
              x2="280"
              y2="294"
              stroke="#136BAB"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <rect
              x="290"
              y="255"
              width="50"
              height="32"
              rx="2"
              fill="#136BAB"
              stroke="#136BAB"
              strokeWidth="1.5"
            />
            <line
              x1="315"
              y1="255"
              x2="315"
              y2="287"
              stroke="#136BAB"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <line
              x1="290"
              y1="271"
              x2="340"
              y2="271"
              stroke="#136BAB"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <rect
              x="350"
              y="255"
              width="50"
              height="32"
              rx="2"
              fill="#136BAB"
              stroke="#136BAB"
              strokeWidth="1.5"
            />
            <line
              x1="375"
              y1="255"
              x2="375"
              y2="287"
              stroke="#136BAB"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <line
              x1="350"
              y1="271"
              x2="400"
              y2="271"
              stroke="#136BAB"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <rect
              x="410"
              y="278"
              width="50"
              height="32"
              rx="2"
              fill="#136BAB"
              stroke="#136BAB"
              strokeWidth="1.5"
            />
            <line
              x1="435"
              y1="278"
              x2="435"
              y2="310"
              stroke="#136BAB"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <line
              x1="410"
              y1="294"
              x2="460"
              y2="294"
              stroke="#136BAB"
              strokeWidth="0.8"
              opacity="0.6"
            />
          </g>
          <g opacity="0.4">
            <line
              x1="400"
              y1="80"
              x2="400"
              y2="20"
              stroke="#136BAB"
              strokeWidth="1.5"
            />
            <line
              x1="450"
              y1="100"
              x2="490"
              y2="60"
              stroke="#136BAB"
              strokeWidth="1.5"
            />
            <line
              x1="350"
              y1="100"
              x2="310"
              y2="60"
              stroke="#136BAB"
              strokeWidth="1.5"
            />
            <line
              x1="470"
              y1="130"
              x2="530"
              y2="110"
              stroke="#136BAB"
              strokeWidth="1.5"
            />
            <line
              x1="330"
              y1="130"
              x2="270"
              y2="110"
              stroke="#136BAB"
              strokeWidth="1.5"
            />
          </g>
          <circle cx="400" cy="130" r="45" fill="#136BAB" opacity="0.1" />
          <circle cx="400" cy="130" r="28" fill="#136BAB" opacity="0.15" />
          <path
            d="M400,200 Q420,380 400,560"
            stroke="#136BAB"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
            strokeDasharray="4,8"
          />
          <rect
            x="620"
            y="180"
            width="120"
            height="80"
            fill="none"
            stroke="#136BAB"
            strokeWidth="0.5"
            opacity="0.2"
          />
          <rect
            x="60"
            y="400"
            width="80"
            height="60"
            fill="none"
            stroke="#136BAB"
            strokeWidth="0.5"
            opacity="0.15"
          />
        </svg>
        <div className="hero__image-overlay"></div>
      </div>

      <div className="hero__stat-bar">
        <div className="stat-item">
          <div className="stat-item__num">680+</div>
          <div className="stat-item__label">Realizacji montaży fotowoltaiki</div>
        </div>
        <div className="stat-item">
          <div className="stat-item__num">120+</div>
          <div className="stat-item__label">Opinii na Google Maps</div>
        </div>
        <div className="stat-item">
          <div className="stat-item__num">7+ lat</div>
          <div className="stat-item__label">Doświadczenia w OZE</div>
        </div>
      </div>
    </section>
  );
}
