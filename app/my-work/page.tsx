'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Title 1',
    description: 'One line description Title One line Description',
    imageUrl: '/path/to/image1.png', // Replace with actual image paths
  },
  {
    title: 'Title 2',
    description: 'One line description Title One line Description',
    imageUrl: '/path/to/image2.png',
  },
  // Add more projects as needed
];

export default function MyWork() {
  return (
    <main className="min-h-screen bg-[#141311] p-6">
      <h1 className="text-4xl text-white mb-8">My Work</h1>
      <section>
        <h2 className="text-2xl text-gray-300 mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-blue-500 rounded-lg p-4"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={200}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-white font-bold">{project.title}</h3>
              <p className="text-gray-200">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
} 