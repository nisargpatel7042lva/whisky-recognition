import React from 'react';
import { motion } from 'framer-motion';
import { Wine, Award, Shield, Scan } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-secondary-800 dark:text-secondary-100">
            About BAXUS
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Revolutionizing the way collectors identify and authenticate fine spirits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card-glass">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Wine className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-xl font-display font-semibold mb-2">Extensive Collection</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Our database includes over 500 premium spirits, featuring rare and collectible bottles from renowned distilleries worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="card-glass">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Scan className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-xl font-display font-semibold mb-2">Advanced Recognition</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Utilizing state-of-the-art computer vision technology to accurately identify bottles from photos with high confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-glass mb-12">
          <h2 className="text-2xl font-display font-bold mb-6 text-center">Our Technology</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg">
                <Shield className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Authentication Guarantee</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Every bottle in our database is verified and authenticated by industry experts, ensuring reliable identification results.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg">
                <Award className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Premium Collection</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Our database includes rare and collectible spirits from prestigious distilleries, with detailed information about each bottle.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-neutral-600 dark:text-neutral-400">
            For business inquiries or partnership opportunities, please contact us at{' '}
            <a href="mailto:contact@baxus.com" className="text-primary-600 dark:text-primary-400 hover:underline">
              contact@baxus.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;