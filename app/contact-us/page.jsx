import ContactForm from "../components/ContactForm/ContactForm";
import styles from "./Contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <p className={styles.heroSubtitle}>GET IN TOUCH</p>
          <h1>Contact Us</h1>
          <p>
            Have a question or need more information about our marine services?
            Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Address */}
            <div className={styles.infoCard}>
              <div className={styles.icon}>📍</div>

              <h2>ADDRESS</h2>

              <p className={styles.companyName}>Crystal Marine</p>

              <a
                href="https://maps.app.goo.gl/e6P5LUA7u3YxadGAA"
                target="_blank"
                rel="noopener noreferrer"
              >
                1, Admiralty Road (Admiralty House)
                <br />
                off Fatai Idowu Arobieke Street,
                <br />
                Lekki Phase 1, Lagos.
              </a>
            </div>

            {/* Contact */}
            <div className={styles.infoCard}>
              <div className={styles.icon}>📞</div>

              <h2>CONTACT</h2>

              <a href="tel:+23412900947">(+234)-1-2900947</a>

              <a href="tel:+2348023242529">+234-8023242529</a>

              <a href="mailto:ops@crystalmarine.eu">ops@crystalmarine.eu</a>

              <a href="mailto:commercial@crystalmarine.eu">
                commercial@crystalmarine.eu
              </a>
            </div>
          </div>

          {/* Message */}
          <div className={styles.messageHeader}>
            <p>WE WOULD LOVE TO HEAR FROM YOU</p>
            <h2>MESSAGE US</h2>
            <span></span>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
