// src/app/components/FloatingActionButton.jsx
'use client';

import { useState, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";
import styles from '../styles/FloatingActionButton.module.css';

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarHeight = 30;

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPastNavbar = window.scrollY > navbarHeight;
      setIsVisible(scrolledPastNavbar);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight]);

  const handleFabClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    isVisible && (
      <div className={styles.fabContainer}>
        <button
          onClick={handleFabClick}
          className={styles.fab}
        >
          <FiMenu />
        </button>
        {isMenuOpen && (
          <div className={styles.menu}>
            <a href="#intro" onClick={() => setIsMenuOpen(false)}>Intro</a>
            <a href="#origins" onClick={() => setIsMenuOpen(false)}>Origins</a>
            <a href="#schedule" onClick={() => setIsMenuOpen(false)}>Schedule</a>
            <a href="#location" onClick={() => setIsMenuOpen(false)}>Location</a>
            <a href="#travel" onClick={() => setIsMenuOpen(false)}>Travel</a>
            <a href="#info" onClick={() => setIsMenuOpen(false)}>Important Information</a>
            <a href="#registry" onClick={() => setIsMenuOpen(false)}>Gifts</a>
            <a href="#rsvp" onClick={() => setIsMenuOpen(false)}>RSVP</a>
          </div>
        )}
      </div>
    )
  );
}
