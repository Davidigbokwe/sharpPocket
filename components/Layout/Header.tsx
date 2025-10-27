
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto max-w-6xl px-4 py-4 flex flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" aria-label="Go to home">
            <span className="w-40 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 cursor-pointer">
              <Image src="/sharp_pocket.png" alt="Sharp Pocket Logo" width={128} height={40} className="object-contain" />
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Home
          </a>
          <a href="/merchants" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Merchants
          </a>
          <a
            href="https://apps.apple.com/ng/app/sharp-pocket/id6748454121"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            <FaApple className="text-xl" />
            <span>App Store</span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.caribou97499.sharppocket&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            <FaGooglePlay className="text-xl" />
            <span>Play Store</span>
          </a>
          <a href="#contact" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium">
            <MdEmail className="text-xl" />
            <span>Contact</span>
          </a>
        </motion.div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 focus:outline-none"
          >
            {menuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto max-w-6xl px-4 py-4 flex flex-col space-y-3">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/merchants"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Merchants
            </a>
            <a
              href="https://apps.apple.com/ng/app/sharp-pocket/id6748454121"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <FaApple className="text-xl" />
              <span>App Store</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.caribou97499.sharppocket&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <FaGooglePlay className="text-xl" />
              <span>Play Store</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <MdEmail className="text-xl" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};