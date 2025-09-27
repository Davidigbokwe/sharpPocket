import { motion } from 'framer-motion';
import { Button } from '../UI/Button';
import { FaApple, FaAndroid } from 'react-icons/fa';

export const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
  <div className="w-full text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Using Sharp Pocket Today</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">Available on Android and iOS</p>

          <div className="flex flex-row justify-center gap-4 flex-nowrap">
            <a
              href="https://play.google.com/store/apps/details?id=com.caribou97499.sharppocket&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <span className="flex items-center justify-center"><FaAndroid className="text-xl mr-2" /> Get on Android</span>
              </Button>
            </a>
            <a
              href="https://apps.apple.com/ng/app/sharp-pocket/id6748454121"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <span className="flex items-center justify-center"><FaApple className="text-xl mr-2" /> Get on iOS</span>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};