import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Award, Users, Clock } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Heart, number: '10+', label: 'Years of Tradition' },
    { icon: Award, number: '4.8', label: 'Star Rating' },
    { icon: Users, number: '1000+', label: 'Happy Customers' },
    { icon: Clock, number: '7', label: 'Days a Week' },
  ]

  const features = [
    {
      title: 'Authentic Recipes',
      description: 'Traditional Korean recipes passed down through generations, prepared with authentic ingredients and techniques.',
      image: '/cupbap and kimbap.avif'
    },
    {
      title: 'Fresh Ingredients',
      description: 'We source the finest and freshest ingredients daily to ensure every dish meets our high standards.',
      image: '/cup bap.jpeg'
    },
    {
      title: 'Family Atmosphere',
      description: 'Experience the warmth of Korean hospitality in our cozy, family-friendly restaurant environment.',
      image: '/egg toast.jpg'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-korean-black mb-6">
            Our <span className="text-gradient">Story</span>
          </h2>
          <p className="text-lg text-korean-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a passion for sharing authentic Korean flavors, Loobapbap brings 
            the rich culinary traditions of Korea to Waterloo. Every dish tells a story of 
            heritage, family, and the love of good food.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-korean-red rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-korean-black mb-2">{stat.number}</div>
              <div className="text-korean-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + 0.1 * index }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-40 md:h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-korean-black mb-3">{feature.title}</h3>
                <p className="text-korean-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-korean-black mb-6">
              "Food is our way of sharing Korean culture and bringing people together"
            </h3>
            <p className="text-lg text-korean-gray-600 leading-relaxed mb-8">
              At Loobapbap, we believe that every meal should be a celebration. Located in the heart 
              of Waterloo, our chefs combine traditional Korean cooking methods with fresh, local ingredients to 
              create dishes that honor our heritage while delighting modern palates.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-korean-red rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Chef"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-bold text-korean-black">Chef Kim</div>
                <div className="text-korean-gray-600">Head Chef & Owner</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
