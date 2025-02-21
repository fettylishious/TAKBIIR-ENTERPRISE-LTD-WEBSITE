import { HeroSlider } from '../components/home/HeroSlider';
import { motion } from 'framer-motion';
import { Truck, Package, Warehouse, Globe, Clock } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Home() {
  return (
    <div>
      <HeroSlider />

      {/* Stats Section */}
      <motion.section
        className="py-12 bg-orange-500 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-white/80">Deliveries Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-white/80">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">88%</div>
              <div className="text-white/80">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              {
                title: "Road Transport",
                description: "Efficient and reliable road transportation services across the country.",
                icon: <Truck className="h-12 w-12 text-orange-500" />
              },
              {
                title: "Warehousing",
                description: "Secure storage solutions with modern facility management.",
                icon: <Warehouse className="h-12 w-12 text-orange-500" />
              },
              {
                title: "Supply Chain",
                description: "End-to-end supply chain management and optimization.",
                icon: <Package className="h-12 w-12 text-orange-500" />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              {
                title: "Reliable Service",
                description: "Consistent and dependable logistics solutions you can count on.",
                icon: <Clock className="h-8 w-8 text-orange-500" />
              },
              {
                title: "Global Network",
                description: "Extensive network covering major global trade routes.",
                icon: <Globe className="h-8 w-8 text-orange-500" />
              },
              {
                title: "Expert Team",
                description: "Skilled professionals with years of industry experience.",
                icon: <Package className="h-8 w-8 text-orange-500" />
              },
              {
                title: "Modern Fleet",
                description: "Well-maintained vehicles equipped with latest technology.",
                icon: <Truck className="h-8 w-8 text-orange-500" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="text-center p-6"
              >
                <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contact us today for a customized logistics solution that meets your needs.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
}