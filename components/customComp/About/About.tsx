"use client";

import Profile from "./Profile";
import Contacts from "./Contacts";
import Skills from "./Skills";

import { useInView } from "react-intersection-observer";
import { useNavigation } from "@/stores/useNavigation";
import { useEffect } from "react";

export default function About() {
  const setActive = useNavigation((store) => store.setActive);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setActive("#about");
    }
  }, [inView, setActive]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full px-16 pb-16 max-md:flex-col max-md:px-4"
    >
      <Profile />
      <Contacts />
      <Skills />
    </section>
  );
}
