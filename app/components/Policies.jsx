import styles from "./Policies.module.css";

const policies = [
  {
    number: "01",
    title: "Health and Safety Policy",
    text: "Crystal Marine HSEQ state that Quality, Health and Safety at work and the Environment are important in preventing casualties, injuries and damage to both company and assets, surroundings.",
  },
  {
    number: "02",
    title: "Environmental Policy",
    text: "We recognize that it is our moral and legal responsibility to ensure that our operations are designed to protect the environment in the communities we operate in. And it is our obligation to ensure that our operations do not place the environment and community at a risk of harm. We take extra caution to avoid environmental pollution by constantly ensuring that all our operations are carried out in accordance to OCIMF standards and our equipment’s are maintained and certified before any operation.",
  },
  {
    number: "03",
    title: "Quality Assurance & Management Policy",
    text: "At Crystal Marine Limited, we engage in self-assessment in order to verify our safety management systems are sufficiently robust to help minimize all potential safety and environmental risk in the execution of our operations and to continuously improve our management system.",
  },
  {
    number: "04",
    title: "Weather Forecast Policy",
    text: "This policy is to ensure strict adherence as we understand the importance of conducting safe STS operations, hence the monitoring of the weather condition to ensure the safe implementation of our operations.",
  },
];

export default function Policies() {
  return (
    <main className={styles.policiesPage}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroSubtitle}>CRYSTAL MARINE HSEQ</span>

          <h1>
            Our <strong>Policies</strong>
          </h1>

          <p>
            Our commitment to quality, health, safety and environmental
            responsibility guides every operation we undertake.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.introduction}>
        <div className={styles.introductionContent}>
          <span className={styles.sectionLabel}>OUR COMMITMENT</span>

          <h2>
            Safety, Quality & <span>Environmental Responsibility</span>
          </h2>

          <p>
            Crystal Marine HSEQ state that Quality, Health and Safety at work
            and the Environment are important in preventing casualties, injuries
            and damage to both company and assets, surroundings.
          </p>
        </div>
      </section>

      {/* POLICIES */}
      <section className={styles.policiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>OUR POLICIES</span>

            <h2>
              Standards That <strong>Guide Us</strong>
            </h2>

            <p>
              We maintain strict policies to ensure that our operations are
              conducted safely, responsibly and to the highest professional
              standards.
            </p>
          </div>

          <div className={styles.policyGrid}>
            {policies.map((policy) => (
              <article className={styles.policyCard} key={policy.number}>
                <div className={styles.policyTop}>
                  <span className={styles.policyNumber}>{policy.number}</span>

                  <div className={styles.policyLine}></div>
                </div>

                <div className={styles.policyContent}>
                  <h3>{policy.title}</h3>

                  <p>{policy.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className={styles.closing}>
        <div className={styles.closingContent}>
          <span>CRYSTAL MARINE LIMITED</span>

          <h2>
            Committed to Safe & Responsible
            <strong> Marine Operations</strong>
          </h2>

          <p>
            Through continuous improvement, responsible practices and strict
            adherence to industry standards, we remain committed to protecting
            our people, our clients, our assets and the environment.
          </p>
        </div>
      </section>
    </main>
  );
}
