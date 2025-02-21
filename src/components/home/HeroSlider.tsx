import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Your Trusted Logistics Partner",
    description: "Delivering excellence through innovative logistics solutions and reliable service worldwide."
  },
  {
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Global Supply Chain Solutions",
    description: "Connecting businesses worldwide with efficient and reliable logistics services."
  },
  {
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Advanced Warehousing",
    description: "State-of-the-art facilities ensuring secure and efficient storage solutions."
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px]">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0">
                <img 
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <motion.div 
                className="relative container mx-auto px-6 h-full flex items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-white max-w-2xl">
                  <motion.h1 
                    className="text-5xl font-bold mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="text-xl mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link 
                      to="/contact"
                      className="bg-orange-500 text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-orange-600 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}