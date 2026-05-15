import { useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navbarRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    menuRef.current?.classList.remove('nav__links--open');
    toggleRef.current?.classList.remove('nav__toggle--open');
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          navbar!.classList.toggle('nav--scrolled', window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const toggle = toggleRef.current;
    const menu = menuRef.current;
    if (!toggle || !menu) return;

    const onToggle = () => {
      const isOpen = menu.classList.contains('nav__links--open');
      if (isOpen) {
        close();
      } else {
        menu.classList.add('nav__links--open');
        toggle.classList.add('nav__toggle--open');
        document.body.style.overflow = 'hidden';
      }
    };

    toggle.addEventListener('click', onToggle);
    return () => toggle.removeEventListener('click', onToggle);
  }, [close]);

  useEffect(() => {
    const menu = menuRef.current;
    const toggle = toggleRef.current;
    if (!menu || !toggle) return;

    const links = menu.querySelectorAll('a');
    const onLinkClick = () => close();
    links.forEach((l) => l.addEventListener('click', onLinkClick));

    const onDocClick = (e: MouseEvent) => {
      if (
        menu.classList.contains('nav__links--open') &&
        !menu.contains(e.target as Node) &&
        !toggle.contains(e.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener('click', onDocClick);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menu.classList.contains('nav__links--open')) {
        close();
      }
    };
    document.addEventListener('keydown', onKey);

    return () => {
      links.forEach((l) => l.removeEventListener('click', onLinkClick));
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [close]);

  const isHome = location.pathname === '/';
  const linkTo = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <nav className="nav" ref={navbarRef}>
      <Link to="/" className="logo">
        JM<span>Solar</span>
      </Link>

      <button
        className="nav__toggle"
        ref={toggleRef}
        aria-label="Menu"
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className="nav__links" ref={menuRef}>
        <li>
          <Link to={linkTo('#uslugi')} className="nav__link">
            Usługi
          </Link>
        </li>
        <li>
          <Link to={linkTo('#dlaczego-my')} className="nav__link">
            O nas
          </Link>
        </li>
        <li>
          <Link to={linkTo('#realizacje')} className="nav__link">
            Realizacje
          </Link>
        </li>
        <li>
          <Link to={linkTo('#kontakt')} className="nav__link">
            Kontakt
          </Link>
        </li>
      </ul>

      <Link to={linkTo('#kontakt')} className="nav__cta">
        Bezpłatna wycena
      </Link>
    </nav>
  );
}
