import styles from "./Services.module.css";

const services = [
  {
    title: "TERMINAL MANAGEMENT & MARINE LOGISTICS",
    image: "/images/services/s1.jpg",
    description:
      "Crystal Marine provides a turnkey service for operations and management of onshore and offshore terminals.",
    items: [
      "River Pilotage",
      "Mooring Coordination",
      "Equipment hire (fenders, mooring ropes and hoses)",
      "Calm Bouy Services",
      "Anchor handling Tug Provision and Management",
    ],
  },
  {
    title: "MOORING COORDINATION",
    image: "/images/services/s2.jpg",
    description:
      "By utilizing the vast experience of our large pool of highly experienced mooring masters, we deliver high-quality operations in any environment. We structure contracts to suit the needs of our client's requirements depending on the type and frequency of berthing, and the size of the vessels involved.",
    items: [
      "Transferring dirty and clean petroleum products and chemicals",
      "Tanker loading/offloading in port and offshore",
      "Long term and ad-hoc contracts",
      "Handling vessels from handy size up to and including ULCC and VLCC",
      "Global experience",
      "Experienced in FPSO and FSO operations",
      "Available to give expert marine advice",
    ],
  },
  {
    title: "STS (SHIP-TO-SHIP)",
    image: "/images/services/s4.jpg",
    description:
      "A Ship to Ship (STS) transfer refers to the transfer of cargo between tanker vessels moored alongside each other. The operation may be conducted with both vessels at anchor or when both are underway. This is one of the safest operations.",
    paragraphs: [
      "At Crystal Marine, our operations are carried out in accordance with guidelines set out by the Oil Companies International Marine Forum (OCIMF) and the International Chamber of Shipping (ICS) for petroleum, chemicals and liquefied gases, with strictest adherence to safety regulations.",
      "Both the masters of the ships are responsible for the entire STS operation and it requires proper coordination.",
      "Crystal Marine prioritizes the use of credible and certified equipment and upon the receipt of nomination and acceptance by the operations team which is available 24/7, contact is established with the participating parties to ensure that operations are conducted in accordance to OCIMF standards.",
      "We provide ship-to-ship (STS) services to the oil and shipping industries with our unmatched expertise in the marine industry using Yokohama Fenders and Hoses for all our STS Operations.",
      "Our transfers include variety of cargos including crude oil, white and black products, LPG, as well as bulk cargos.",
      "We can attend to operations at short notice offshore Lome, Duala, Tema, Nigeria and any other locations further afield using our support crafts.",
      "We are always proactive in order to find ways of expanding and improving our services, ensuring high quality and cost effectiveness.",
    ],
  },
  {
    title: "MARITIME CONSULTANCY",
    image: "/images/services/s3.jpg",
    description: "With our expertise we provide the following services:",
    items: [
      "Vessel Chattering",
      "Man power training",
      "Third party support services",
    ],
    email:
      "For Marine Consultancy Nominations kindly forward all communications to ops@crystalmarine.eu",
  },
];

export default function Services() {
  return (
    <main id="services" className={styles.servicesPage}>
      <section className={styles.hero}>
        <span>OUR SERVICES</span>

        <h1>
          Professional <strong>Marine Solutions</strong>
        </h1>

        <p>
          Delivering reliable marine logistics, vessel operations and
          consultancy services with safety, expertise and efficiency.
        </p>
      </section>

      <section className={styles.servicesContainer}>
        {services.map((service, index) => (
          <article className={styles.serviceCard} key={service.title}>
            <div className={styles.imageWrapper}>
              <img
                src={service.image}
                alt={service.title}
                className={styles.serviceImage}
              />
              <span className={styles.number}>0{index + 1}</span>
            </div>

            <div className={styles.serviceContent}>
              <h2>{service.title}</h2>

              <p className={styles.description}>{service.description}</p>

              {service.items && (
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>
                      <span>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {service.paragraphs && (
                <div className={styles.paragraphs}>
                  {service.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}

              {service.email && (
                <div className={styles.emailBox}>
                  <strong>Marine Consultancy Nominations</strong>
                  <p>{service.email}</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
