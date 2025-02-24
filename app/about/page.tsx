'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-[#141311] p-6">
      <Navbar />

      <div className="container mx-auto max-w-5xl mt-32">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <h1 className="text-[clamp(3rem,15vw,8rem)] font-bold text-white leading-none">About Me</h1>
            <span className="text-[#CCFF00] text-[clamp(3rem,15vw,8rem)]">*</span>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-[280px]"
          >
            <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-3xl border-2 border-white overflow-hidden transition-colors duration-300 hover:border-[#CCFF00]">
              <Image
                src="/personal-website/about-me.jpg"
                alt="About Me"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 280px"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1 space-y-8 max-w-xl"
          >
            <p className="text-lg text-gray-400">
              I am a creative, well-versed and an optimistic person. I love building new products and improving existing ones. One of my strengths is my ability to communicate with people and that has helped me throughout my professional and extra-curricular life thus far. It will always be my intention to use this gift of communication and creative thinking in my work.
            </p>

            <div className="bg-[#1A1A1A] rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">I LOVE ❤️</h2>
              <p className="text-lg text-gray-400">
                Travelling, photography, football and discovering new music
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">GET IN TOUCH 📧</h2>
              <a 
                href="mailto:sharma.prateek362@gmail.com" 
                className="text-lg text-gray-400 hover:text-[#CCFF00] transition-colors"
              >
                sharma.prateek362@gmail.com →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 