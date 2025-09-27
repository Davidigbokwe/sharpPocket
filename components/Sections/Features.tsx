import { motion } from 'framer-motion';
import { FEATURES } from '@/constants/data';
import { Feature } from '@/types';

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader 
          title="Everything You Need in One App"
          description="Sharp Pocket simplifies your financial transactions with an intuitive, secure platform."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, description }: { title: string; description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
  </motion.div>
);

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
  >
    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4">
      {feature.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
    <p className="text-gray-600">{feature.description}</p>
  </motion.div>
);