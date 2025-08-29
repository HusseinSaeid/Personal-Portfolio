"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);

  // نوع الفورم Inputs
  interface EmailFormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  interface EmailForm extends HTMLFormElement {
    readonly elements: EmailFormElements;
  }

  const sendEmail = (e: React.FormEvent<EmailForm>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_qmtfwtt", // ✅ Service ID
        "template_7xqi68i", // ✅ Template ID
        form,
        "A6LWQR9SOHpBBiaEY" // ✅ Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.reset();
        },
        (error) => {
          console.error(error);
          alert("⚠️ Failed to send message.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col gap-4 max-w-md mx-auto justify-between p-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="p-2 border rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="p-2 border rounded border-[#FFDD55]"
        required
      ></textarea>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2  rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
