import styles from "./Careers.module.css";

export default function CareersPage() {
  return (
    <main className={styles.careersPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <p className={styles.heroLabel}>JOIN OUR TEAM</p>

          <h1>Careers</h1>

          <p>
            Explore opportunities to grow and build a career with Crystal Marine
            Limited.
          </p>
        </div>
      </section>

      {/* CAREERS CONTENT */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentCard}>
            <div className={styles.icon}>✓</div>

            <p className={styles.sectionLabel}>CAREERS</p>

            <h2>There are currently no openings.</h2>

            <p className={styles.description}>
              Thank you for your interest in joining Crystal Marine Limited.
              There are currently no available vacancies within our
              organization.
            </p>

            <p className={styles.description}>
              We encourage you to check back regularly for future career
              opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER MESSAGE */}
      <section className={styles.closingSection}>
        <div className={styles.closingContent}>
          <p>CRYSTAL MARINE LIMITED</p>

          <h2>Building Excellence Together</h2>

          <span>
            We look forward to welcoming talented professionals in the future.
          </span>
        </div>
      </section>
    </main>
  );
}
