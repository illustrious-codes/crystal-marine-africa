import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./Footer.module.css";

const COMPANY_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "https://crystalmarine-africa.com/about" },
  {
    label: "Community",
    href: "/community",
  },
  { label: "Policies", href: "/policies" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.draftMarks} />

      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brandBlock}>
          <Link href="/" className={styles.brand}>
            <Image
              src="/images/crystal-marine-logo.png"
              alt="Crystal Marine"
              width={38}
              height={38}
              className={styles.logo}
            />
            <span className={styles.brandName}>Crystal Marine</span>
          </Link>
          <p className={styles.brandTagline}>
            Mooring coordination, pilotage and Ship to Ship transfer services
            across Africa, backed by 24-hour operational support.
          </p>
        </div>

        {/* Company links */}
        <div>
          <h3 className={styles.heading}>Company links</h3>
          <ul className={styles.linkList}>
            {COMPANY_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className={styles.heading}>Contact info</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <MapPin className={styles.contactIcon} aria-hidden="true" />
              <span className={styles.contactText}>
                1, Admiralty Road (Admiralty House)
                <br />
                off Fatai Idowu Arobieke Street,
                <br />
                Lekki Phase 1, Lagos.
              </span>
            </li>
            <li className={styles.contactItem}>
              <Phone className={styles.contactIcon} aria-hidden="true" />
              <span className={styles.contactText}>
                <a href="tel:+2341290947">(+234)-1-2900947</a>
                <br />
                <a href="tel:+2348023242529">+234-8023242529</a>
              </span>
            </li>
            <li className={styles.contactItem}>
              <Mail className={styles.contactIcon} aria-hidden="true" />
              <span className={styles.contactText}>
                <a href="mailto:ops@crystalmarine.eu">ops@crystalmarine.eu</a>
                <br />
                <a href="mailto:commercial@crystalmarine.eu">
                  commercial@crystalmarine.eu
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © Crystal Marine {year}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
