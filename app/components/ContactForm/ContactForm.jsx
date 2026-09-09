"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error.message || "Unable to send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">Phone Number</label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="subject">Subject</label>

          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Message subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          name="message"
          rows="7"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className={styles.submitButton} disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && <p className={styles.status}>{status}</p>}
    </form>
  );
}
