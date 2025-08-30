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
          form.reset();
        },
        (error) => {
          console.error(error);
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
        className="p-2 border rounded-lg border-[#FFDD55]"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="p-2 border border-[#FFDD55] rounded-lg"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="focus:border-[#FFDD55] p-2 border-2 border-solid rounded-lg border-[#FFDD55] h-30 resize-none overflow-auto scrollbox"
        required
      ></textarea>

      <button
        type="submit"
        className="bg-[#FFDD55] hover:bg-[#edce4e] xl:mt-8 text-black p-2 text-bold rounded-lg disabled:cursor-not-allowed  cursor-pointer"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
