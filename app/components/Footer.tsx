'use client';

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col items-center gap-2">
          <div className="text-gray-400 text-sm flex items-center gap-2">
            Made with <span className="text-red-500">❤️</span> by Prateek
          </div>
          <div className="text-gray-500 text-xs">
            <span className="italic">and a bit of AI</span> :p
          </div>
        </div>
      </div>
    </footer>
  );
} 