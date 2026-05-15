export default function Services() {
  return (
    <section className="section services fade-in" id="uslugi">
      <div className="services__header">
        <div>
          <div className="section__tag">Oferta</div>
          <h2 className="section__title">
            Kompletne rozwiązania<br />
            <em>OZE dla Twojego domu</em>
          </h2>
        </div>
        <p className="services__desc">
          Oferujemy kompleksową obsługę — od audytu energetycznego, przez
          projekt i montaż, po serwis i monitoring. Jeden partner dla całego
          procesu.
        </p>
      </div>

      <div className="services__grid">
        <ServiceCard
          title="Fotowoltaika"
          desc="Projektujemy i montujemy systemy PV dopasowane do Twojego zużycia energii. Każda instalacja to indywidualny projekt, nie szablon."
        >
          <SolarIcon />
        </ServiceCard>
        <ServiceCard
          title="Magazyny energii"
          desc="Systemy BESS pozwalające przechowywać nadwyżki energii i korzystać z nich w nocy lub podczas awarii sieci. Prawdziwa niezależność."
        >
          <BatteryIcon />
        </ServiceCard>
        <ServiceCard
          title="Serwis i przeglądy"
          desc="Pełna opieka po montażu — regularne przeglądy, szybka reakcja w 24h i wsparcie techniczne przez cały okres użytkowania instalacji."
        >
          <MonitoringIcon />
        </ServiceCard>
        <ServiceCard
          title="Audyt energetyczny"
          desc="Szczegółowa analiza zużycia energii w Twoim domu i dobór optymalnego systemu. Darmowa konsultacja i wycena — bez zobowiązań."
        >
          <AuditIcon />
        </ServiceCard>
        <ServiceCard
          title="Dofinansowania"
          desc='Pomagamy pozyskać dotację z programu "Mój Prąd" oraz innych programów. Zajmujemy się całą dokumentacją za Ciebie — od A do Z.'
        >
          <SubsidyIcon />
        </ServiceCard>
        <ServiceCard
          title="Montaż w 2-3 dni"
          desc="Własne, w pełni przeszkolone ekipy montażowe. Szybka realizacja bez podwykonawców — od podpisania umowy do uruchomienia w zaledwie kilka dni."
        >
          <InstallIcon />
        </ServiceCard>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="service-card">
      <div className="service-card__icon">{children}</div>
      <h3 className="service-card__title">{title}</h3>
      <div className="service-card__divider"></div>
      <p className="service-card__desc">{desc}</p>
    </div>
  );
}

function SolarIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="6" y="26" width="36" height="14" rx="2" stroke="#C8A84B" strokeWidth="1.5" />
      <line x1="18" y1="26" x2="18" y2="40" stroke="#C8A84B" strokeWidth="1" />
      <line x1="30" y1="26" x2="30" y2="40" stroke="#C8A84B" strokeWidth="1" />
      <line x1="6" y1="33" x2="42" y2="33" stroke="#C8A84B" strokeWidth="1" />
      <rect x="14" y="10" width="20" height="13" rx="2" stroke="#C8A84B" strokeWidth="1.5" />
      <line x1="24" y1="10" x2="24" y2="23" stroke="#C8A84B" strokeWidth="1" />
      <line x1="14" y1="16.5" x2="34" y2="16.5" stroke="#C8A84B" strokeWidth="1" />
      <circle cx="38" cy="10" r="5" stroke="#C8A84B" strokeWidth="1.5" />
      <line x1="38" y1="6" x2="38" y2="4" stroke="#C8A84B" strokeWidth="1.5" />
      <line x1="42" y1="7" x2="43.5" y2="5.5" stroke="#C8A84B" strokeWidth="1.5" />
      <line x1="44" y1="10" x2="46" y2="10" stroke="#C8A84B" strokeWidth="1.5" />
      <line x1="42" y1="13" x2="43.5" y2="14.5" stroke="#C8A84B" strokeWidth="1.5" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="8" y="12" width="22" height="28" rx="3" stroke="#C8A84B" strokeWidth="1.5" />
      <rect x="13" y="18" width="12" height="16" rx="1" stroke="#C8A84B" strokeWidth="1" />
      <circle cx="19" cy="26" r="4" stroke="#C8A84B" strokeWidth="1" />
      <path d="M30 20 Q38 20 38 28 Q38 36 30 36" stroke="#C8A84B" strokeWidth="1.5" fill="none" />
      <line x1="34" y1="24" x2="42" y2="22" stroke="#C8A84B" strokeWidth="1" strokeDasharray="2,3" />
      <line x1="34" y1="28" x2="44" y2="28" stroke="#C8A84B" strokeWidth="1" strokeDasharray="2,3" />
      <line x1="34" y1="32" x2="42" y2="34" stroke="#C8A84B" strokeWidth="1" strokeDasharray="2,3" />
      <circle cx="38" cy="8" r="3" stroke="#C8A84B" strokeWidth="1.5" />
      <line x1="38" y1="5" x2="38" y2="3" stroke="#C8A84B" strokeWidth="1.2" />
      <line x1="41" y1="5.5" x2="42.5" y2="4" stroke="#C8A84B" strokeWidth="1.2" />
      <line x1="41" y1="8" x2="43" y2="8" stroke="#C8A84B" strokeWidth="1.2" />
    </svg>
  );
}

function MonitoringIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="6" y="6" width="36" height="28" rx="3" stroke="#C8A84B" strokeWidth="1.5" />
      <path d="M14 24 L20 18 L26 22 L34 14" stroke="#C8A84B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="34" cy="14" r="2" fill="#C8A84B" opacity="0.6" />
      <line x1="6" y1="38" x2="42" y2="38" stroke="#C8A84B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="38" x2="18" y2="42" stroke="#C8A84B" strokeWidth="1.5" />
      <line x1="30" y1="38" x2="30" y2="42" stroke="#C8A84B" strokeWidth="1.5" />
      <line x1="12" y1="42" x2="36" y2="42" stroke="#C8A84B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AuditIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="16" stroke="#C8A84B" strokeWidth="1.5" />
      <path d="M24 8 A16 16 0 0 1 40 24" stroke="#C8A84B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="6" stroke="#C8A84B" strokeWidth="1.5" />
      <line x1="24" y1="18" x2="24" y2="8" stroke="#C8A84B" strokeWidth="1" />
      <line x1="30" y1="24" x2="40" y2="24" stroke="#C8A84B" strokeWidth="1" />
      <line x1="24" y1="30" x2="24" y2="40" stroke="#C8A84B" strokeWidth="1" />
      <line x1="18" y1="24" x2="8" y2="24" stroke="#C8A84B" strokeWidth="1" />
      <circle cx="24" cy="24" r="2" fill="#C8A84B" />
    </svg>
  );
}

function SubsidyIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M8 34 L24 14 L40 34" stroke="#C8A84B" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M14 34 L24 20 L34 34" stroke="#C8A84B" strokeWidth="1" fill="none" strokeLinejoin="round" opacity="0.5" />
      <line x1="8" y1="34" x2="40" y2="34" stroke="#C8A84B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="38" r="3" stroke="#C8A84B" strokeWidth="1.5" />
      <line x1="6" y1="38" x2="14" y2="38" stroke="#C8A84B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="34" y1="38" x2="42" y2="38" stroke="#C8A84B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function InstallIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="8" y="20" width="14" height="20" rx="2" stroke="#C8A84B" strokeWidth="1.5" />
      <rect x="26" y="10" width="14" height="30" rx="2" stroke="#C8A84B" strokeWidth="1.5" />
      <path d="M15 16 L15 8 L22 8" stroke="#C8A84B" strokeWidth="1.5" fill="none" strokeDasharray="2,2" />
      <circle cx="22" cy="8" r="2" fill="#C8A84B" opacity="0.5" />
      <line x1="11" y1="20" x2="11" y2="40" stroke="#C8A84B" strokeWidth="3" opacity="0.2" />
      <line x1="33" y1="10" x2="33" y2="40" stroke="#C8A84B" strokeWidth="3" opacity="0.2" />
      <line x1="8" y1="38" x2="40" y2="38" stroke="#C8A84B" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
