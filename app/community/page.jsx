import styles from "./Community.module.css";

export default function CommunityPage() {
  return (
    <main className={styles.communityPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <p className={styles.heroSubtitle}>OUR COMMUNITY</p>

          <h1>Corporate Social Responsibility</h1>

          <p>
            Building stronger communities through innovation, collaboration and
            responsible business.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <p className={styles.sectionLabel}>
              CORPORATE SOCIAL RESPONSIBILITY
            </p>

            <h2>Creating a Positive Impact Beyond Business</h2>

            <p>
              At Crystal Marine Limited, we pride ourselves in promoting
              innovation and integrating business in the community. At the core
              of Crystal’s business lies the commitment to promote good
              corporate citizenship.
            </p>

            <p>
              We believe that responsible business goes beyond delivering
              quality services. It also means contributing positively to the
              communities in which we operate and creating opportunities that
              generate lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* COMMUNITY & BUSINESS */}
      <section className={styles.communitySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>OUR APPROACH</p>

            <h2>Integrating Community and Business</h2>

            <p>
              We integrate the community and business through meaningful
              initiatives that support people, encourage innovation and create
              sustainable value.
            </p>
          </div>

          <div className={styles.cards}>
            {/* CHARITY */}
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <span>01</span>
              </div>

              <div className={styles.cardContent}>
                <h3>Charity</h3>

                <p>
                  We provide skills and funding for the community, in order to
                  impact society through social programs.
                </p>

                <p>
                  We engage in corporate philanthropy and sponsorship,
                  supporting initiatives that help improve lives and create
                  opportunities within our communities.
                </p>
              </div>
            </article>

            {/* VALUE CREATION */}
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <span>02</span>
              </div>

              <div className={styles.cardContent}>
                <h3>Value Creation</h3>

                <p>
                  We ensure that we impact society with innovation and
                  sustainable business models.
                </p>

                <p>
                  This enables shared value in our business with other
                  institutions and the communities, creating opportunities for
                  meaningful and sustainable development.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className={styles.commitmentSection}>
        <div className={styles.container}>
          <div className={styles.commitment}>
            <p className={styles.sectionLabel}>OUR COMMITMENT</p>

            <h2>Building a Better Future Together</h2>

            <p>
              Our commitment to corporate social responsibility reflects our
              belief that sustainable business growth and positive community
              impact can go hand in hand.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
