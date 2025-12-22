'use client'; // Client Component pois precisa de estado (Menu Mobile)

import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { siteContent } from '../../data/content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          AM<span>.</span>
        </div>
        
        <nav className={styles.nav}>
          <a href="#hero">Início</a>
          <a href="#projects">Projetos</a>
          <a href="#about">Sobre</a>
          <a href="#contact" className={styles.contactBtn}>Contato</a>
        </nav>
      </div>
    </header>
  );
}