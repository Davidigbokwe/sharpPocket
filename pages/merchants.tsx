import Head from 'next/head';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { MERCHANT_STEPS } from '@/constants/data';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay, FaArrowRight, FaMobileAlt } from 'react-icons/fa';
import Image from 'next/image';

function MobileSignupControls() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 items-center">
      <div ref={ref} className="relative">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setOpen(o => !o)}
          aria-haspopup="true"
          aria-expanded={open}
          className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaMobileAlt className="text-2xl" />
          <span className="font-semibold">Sign up on mobile</span>
        </motion.button>

        {open && (
          <div role="menu" aria-label="Sign up on mobile options" className="absolute left-0 mt-2 w-64 bg-white text-gray-900 rounded-lg border shadow-lg z-50">
            <a
              role="menuitem"
              href="https://apps.apple.com/ng/app/sharp-pocket/id6748454121"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sign up on iOS (App Store)"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              <FaApple className="text-lg" />
              <span>iOS (App Store)</span>
            </a>
            <a
              role="menuitem"
              href="https://play.google.com/store/apps/details?id=com.caribou97499.sharppocket&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sign up on Android (Play Store)"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              <FaGooglePlay className="text-lg" />
              <span>Android (Play Store)</span>
            </a>
          </div>
        )}
      </div>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://sharp-pocket-phi.vercel.app/login"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sign up on web"
        className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <span className="font-semibold">Sign up on web</span>
        <FaArrowRight className="text-sm" />
      </motion.a>
    </div>
  );
}

export default function MerchantsPage() {
  return (
    <>
      <Head>
        <title>Sharp Pocket – Merchants</title>
        <meta name="description" content="Accept payments with QR, get paid to your bank, and manage transactions effortlessly." />
        <link rel="icon" href="/sharp_pocket.png" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <main className="pt-28 pb-20 px-4">
          <section className="container mx-auto max-w-6xl">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  For <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Merchants</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Get set up in minutes. Generate a QR, display it, and receive payments straight to your bank.
                </p>
                <MobileSignupControls />
              </div>
            </motion.div>

            {/* Steps Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to start accepting payments</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {MERCHANT_STEPS.map((step, index) => (
                  <motion.div
                    key={step.step}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex items-center justify-center font-bold mb-6 text-lg shadow-lg">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      
                      {/* Connector line between steps */}
                      {index < MERCHANT_STEPS.length - 1 && (
                        <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
                          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                            <div className="w-4 h-4 border-2 border-purple-400 rounded-full bg-white"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* QR Code Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-5"></div>
              <div className="relative bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>
                
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your QR Code is Ready</h2>
                    <p className="text-gray-600 mb-2 text-lg">Scan & Pay</p>
                    <p className="text-gray-500 mb-8 max-w-md">Display your unique QR code and start accepting payments instantly.</p>
                    <MobileSignupControls />
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl blur-md opacity-20"></div>
                      <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                        <div className="w-64 h-64 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
                          <Image 
                            src="/qr_code.svg" 
                            alt="Merchant QR code" 
                            width={256} 
                            height={256} 
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}