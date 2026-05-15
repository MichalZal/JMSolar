export default function Process() {
  return (
    <section className="section process fade-in">
      <div className="section__tag">Jak działamy</div>
      <h2 className="section__title" style={{ maxWidth: 520 }}>
        Zacznij od rozmowy,<br />
        <em>nie od decyzji</em>
      </h2>
      <div className="process__steps">
        <div className="step">
          <div className="step__num">01</div>
          <h3 className="step__title">Darmowy audyt i wycena</h3>
          <p className="step__desc">Przyjeżdżamy, analizujemy Twoje rachunki i potrzeby. Dostajesz jasne wyliczenia — bez presji i marketingowych sztuczek.</p>
        </div>
        <div className="step">
          <div className="step__num">02</div>
          <h3 className="step__title">Projekt i oferta</h3>
          <p className="step__desc">Przygotowujemy indywidualny projekt instalacji i konkretną wycenę. Doradzamy w zakresie dotacji i dofinansowań.</p>
        </div>
        <div className="step">
          <div className="step__num">03</div>
          <h3 className="step__title">Montaż w 2-3 dni</h3>
          <p className="step__desc">Nasze ekipy montują instalację sprawnie i czysto. Zajmujemy się wszystkimi formalnościami i zgłoszeniami.</p>
        </div>
        <div className="step">
          <div className="step__num">04</div>
          <h3 className="step__title">Serwis i monitoring</h3>
          <p className="step__desc">Uruchamiamy system, szkolimy z obsługi i zapewniamy stałe wsparcie. Jesteśmy z Tobą również po instalacji.</p>
        </div>
      </div>
    </section>
  );
}
