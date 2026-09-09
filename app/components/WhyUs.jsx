import { Award, Clock, Cpu, ShieldCheck, Ship, Users } from "lucide-react";
import styles from "./WhyUs.module.css";

// ---------------------------------------------------------------------------
// Crystal Marine — "Why us?" section
// Requires: npm install lucide-react (already installed for the navbar)
// ---------------------------------------------------------------------------

const REASONS = [
  {
    icon: Award,
    title: "We have over 15 years of marine experience",
    href: "https://crystalmarine-africa.com/#1497501806433-d7f319fd-0907",
    description:
      "Bringing a combined experience of over 15 years of international STS expertise, upstream marine services and shipping, we are committed to offering our clients outstanding services.",
  },
  {
    icon: Clock,
    title: "Round the clock operations and unmatched service delivery",
    href: "https://crystalmarine-africa.com/#1497501878002-212d57ef-23fd",
    description:
      "Our team are hands-on on every operation and are available 24 hours, 7 days a week.",
  },
  {
    icon: Cpu,
    title: "Innovative and technological driven",
    href: "https://crystalmarine-africa.com/#1497501876896-b3ca63ee-17eb",
    description:
      "We are well grounded in technologies relating to the marine and shipping industry, from our day to day operations to customer and project management.",
  },
  {
    icon: ShieldCheck,
    title: "Safety is our priority",
    href: "https://crystalmarine-africa.com/#1497501875799-d641cc76-1f8c",
    description:
      "For us safety comes first, therefore all our employees undergo HSSE (Health, Safety, Security and Environment) training from time to time.",
  },
  {
    icon: Ship,
    title: "Own tugboat fleet",
    href: "https://crystalmarine-africa.com/#1571406096689-c395d112-9c69",
    description: null,
  },
  {
    icon: Users,
    title: "Well trained and experienced personnel",
    href: "https://crystalmarine-africa.com/#1571406228849-1c9844f2-64e2",
    description: null,
  },
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Why us?</h2>
        <div className={styles.grid}>
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div className={styles.card} key={reason.title}>
                <div className={styles.iconWrap}>
                  <Icon className={styles.icon} aria-hidden="true" />
                </div>
                <b className={styles.title}>{reason.title}</b>
                {reason.description && (
                  <p className={styles.description}>{reason.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
