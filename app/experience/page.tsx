'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Experience() {
  return (
    <main className="min-h-screen bg-[#141311] p-6">
      <Navbar />

      <div className="container mx-auto max-w-screen-xl mt-32">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-[344px] lg:sticky lg:top-32"
          >
            <div className="profile-card bg-white rounded-3xl p-8 sm:p-6 shadow-lg flex flex-col items-center">
              <div className="relative w-40 h-40 sm:w-32 sm:h-32 mb-8 sm:mb-6">
                <Image
                  src="/personal-website/profile-placeholder.jpeg"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                  priority
                  sizes="(max-width: 768px) 128px, 160px"
                  loading="eager"
                />
              </div>
              <div className="flex space-x-2">
                <h2 className="text-4xl sm:text-3xl font-bold mb-3 text-black">Prateek</h2>
                <h2 className="text-4xl sm:text-3xl font-bold mb-6 text-black">Sharma</h2>
              </div>
              <div className="text-gray-600 mb-8 sm:mb-6 text-center">
                <p className="text-lg sm:text-base">Presales Engineer</p>
                <p className="text-lg sm:text-base">Product Manager</p>
              </div>
              
              <div className="linkedin-button w-52 sm:w-44">
                <a 
                  href="https://www.linkedin.com/in/prateek-sharma-70326b181/" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="group relative inline-flex w-full bg-[#0077b5] text-white px-4 py-3 rounded-lg font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <div className="flex items-center justify-center w-full space-x-2">
                    <svg className="w-6 h-6 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="text-base sm:text-sm">Let's Connect</span>
                  </div>
                </a>
              </div>

              <div className="social-links flex gap-8 sm:gap-6 mt-10 sm:mt-8">
                <a 
                  href="https://prateek-portfolio.notion.site/Product-Portfolio-1a4fba86851c803b9088db0ae03129de?pvs=4" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-black"
                >
                  <svg className="w-7 h-7 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/prateek.shawarma/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-black"
                >
                  <svg className="w-7 h-7 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:sharma.prateek362@gmail.com" 
                  className="text-gray-600 hover:text-black"
                >
                  <svg className="w-7 h-7 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:flex-1">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="mb-8 sm:mb-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 sm:gap-2">
                    <h1 className="text-[clamp(2rem,8vw,5rem)] font-bold text-white leading-none">2 YEARS OF</h1>
                    <span className="text-[#CCFF00] text-[clamp(2rem,8vw,5rem)]">*</span>
                  </div>
                  <h2 className="text-[clamp(2rem,8vw,5rem)] font-bold text-[#B6B4BD] leading-none">EXPERIENCE</h2>
                </div>
                <div className="mt-4 mb-8 sm:mb-6">
                  <a 
                    href="/personal-website/Prateek%20Sharma_Resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 sm:px-4 sm:py-2 rounded-lg font-medium shadow-[4px_4px_0px_0px_rgba(204,255,0,1)] hover:shadow-none transition-all hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <span className="text-base sm:text-sm">Check Resume</span>
                  </a>
                </div>
              </div>

              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="space-y-6"
              >
                <div className="experience-card p-8 sm:p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-bold text-white">Zelarsoft</h3>
                        <p className="text-base text-gray-500">Presale Engineer</p>
                      </div>
                      <p className="text-gray-400 mt-3 max-w-2xl text-base">
                        End-to-end sales, crafted landing pages, sales collaterals, RFPs and SOWs
                      </p>
                      <p className="text-gray-500 mt-3 text-sm">Jul 2023 - Oct 2024</p>
                    </div>
                  </div>
                </div>

                <div className="experience-card p-8 sm:p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl sm:text-xl font-bold text-white">Dell Technologies</h3>
                    <p className="text-lg sm:text-base text-[#B6B4BD]">
                      <span className="hidden sm:inline">Associate Sales Engineer Analyst</span>
                      <span className="sm:hidden">ASEA</span>
                    </p>
                    <p className="text-base sm:text-sm text-gray-400">Jan 2022 - Jul 2022</p>
                    <p className="text-base sm:text-sm text-gray-300 mt-2">
                      Developed Best-fit solutions from Dell's server portfolio based on client requirements
                    </p>
                  </div>
                </div>

                <div className="experience-card p-8 sm:p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-bold text-white">DRDO</h3>
                        <p className="text-base text-gray-500">Student Intern</p>
                      </div>
                      <p className="text-gray-400 mt-3 max-w-2xl text-base">
                        Made a Portal to save test data on local host
                      </p>
                      <p className="text-gray-500 mt-3 text-sm">Jun 2021 - Jul 2021</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 