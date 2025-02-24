'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-[#141311] p-6 overflow-x-hidden">
      <Navbar />

      <div className="home-container mt-32">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[946px] mx-auto"
        >
          <div className="mb-16 sm:mb-12">
            <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold text-white leading-none mb-4">
              About Me <span className="text-[#CCFF00]">*</span>
            </h1>
            
            <div className="mt-12 space-y-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative rounded-lg overflow-hidden p-[3px] bg-white hover:bg-[#CCFF00] transition-colors duration-300">
                    <Image
                      src="/about-me.jpg"
                      alt="Prateek in mountains"
                      width={400}
                      height={500}
                      className="object-cover rounded-lg w-full h-[400px] sm:h-[300px]"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <p className="text-xl sm:text-lg text-gray-400 mb-8">
                    I am a creative, well-versed and an optimistic person. I love building new products and improving existing ones. One of my strengths is my ability to communicate with people and that has helped me throughout my professional and extra-curricular life thus far. It will always be my intention to use this gift of communication and creative thinking in my work.
                  </p>
                  
                  <div className="bg-white/5 rounded-2xl p-8 sm:p-6 hover:bg-white/10 transition-colors">
                    <h2 className="text-2xl sm:text-xl font-bold mb-4 text-white flex items-center gap-2">
                      I LOVE <span className="text-red-500">❤️</span>
                    </h2>
                    <p className="text-xl sm:text-lg text-gray-400">
                      Travelling, photography, football and discovering new music
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-8 sm:p-6 hover:bg-white/10 transition-colors mt-8">
                    <h2 className="text-2xl sm:text-xl font-bold mb-4 text-white flex items-center gap-2">
                      GET IN TOUCH <span className="text-blue-500">✉️</span>
                    </h2>
                    <a 
                      href="mailto:sharma.prateek362@gmail.com"
                      className="text-xl sm:text-lg text-gray-400 hover:text-[#CCFF00] transition-colors inline-flex items-center gap-2"
                    >
                      sharma.prateek362@gmail.com
                      <span className="text-xl">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 