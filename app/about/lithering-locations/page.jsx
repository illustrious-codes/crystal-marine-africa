import Link from "next/link";
import styles from "./LighteringLocations.module.css";

export default function LighteringLocationsPage() {
  const locations = [
    {
      number: "01",
      name: "Lomé",
      country: "Togo",
    },
    {
      number: "02",
      name: "Tema",
      country: "Ghana",
    },
    {
      number: "03",
      name: "Douala",
      country: "Cameroon",
    },
    {
      number: "04",
      name: "Lagos",
      country: "Nigeria",
    },
  ];

  const oilFields = ["Erha", "Agbami", "Bonga", "Ajapa", "Forcados"];

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <p className={styles.heroLabel}>WHERE WE OPERATE</p>

          <h1>Lightering Locations</h1>

          <p>
            Delivering reliable marine services across key locations in Africa
            and beyond.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <p className={styles.sectionLabel}>LIGTHERING LOCATIONS</p>

              <h2>Our Operations Stretch Across Africa</h2>
            </div>

            <div className={styles.introText}>
              <p>
                Our operations stretch across strategic maritime locations in
                West and Central Africa, allowing us to provide reliable and
                efficient services to our clients.
              </p>

              <p>
                We are very innovative and focused on expanding our services to
                other locations in Africa and beyond its borders, in order to
                give our clients quality services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className={styles.locationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>OUR CURRENT LOCATIONS</p>

            <h2>Strategic Maritime Coverage</h2>
          </div>

          <div className={styles.locationGrid}>
            {locations.map((location) => (
              <article key={location.name} className={styles.locationCard}>
                <div className={styles.locationNumber}>{location.number}</div>

                <div>
                  <h3>{location.name}</h3>

                  <p>{location.country}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NIGERIA OIL FIELDS */}
      <section className={styles.oilFieldsSection}>
        <div className={styles.container}>
          <div className={styles.oilGrid}>
            <div className={styles.oilImage}>
              <img
                src="/images/gallery/g4.jpg"
                alt="Crystal Marine offshore operations"
              />
            </div>

            <div className={styles.oilContent}>
              <p className={styles.sectionLabel}>NIGERIA OIL FIELDS</p>

              <h2>Supporting Offshore Operations</h2>

              <p>
                We provide support to operations across Nigeria&apos;s major oil
                fields using our support crafts.
              </p>

              <div className={styles.fieldList}>
                {oilFields.map((field) => (
                  <div key={field} className={styles.fieldItem}>
                    <span>✓</span>
                    {field}
                  </div>
                ))}
              </div>

              <p className={styles.oilNote}>
                Our support crafts enable us to provide dependable marine
                assistance across these operational areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OCIMF */}
      <section className={styles.ocimfSection}>
        <div className={styles.container}>
          <div className={styles.ocimfContent}>
            <div className={styles.ocimfNumber}>01</div>

            <div>
              <p className={styles.sectionLabel}>OPERATIONAL STANDARD</p>

              <h2>Committed to OCIMF Guidelines</h2>

              <p>
                All Crystal Marine operations are carried out in strict
                accordance with OCIMF guidelines, in an efficient manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>OUR LOCATION</p>

            <h2>Find Our Lagos Office</h2>

            <p>57b Oyinkan Abayomi Dr, Ikoyi, Lagos 106104, Lagos, Nigeria</p>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps?q=57b+Oyinkan+Abayomi+Dr,+Ikoyi,+Lagos+106104,+Lagos,+Nigeria&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Crystal Marine Lagos Office Location"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaOverlay}>
          <p className={styles.ctaLabel}>NEED MARINE SERVICES?</p>

          <h2>Looking for Services Outside Our Current Base?</h2>

          <p>
            For further requirements on any location outside our current base or
            to request for alternatives, send your enquiry to our operations
            team.
          </p>

          <div className={styles.ctaButtons}>
            <a
              href="mailto:ops@crystalmarine.eu"
              className={styles.primaryButton}
            >
              Email Our Team
            </a>

            <Link href="/contact-us" className={styles.secondaryButton}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
