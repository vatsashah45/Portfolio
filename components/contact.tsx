"use client";

import { useRef } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Get in touch</h2>
      <details className="contact-details">
        <summary className="text-link">Send a message</summary>
        <form ref={form} action={async (formData) => {
          try {
            const { error } = await sendEmail(formData);
            if (error) { toast.error(error); return; }
            toast.success("Email sent successfully!");
            form.current?.reset();
          } catch {
            toast.error("Unable to send your message. Please try again.");
          }
        }}>
          <label htmlFor="senderEmail">Your email</label>
          <input id="senderEmail" name="senderEmail" type="email" autoComplete="email" required maxLength={500} placeholder="you@example.com" />
          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message" required maxLength={5000} rows={5} placeholder="Hello Vatsa…" />
          <SubmitBtn />
        </form>
      </details>
    </section>
  );
}
