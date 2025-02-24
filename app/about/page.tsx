'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-[#141311] p-6">
      <Navbar />

      <div className="container mx-auto max-w-screen-xl mt-32">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-[500px]"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl border-2 border-white overflow-hidden transition-colors duration-300 hover:border-[#CCFF00]">
              <Image
                src="/personal-website/about-me.jpg"
                alt="About Me"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
          </motion.div>

          <div className="w-full lg:flex-1">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold text-white leading-none">About Me</h1>
                <span className="text-[#CCFF00] text-[clamp(3rem,8vw,6rem)]">*</span>
              </div>

              <div className="space-y-8">
                <p className="text-xl sm:text-lg text-gray-300">
                  I am a creative, well-versed and an optimistic person. I love building new products and improving existing ones. One of my strengths is my ability to communicate with people and that has helped me throughout my professional and extra-curricular life thus far. It will always be my intention to use this gift of communication and creative thinking in my work.
                </p>

                <div className="bg-white/10 rounded-2xl p-8 sm:p-6">
                  <h2 className="text-2xl sm:text-xl font-bold text-white mb-6">I LOVE ❤️</h2>
                  <p className="text-xl sm:text-lg text-gray-300">
                    Travelling, photography, football and discovering new music
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-xl font-bold text-white mb-6">GET IN TOUCH 📧</h2>
                  <a 
                    href="mailto:sharma.prateek362@gmail.com" 
                    className="text-xl sm:text-lg text-gray-300 hover:text-[#CCFF00] transition-colors"
                  >
                    sharma.prateek362@gmail.com →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 