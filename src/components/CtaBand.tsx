import { Link } from 'react-router-dom';

export default function CtaBand() {
  return (
    <div className="cta-band fade-in">
      <div>
        <h2 className="cta-band__title">
          Nie przepłacaj za prąd.<br />
          <em>Zainwestuj raz,</em> oszczędzaj przez lata
        </h2>
        <p className="cta-band__desc">
          Darmowy audyt i wycena. Montaż w 2-3 dni. Kompleksowy serwis i
          gwarancja.
        </p>
      </div>
      <div className="cta-band__actions">
        <Link
          to="/#kontakt"
          className="btn-primary"
          style={{ whiteSpace: 'nowrap' }}
        >
          Umów bezpłatną wizję
        </Link>
        <a
          href="tel:+48518337406"
          className="btn-ghost btn-ghost--phone"
          style={{
            justifyContent: 'flex-end',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          +48 518 337 406
        </a>
      </div>
    </div>
  );
}
