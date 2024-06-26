"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { BsCheck2Circle } from "react-icons/bs";
import CardContainer from "./CardContainer";
import emailjs from "@emailjs/browser";

import { useInView } from "react-intersection-observer";
import { useNavigation } from "@/stores/useNavigation";
import { useEffect } from "react";
import { BiXCircle } from "react-icons/bi";

export default function GetInTouch() {
  const [sent, setSent] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const setActive = useNavigation((store) => store.setActive);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) setActive("#contact");
  }, [inView, setActive]);

  async function sendEmail(e: FormEvent<HTMLFormElement>) {
    if (loading) return;
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const publickey = process.env.NEXT_PUBLIC_PBK!;

    try {
      setLoading(true);
      setSent(false);
      setError(false);

      emailjs
        .sendForm(serviceId, templateId, form, {
          publicKey: publickey,
        })
        .then(() => {
          setLoading(false);
          setSent(true);
          setError(false);
          console.log("Message sent");
        });
    } catch (error) {
      console.log("Failed to send message ");
      setLoading(false);
      setSent(false);
      setError(true);
    }
  }

  return (
    <CardContainer className="mx-auto w-[95%] max-w-[750px]">
      <form
        id="form"
        ref={ref}
        onSubmit={sendEmail}
        className="space-y-6 p-4 text-lg"
      >
        <h3 id="contact" className="text-2xl">
          Get in touch
        </h3>

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
            required
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
            name="Send message"
            className={cn(
              "rounded-sm px-6 py-2 text-lg text-white dark:text-black max-[550px]:w-full",
              {
                "bg-primary": !loading,
                "cursor-not-allowed bg-primary/75": loading,
              },
            )}
          >
            {loading ? "Sending" : "Send Message"}
          </button>

          {sent && (
            <p className="flex items-center gap-2">
              <BsCheck2Circle />
              <span>Message sent!</span>
            </p>
          )}

          {error && (
            <p className="flex items-center gap-2">
              <BiXCircle />
              <span>Failed</span>
            </p>
          )}
        </div>
      </form>
    </CardContainer>
  );
}
