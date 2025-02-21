import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "John Smith",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "With over 20 years of experience in logistics and supply chain management."
  },
  {
    name: "Sarah Johnson",
    position: "Operations Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Expert in optimizing logistics operations and improving efficiency."
  },
  {
    name: "Michael Chen",
    position: "Technology Head",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Leading our digital transformation and technological innovations."
  },
  {
    name: "Emily Brown",
    position: "Customer Relations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Dedicated to ensuring the highest level of customer satisfaction."
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

export function About() {
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
            About Takbiir Enterprises
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Leading the way in innovative logistics solutions since 2000. We've built our reputation on reliability,
            efficiency, and an unwavering commitment to customer satisfaction.
          </motion.p>
        </div>
      </motion.section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2000, Takbiir Enterprises has grown from a small local logistics company to a global
                leader in transportation and supply chain solutions. Our journey has been marked by continuous
                innovation and an unwavering commitment to excellence.
              </p>
              <p className="text-gray-600">
                Today, we operate in over 50 countries, serving thousands of customers with state-of-the-art
                logistics solutions. Our success is built on our ability to adapt to changing market needs while
                maintaining the highest standards of service.
              </p>
            </motion.div>
            <motion.div variants={item}>
              <img 
                src="https://images.unsplash.com/photo-1565017228608-0174737ef39c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Company History"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Meet Our Leadership Team
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-orange-500 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Core Values
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries to provide cutting-edge logistics solutions."
              },
              {
                title: "Reliability",
                description: "Delivering on our promises with consistency and dedication."
              },
              {
                title: "Sustainability",
                description: "Committed to environmentally responsible logistics practices."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}