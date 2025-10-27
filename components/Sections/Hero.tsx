
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../UI/Button';
import { MdEmail } from 'react-icons/md';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Pocket-Sized <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Payment Power</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              With Sharp Pocket, pay bills, buy airtime and data, settle electricity, and send or withdraw money—fast, simple, and secure.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {/* <a href="#contact" className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors font-medium">
                <MdEmail className="text-xl" />
                <span>Contact</span>
              </a> */}
              <a
                href="https://apps.apple.com/ng/app/sharp-pocket/id6748454121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-black text-white shadow-md hover:shadow-lg transition-all"
              >
                <FaApple className="text-xl" />
                <span className="font-medium">App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.caribou97499.sharppocket&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-black text-white shadow-md hover:shadow-lg transition-all"
              >
                <FaGooglePlay className="text-xl" />
                <span className="font-medium">Play Store</span>
              </a>
            </div>
          </motion.div>
          
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};

const PhoneMockup = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="lg:w-1/2 flex justify-center"
  >
    <div className="relative">
      <div className="w-80 h-[26rem] bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl shadow-2xl flex items-center justify-center">
        <div className="w-64 h-[21rem] bg-white rounded-2xl shadow-lg p-4">
          <div className="flex justify-between items-center mb-6">
            <div className="w-40 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 overflow-hidden">
              <Image src="/sharp_pocket.png" alt="Sharp Pocket Logo" width={128} height={40} className="object-contain" />
            </div>
          </div>
          
          <div className="space-y-4">
            <AppFeature icon="💳" title="Pay Bills" description="Handle all your payments" />
            <AppFeature icon="⚡" title="Electricity" description="Top up quickly" />
            <AppFeature icon="📱" title="Airtime & Data" description="Recharge instantly" />
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-2 rounded-lg">
            Scan to Pay
          </div>
        </div>
      </div>
      
      <FloatingElement
        animation={{ y: [0, -10, 0] }}
        className="absolute -top-4 -right-4 w-16 h-16 bg-purple-200"
        icon="💸"
        size="text-2xl"
      />
      
      <FloatingElement
        animation={{ y: [0, 10, 0] }}
        delay={1}
        className="absolute -bottom-4 -left-4 w-12 h-12 bg-indigo-200"
        icon="🔒"
        size="text-xl"
      />
    </div>
  </motion.div>
);

const AppFeature = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-gray-100 rounded-lg p-3 flex items-center">
    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
      <span className="text-purple-600">{icon}</span>
    </div>
    <div>
      <div className="font-medium text-gray-800">{title}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </div>
  </div>
);

const FloatingElement = ({ 
  animation, 
  delay = 0, 
  className, 
  icon, 
  size 
}: { 
  animation: any; 
  delay?: number; 
  className: string; 
  icon: string; 
  size: string; 
}) => (
  <motion.div 
    animate={animation}
    transition={{ duration: 3, repeat: Infinity, delay }}
    className={`${className} rounded-full flex items-center justify-center shadow-lg`}
  >
    <span className={size}>{icon}</span>
  </motion.div>
);