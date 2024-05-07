"use client";

import Heading from "./Heading";
import Descriptions from "./Descriptions";
import Resume from "./Resume";
import Contact from "./Contact";

import { useInView } from "react-intersection-observer";
import { useNavigation } from "@/stores/useNavigation";
import { useEffect } from "react";

export default function Homepage() {
  const setActive = useNavigation((store) => store.setActive);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setActive("#home");
    }
  }, [inView, setActive]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-svh min-h-[475px] w-full px-8 pt-[75px] md:px-16"
    >
      <Heading />
      <Descriptions />
      <Resume />
      <Contact />
    </section>
  );
}
