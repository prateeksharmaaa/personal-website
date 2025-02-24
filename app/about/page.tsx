'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-[#141311] p-6">
      <Navbar />
      
      <div className="container mx-auto max-w-screen-xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-32 md:p-8 sm:p-6"
        >
          <div className="flex gap-8 flex-col md:flex-row sm:gap-6">
            <div className="w-full md:w-1/3">
              <div className="relative w-full h-[400px] sm:h-[300px] hover:bg-[#CCFF00] transition-colors duration-300 rounded-lg p-2">
                <Image
                  src="/personal-website/about-me.jpg"
                  alt="About Me"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h1 className="text-[clamp(3rem,15vw,8rem)] font-bold text-white leading-none mb-8">
                About Me <span className="text-[#CCFF00]">*</span>
              </h1>
              
              <div className="space-y-8">
                <div>
                  <p className="text-lg mb-8 sm:text-base sm:mb-6 text-gray-400">
                    I am a creative, well-versed and an optimistic person. I love building new products and improving existing ones. 
                    One of my strengths is my ability to communicate with people and that has helped me throughout my professional 
                    and extra-curricular life thus far. It will always be my intention to use this gift of communication and creative 
                    thinking in my work.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl sm:text-xl font-bold mb-4 text-white">
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
        </motion.div>
      </div>
    </main>
  );
} 