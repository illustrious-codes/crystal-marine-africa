import styles from "./AboutUs.module.css";

export default function AboutUsPage() {
  return (
    <main className={styles.aboutPage}>
      {/* =========================
          HERO
      ========================= */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <p className={styles.heroSubtitle}>ABOUT CRYSTAL MARINE</p>

          <h1>Who We Are</h1>

          <p>
            Delivering safe, reliable and world-class maritime services across
            Africa.
          </p>
        </div>
      </section>

      {/* =========================
          WHO WE ARE
      ========================= */}
      <section className={styles.whoSection}>
        <div className={styles.container}>
          <div className={styles.whoGrid}>
            <div className={styles.whoContent}>
              <p className={styles.sectionLabel}>WHO WE ARE</p>

              <h2>Excellence in Maritime Services</h2>

              <p>
                CRYSTAL MARINE was incorporated in 2019 with the aim to provide
                world class maritime services in Africa such as mooring
                coordination and pilotage services in accordance to MARPOL &
                OCIMF guidelines using international certified mooring masters.
              </p>

              <p>
                Our main focus in the marine industry is the provision of
                standard mooring operations such as the Ship to Ship (STS)
                transfer operations, river pilotage, mooring master services
                using certified and compliant STS equipment and providing
                bespoke maritime services.
              </p>

              <p>
                Bringing a combined experience of over 15 years of international
                STS expertise, upstream marine services and shipping, we are
                committed to offering our clients outstanding services during
                operations.
              </p>

              <p>
                We provide 24 hours operational support to the maritime
                industry. Our round the clock service ensures that our clients
                receive regular and precise updates and close monitoring of all
                operations.
              </p>
            </div>

            <div className={styles.whoImage}>
              <img
                src="/images/gallery/g2.jpg"
                alt="Crystal Marine maritime operations"
              />

              <div className={styles.experienceBadge}>
                <strong>15+</strong>
                <span>Years Combined Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          VISION
      ========================= */}
      <section className={styles.visionSection}>
        <div className={styles.container}>
          <div className={styles.visionContent}>
            <div className={styles.number}>01</div>

            <div>
              <p className={styles.sectionLabel}>OUR VISION</p>

              <h2>Vision</h2>

              <p>
                We aim to be the foremost STS and marine service company in
                Africa promoting continuous improvements in the standards of
                mooring coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          MISSION
      ========================= */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <div className={styles.number}>02</div>

            <div>
              <p className={styles.sectionLabel}>OUR MISSION</p>

              <h2>Mission</h2>

              <p>
                At Crystal Marine, we are deeply committed to the provision of
                safe, reliable and efficient operations onshore and offshore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CORE VALUES
      ========================= */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>WHAT GUIDES US</p>

            <h2>Core Values</h2>

            <p>
              Our people, professionalism and commitment to safety are at the
              heart of everything we do.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            <article className={styles.valueCard}>
              <div className={styles.valueNumber}>01</div>

              <h3>Professionalism</h3>

              <p>
                Using highly skilled and experienced personnel to deliver
                crystal clear professional services with integrity.
              </p>
            </article>

            <article className={styles.valueCard}>
              <div className={styles.valueNumber}>02</div>

              <h3>Integrity</h3>

              <p>
                We conduct our business with honesty, integrity and transparency
                while putting our clients first.
              </p>
            </article>

            <article className={styles.valueCard}>
              <div className={styles.valueNumber}>03</div>

              <h3>Safety First</h3>

              <p>
                Safety comes first at Crystal Marine. We ensure quality, healthy
                and safe environments for our operations, clients and employees.
              </p>
            </article>

            <article className={styles.valueCard}>
              <div className={styles.valueNumber}>04</div>

              <h3>Client Satisfaction</h3>

              <p>
                We are committed to delivering reliable services that meet our
                clients’ specifications and exceed expectations.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
          THE TEAM
      ========================= */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.teamGrid}>
            <div className={styles.teamImage}>
              <img src="/images/gallery/g3.jpg" alt="Crystal Marine team" />
            </div>

            <div className={styles.teamContent}>
              <p className={styles.sectionLabel}>THE TEAM</p>

              <h2>Experienced People. Exceptional Service.</h2>

              <p>
                We have an international team made of focused and highly
                passionate individuals.
              </p>

              <p>
                We deliver services that cannot be competed with and tailored to
                suit our client’s specification. We put our clients first in all
                our businesses, delivering the best service with honesty and
                integrity.
              </p>

              <div className={styles.teamHighlight}>
                <span></span>

                <p>
                  Our people are driven by professionalism, experience and a
                  shared commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================= */}
      <section className={styles.excellenceSection}>
        <div className={styles.excellenceOverlay}>
          <p className={styles.sectionLabel}>CRYSTAL MARINE</p>

          <h2>Excellence in Marine Services</h2>

          <p>Safe. Reliable. Efficient.</p>
        </div>
      </section>
    </main>
  );
}
