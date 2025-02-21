import { motion } from 'framer-motion';
import { Truck, Package, Warehouse, Globe, Clock, Shield } from 'lucide-react';

const services = [
  {
    title: "Road Transportation",
    description: "Efficient and reliable road transportation services with modern fleet and real-time tracking.",
    icon: Truck,
    features: [
      "Modern fleet of vehicles",
      "Real-time tracking",
      "Nationwide coverage",
      "Express delivery options"
    ],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Warehousing Solutions",
    description: "State-of-the-art warehousing facilities with advanced inventory management systems.",
    icon: Warehouse,
    features: [
      "Climate-controlled storage",
      "24/7 security",
      "Inventory management",
      "Cross-docking services"
    ],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Supply Chain Management",
    description: "End-to-end supply chain solutions optimized for efficiency and cost-effectiveness.",
    icon: Package,
    features: [
      "Supply chain optimization",
      "Demand forecasting",
      "Inventory optimization",
      "Risk management"
    ],
    image: "https://images.unsplash.com/photo-1586528116493-d2f45325b1f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

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

export function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section 
        className="bg-gray-900 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive logistics solutions tailored to meet your business needs. From transportation
            to warehousing, we've got you covered.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="space-y-32"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={item}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="text-orange-500 mb-4">
                    <service.icon className="h-12 w-12" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-gray-600 mb-8">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Clock className="h-5 w-5 text-orange-500 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Why Choose Our Services
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              {
                title: "Global Network",
                description: "Access to worldwide logistics network and partners.",
                icon: Globe
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer service and assistance.",
                icon: Clock
              },
              {
                title: "Secure Handling",
                description: "Advanced security measures for cargo protection.",
                icon: Shield
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="inline-block p-4 bg-orange-100 rounded-full mb-6">
                  <benefit.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}