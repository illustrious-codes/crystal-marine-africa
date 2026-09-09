import styles from "./CSR.module.css";

export default function CSRPage() {
  return (
    <main className={styles.csrPage}>
      {/* =========================
          HERO
      ========================= */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <p className={styles.heroLabel}>OUR COMMITMENT</p>

          <h1>Corporate Social Responsibility</h1>

          <p>
            Creating positive impact through innovation, responsible business
            and community development.
          </p>
        </div>
      </section>

      {/* =========================
          INTRODUCTION
      ========================= */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introTitle}>
              <p className={styles.sectionLabel}>
                CORPORATE SOCIAL RESPONSIBILITY
              </p>

              <h2>
                Responsible Business.
                <br />
                Positive Impact.
              </h2>
            </div>

            <div className={styles.introText}>
              <p>
                At Crystal Marine Limited, we pride ourselves in promoting
                innovation and integrating business in the community. At the
                core of Crystal&apos;s business lies the commitment to promote
                good corporate citizenship.
              </p>

              <p>
                We believe that a successful business should contribute
                positively to the communities around it. Through our
                initiatives, we seek to create meaningful opportunities while
                supporting sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          COMMUNITY & BUSINESS
      ========================= */}
      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>OUR APPROACH</p>

            <h2>Integrating Community and Business</h2>

            <p>
              We integrate the community and business through initiatives
              designed to create meaningful social and economic value.
            </p>
          </div>

          <div className={styles.cards}>
            {/* CHARITY */}
            <article className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>01</span>

                <div className={styles.cardIcon}>♡</div>
              </div>

              <h3>Charity</h3>

              <div className={styles.line}></div>

              <p>
                We provide skills and funding for the community, in order to
                impact the society via social programs.
              </p>

              <p>
                We engage in corporate philanthropy and sponsorship, supporting
                initiatives that make a meaningful difference in the communities
                where we operate.
              </p>
            </article>

            {/* VALUE CREATION */}
            <article className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>02</span>

                <div className={styles.cardIcon}>◆</div>
              </div>

              <h3>Value Creation</h3>

              <div className={styles.line}></div>

              <p>
                We ensure that we impact society with innovation and sustainable
                business models.
              </p>

              <p>
                This enables shared value in our business with other
                institutions and the communities, creating opportunities for
                sustainable growth and development.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
          CSR PRINCIPLE
      ========================= */}
      <section className={styles.principleSection}>
        <div className={styles.container}>
          <div className={styles.principleBox}>
            <div className={styles.principleNumber}>02</div>

            <div className={styles.principleContent}>
              <p className={styles.sectionLabel}>OUR PRINCIPLE</p>

              <h2>Creating Shared Value</h2>

              <p>
                Our approach to corporate social responsibility is built around
                the belief that business growth and community development can
                work together. By promoting innovation and sustainable business
                practices, we create shared value for our business, institutions
                and the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CLOSING
      ========================= */}
      <section className={styles.closingSection}>
        <div className={styles.closingOverlay}>
          <p className={styles.closingLabel}>CRYSTAL MARINE LIMITED</p>

          <h2>Business With Purpose</h2>

          <p>
            Promoting innovation. Supporting communities. Creating lasting
            value.
          </p>
        </div>
      </section>
    </main>
  );
}
