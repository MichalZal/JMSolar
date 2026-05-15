import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="logo">
            JM<span>Solar</span>
          </Link>
          <p className="footer__brand-desc">
            Rodzinna firma specjalizująca się w fotowoltaice i magazynach
            energii. Działamy na terenie Dolnego Śląska i okolic.
          </p>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">Usługi</h4>
          <ul className="footer__links">
            <li>
              <Link to="/#uslugi" className="footer__link">
                Fotowoltaika
              </Link>
            </li>
            <li>
              <Link to="/#uslugi" className="footer__link">
                Magazyny energii
              </Link>
            </li>
            <li>
              <Link to="/#uslugi" className="footer__link">
                Serwis i przeglądy
              </Link>
            </li>
            <li>
              <Link to="/#uslugi" className="footer__link">
                Audyt energetyczny
              </Link>
            </li>
            <li>
              <Link to="/#uslugi" className="footer__link">
                Dofinansowania
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">Firma</h4>
          <ul className="footer__links">
            <li>
              <Link to="/#dlaczego-my" className="footer__link">
                O nas
              </Link>
            </li>
            <li>
              <Link to="/#realizacje" className="footer__link">
                Realizacje
              </Link>
            </li>
            <li>
              <Link to="/#dlaczego-my" className="footer__link">
                Opinie klientów
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">Programy</h4>
          <ul className="footer__links">
            <li>
              <Link to="/#dotacje" className="footer__link">
                Mój Prąd 7.0
              </Link>
            </li>
            <li>
              <Link to="/#dotacje" className="footer__link">
                Ulga termomodernizacyjna
              </Link>
            </li>
            <li>
              <Link to="/#dotacje" className="footer__link">
                Dofinansowania UE
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2025 JMSolar. Wszelkie prawa zastrzeżone.</span>
        <span>
          <Link to="/polityka-prywatnosci" className="footer__privacy-link">
            Polityka prywatności
          </Link>{' '}
          · RODO
        </span>
      </div>
    </footer>
  );
}
