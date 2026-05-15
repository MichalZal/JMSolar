import { Link } from 'react-router-dom';

export default function Dotacje() {
  return (
    <section className="section dotacje fade-in" id="dotacje">
      <div className="section__tag">Dotacja „Mój Prąd"</div>
      <h2 className="section__title">
        Twoja szansa na <em>realne wsparcie</em>
      </h2>
      <div className="dotacje__grid">
        <div className="dotacja-card">
          <div className="dotacja-card__value">7 000 zł+</div>
          <div className="dotacja-card__label">Dotacja na PV z magazynem energii lub ciepła</div>
        </div>
        <div className="dotacja-card">
          <div className="dotacja-card__value">6 000 zł</div>
          <div className="dotacja-card__label">Dotacja na instalację PV</div>
        </div>
        <div className="dotacja-card">
          <div className="dotacja-card__value">16 000 zł</div>
          <div className="dotacja-card__label">Dotacja na magazyn energii elektrycznej</div>
        </div>
        <div className="dotacja-card">
          <div className="dotacja-card__value">5 000 zł</div>
          <div className="dotacja-card__label">Dotacja na magazyn ciepła</div>
        </div>
      </div>
      <div className="dotacje__bottom">
        <p>Odbierz realne wsparcie i obniż koszt inwestycji. Zajmujemy się całą dokumentacją za Ciebie.</p>
        <Link to="/#kontakt" className="btn-primary">Umów spotkanie z doradcą</Link>
      </div>
    </section>
  );
}
