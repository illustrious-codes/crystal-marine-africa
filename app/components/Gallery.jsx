"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

const GALLERY_IMAGES = [
  {
    src: "/images/gallery/g1.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g2.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g3.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g4.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g5.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g6.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g7.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g8.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g9.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g10.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g11.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g12.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g13.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g14.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g15.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g16.jpg",
    alt: "Crystal Marine tanker",
  },
  {
    src: "/images/gallery/g17.jpg",
    alt: "Crystal Marine tanker",
  },
];

const INTERVAL_MS = 3000;

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || GALLERY_IMAGES.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % GALLERY_IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div
          className={styles.frame}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.src}
              className={`${styles.slide} ${
                index === activeIndex ? styles.slideActive : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 1000px, 100vw"
                className={styles.image}
              />
            </div>
          ))}
        </div>

        {GALLERY_IMAGES.length > 1 && (
          <div className={styles.dots}>
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`${styles.dot} ${
                  index === activeIndex ? styles.dotActive : ""
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
