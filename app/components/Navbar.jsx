"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import styles from "./Navbar.module.css";

const ABOUT_LINKS = [
  { label: "About Us", href: "/about/about-us" },
  { label: "Lithering Locations", href: "/about/lithering-locations" },
  { label: "Corporate Social Responsibility", href: "/about/csr" },
  { label: "Careers", href: "/about/careers" },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Policies", href: "/policies" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const aboutRef = useRef(null);

  // Close the About flyout on outside click
  useEffect(() => {
    function handleClick(e) {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when the mobile panel is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className={styles.navbar}>
      <nav className={styles.container}>
        {/* Logo + wordmark */}
        <Link href="/" className={styles.brand}>
          <Image
            src="/images/crystal-marine-logo.png"
            alt="Crystal Marine"
            width={42}
            height={42}
            className={styles.logo}
            priority
          />
          <span className={styles.brandName}>Crystal Marine</span>
        </Link>

        {/* Desktop nav */}
        <div className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>

          {/* About dropdown */}
          <div className={styles.aboutWrapper} ref={aboutRef}>
            <button
              type="button"
              onClick={() => setAboutOpen((v) => !v)}
              aria-expanded={aboutOpen}
              className={`${styles.navLink} ${styles.aboutButton}`}
            >
              About
              <ChevronDown
                className={`${styles.chevron} ${
                  aboutOpen ? styles.chevronOpen : ""
                }`}
              />
            </button>

            {aboutOpen && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownAccent} />
                <ul className={styles.dropdownList}>
                  {ABOUT_LINKS.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={styles.dropdownItem}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {NAV_LINKS.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}

          <Link href="/contact-us" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className={styles.mobileToggle}
        >
          <Menu className={styles.icon} />
        </button>
      </nav>

      <div className={styles.draftMarks} />

      {/* Mobile slide-in panel */}
      {mobileOpen && (
        <div className={styles.mobileOverlay}>
          <div
            className={styles.mobileScrim}
            onClick={() => setMobileOpen(false)}
          />
          <div className={styles.mobilePanel}>
            <div className={styles.mobileHeader}>
              <div className={styles.mobileBrand}>
                <Image
                  src="/images/crystal-marine-logo.png"
                  alt="Crystal Marine"
                  width={34}
                  height={34}
                  className={styles.logo}
                />
                <span className={styles.mobileBrandName}>Crystal Marine</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className={styles.closeButton}
              >
                <X className={styles.icon} style={{ width: 20, height: 20 }} />
              </button>
            </div>

            <div className={styles.mobileLinks}>
              <Link
                href="/"
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              <button
                type="button"
                onClick={() => setMobileAboutOpen((v) => !v)}
                aria-expanded={mobileAboutOpen}
                className={`${styles.mobileLink} ${styles.mobileAboutButton}`}
              >
                About
                <ChevronDown
                  className={`${styles.chevron} ${
                    mobileAboutOpen ? styles.chevronOpen : ""
                  }`}
                />
              </button>

              {mobileAboutOpen && (
                <div className={styles.mobileAboutList}>
                  {ABOUT_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={styles.mobileAboutItem}
                      onClick={() => setMobileOpen(false)}
                    >
                      <ChevronRight className={styles.mobileChevron} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              {NAV_LINKS.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact-us"
                className={styles.mobileCta}
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
