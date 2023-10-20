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
        I continue to attend school at{" "}
        <span className="font-medium">Iskandhar School</span>, I made the decision
        to follow my programming passion. I gained knowledge of{" "}
        <span className="font-medium">full-stack web development</span> and learnt
        to code both independently and alongside others.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and i love to spend time with my friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am{" "}
        <span className="font-medium">thirteen years old</span> and in{" "}
        <span className="frot-medium">the seventh grade.</span> I'm also
        learning how to play the guitar for Lixm, Miky and Abha.
      </p>
    </motion.section>
  );
}
