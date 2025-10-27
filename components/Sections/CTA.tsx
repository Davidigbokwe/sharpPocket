// components/Sections/CTA.tsx
import { motion } from 'framer-motion';

export const CTA = () => (
  <section id="contact" className="w-full py-12 px-4 bg-gradient-to-r from-gray-50 to-indigo-50/30">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 p-6 sm:p-8"
      >
        <div className="flex flex-col lg:flex-row lg:flex-nowrap items-start lg:items-center justify-between gap-6 lg:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full lg:flex-1 min-w-0"
          >
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
            </div>

            <div className="min-w-0">
              <p className="text-sm text-gray-600 font-medium mb-1">Contact us</p>
              <a
                href="mailto:support@hallatechnologies.com"
                className="text-lg md:text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-200 group break-words sm:break-normal min-w-0"
              >
                support@hallatechnologies.com
                <span className="block w-0 group-hover:w-full h-0.5 bg-indigo-600 transition-all duration-300"></span>
              </a>
            </div>
          </motion.div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full lg:w-auto lg:flex-none"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx={12} cy={12} r={10} />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>

            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">Response time</p>
              <div className="flex items-center gap-2">
                <div className="text-lg font-semibold text-gray-900">Within 24 hours</div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-auto lg:flex-none lg:pl-4 flex-shrink-0"
          >
            <motion.a
              href="mailto:support@hallatechnologies.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Message
            </motion.a>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 pt-6 border-t border-gray-100 text-center"
        >
          <p className="text-sm text-gray-500">
            💬 Need help? Our support team is here to assist you with any questions or issues.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);