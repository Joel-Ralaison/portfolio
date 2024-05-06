"use client";

import { cn } from "@/lib/utils";
import { BsCheck2Circle } from "react-icons/bs";
import { type FormEvent, useState } from "react";
import CardContainer from "./CardContainer";
import emailjs from "@emailjs/browser";

import { useInView } from "react-intersection-observer";
import { useNavigation } from "@/stores/useNavigation";
import { useEffect } from "react";

export default function GetInTouch() {
  const [sent, setSent] = useState<boolean | null>(null);
  const setActive = useNavigation((store) => store.setActive);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setActive("#contact");
    }
  }, [inView, setActive]);

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const publickey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

    try {
      emailjs
        .sendForm(serviceId, templateId, form, {
          publicKey: publickey,
        })
        .then(() => {
          setSent(true);
          console.log("Message sent");
        });
    } catch (error) {
      setSent(false);
      console.log("Failed to send message ");
    }

    form.reset();
  }

  return (
    <CardContainer className="mx-auto w-[95%] max-w-[750px]">
      <form
        id="form"
        ref={ref}
        onSubmit={sendEmail}
        className="space-y-6 px-4 py-6 text-lg"
      >
        <h3 id="contact">Get in touch</h3>

        <div className="flex gap-6 max-md:flex-col">
          <input
            className="flex-2 border-b-2 border-neutral-400 bg-transparent pl-2 outline-none placeholder:text-neutral-400 dark:border-neutral-600 dark:placeholder:text-neutral-600"
            type="text"
            aria-label="name"
            placeholder="Your name"
            id="userName"
            name="userName"
          />

          <input
            className="flex-1 border-b-2 border-neutral-400 bg-transparent pl-2 outline-none placeholder:text-neutral-400 dark:border-neutral-600 dark:placeholder:text-neutral-600"
            type="email"
            aria-label="email"
            placeholder="Your email"
            id="userEmail"
            name="userEmail"
          />
        </div>

        <textarea
          className="w-full border-b-2 border-neutral-400 bg-transparent pl-2 outline-none placeholder:text-neutral-400 dark:border-neutral-600 dark:placeholder:text-neutral-600"
          placeholder="Your message"
          aria-label="message"
          cols={50}
          rows={6}
          id="message"
          name="message"
        />

        <div className="flex items-center gap-2">
          <button
            type="submit"
            className={cn(
              "rounded-md px-4 py-2 text-lg max-[550px]:w-full",
              "border border-foreground bg-background text-foreground",
            )}
          >
            Send Message
          </button>

          {sent && (
            <p className="flex items-center gap-2">
              <BsCheck2Circle />
              <span>Message sent !</span>
            </p>
          )}
        </div>
      </form>
    </CardContainer>
  );
}
