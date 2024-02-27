"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently studying at{" "}
        <span className="font-medium">Iskandhar School</span>. n 2021, I started working on Discord bots out of boredom,
        and{" "}
        <span className="font-medium">it has become a significant part of my life</span>.{" "}
        <span className="italic">My favorite part of working on discord bots</span> is the
        people and the feedback i get from users who uses my bots. I <span className="underline">love</span> the
        feeling of finally finishing a discord bot after working on it for months. My core stack
        is{" "}
        <span className="font-medium">
          JavaScript, Sapphire Framework and MongoDB
        </span>
        . I am also familiar with making discord bots with TypeScript. I am always looking to
        learn new technologies. I am currently forcusing on making{" "}
        <span className="font-medium">discord bots</span> and just study harder
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and hanging out with my friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">more stuff and just working on more bots</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
