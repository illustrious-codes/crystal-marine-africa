import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero-ship.jpg"
        alt="Crystal Marine tanker underway at sunset"
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Crystal Marine</p>
        <h1 className={styles.headline}>
          Expanding Possibilities, Spearheading Excellence
        </h1>
        <div className={styles.actions}>
          <a href="/services" className={styles.primaryButton}>
            Our services
          </a>
          <a href="/contact-us" className={styles.secondaryButton}>
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
