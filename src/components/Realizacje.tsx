export default function Realizacje() {
  return (
    <section className="section realizacje fade-in" id="realizacje">
      <div className="section__tag">Nasze realizacje</div>
      <h2 className="section__title">
        Zaufanie budujemy <em>w praktyce</em>
      </h2>
      <p className="realizacje__desc">
        Każda instalacja to efekt rozmowy, dokładnych wyliczeń i
        odpowiedzialnego podejścia. Bez pośpiechu, bez kompromisów.
      </p>

      <div className="realizacje__grid">
        <div className="realizacja-card">
          <h3 className="realizacja-card__title">Fotowoltaika 5,4 kW</h3>
          <span className="realizacja-card__sub">Bliźniacza zabudowa</span>
          <ul className="realizacja-card__list">
            <li><strong>Moc:</strong> 2 × 2,7 kW</li>
            <li><strong>Moduły:</strong> Full Black 450W</li>
            <li><strong>Inwerter:</strong> hybrydowy</li>
            <li><strong>Układ:</strong> wschód–zachód</li>
            <li><strong>Produkcja:</strong> ok. 5 000 kWh/rok</li>
          </ul>
        </div>
        <div className="realizacja-card">
          <h3 className="realizacja-card__title">System hybrydowy 5,4 kW</h3>
          <span className="realizacja-card__sub">+ magazyn Kehua 10 kWh</span>
          <ul className="realizacja-card__list">
            <li><strong>Magazyn:</strong> Kehua Tech 10 kWh</li>
            <li><strong>Tryb:</strong> off-grid / hybrydowy</li>
            <li><strong>Zastosowanie:</strong> zasilanie budowy + dom</li>
            <li><strong>Efekt:</strong> pełna niezależność od sieci</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
