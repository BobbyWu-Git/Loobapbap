import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
    { name: 'User Info', path: '/user' }
  ]

  const menuHighlights = [
    { name: 'CupBap Bowls', icon: '/cupbap-logo.png' },
    { name: 'Fresh Kimbap', icon: '/kimbap-logo.png' },
    { name: 'Korean Sandwiches', icon: '/sandwich-logo.png' },
    { name: 'Spicy Rice Cakes', icon: '/ricecake-logo.png' },
    { name: 'Korean Beverages', icon: '/beverage-logo.svg' }
  ]

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <footer className="bg-korean-black text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6 sm:mb-8">
              <img
                src="/logo.jpg"
                alt="LooBapBap Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-korean-red logo-image"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold">Loobapbap</h3>
                <p className="text-sm text-gray-400">Korean Restaurant</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8">
              Experience authentic Korean flavors in the heart of Waterloo. 
              We bring traditional recipes and warm hospitality to every meal.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-korean-gray-800 rounded-full flex items-center justify-center hover:bg-korean-red transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sm:col-span-1"
          >
            <h4 className="text-lg font-bold mb-6 sm:mb-8">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => handleNavigate(link.path)}
                    className="text-sm sm:text-base text-gray-300 hover:text-korean-red transition-colors text-left"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Menu Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:col-span-1"
          >
            <h4 className="text-lg font-bold mb-6 sm:mb-8">Popular Dishes</h4>
            <ul className="space-y-3 sm:space-y-4">
              {menuHighlights.map((dish, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => handleNavigate('/menu')}
                    className="flex items-center space-x-2 text-sm sm:text-base text-gray-300 hover:text-korean-red transition-colors text-left"
                  >
                    <div className="w-5 h-5 flex-shrink-0">
                      <img 
                        src={dish.icon} 
                        alt={dish.name}
                        className="w-full h-full object-contain opacity-70"
                      />
                    </div>
                    <span>{dish.name}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-lg font-bold mb-6 sm:mb-8">Contact Info</h4>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-korean-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-gray-300">280 Lester St Unit 104</p>
                  <p className="text-sm sm:text-base text-gray-300">Waterloo, ON N2L 0G2</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-korean-red flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-300">(519) 883-4747</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-korean-red flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-300">loobapbap.ca</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-korean-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-gray-300">Mon-Fri: 11:30AM - 9:00PM</p>
                  <p className="text-sm sm:text-base text-gray-300">Saturday: 11:30AM - 9:00PM</p>
                  <p className="text-sm sm:text-base text-gray-300">Sunday: 11:30AM - 9:00PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="border-t border-korean-gray-800"
      >
        <div className="container-custom py-8 sm:py-12">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 sm:mb-6">Stay Updated</h4>
            <p className="text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Subscribe to our newsletter for special offers, new menu items, and Korean cooking tips!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-sm sm:max-w-md mx-auto px-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-korean-gray-800 border border-korean-gray-700 rounded-lg focus:ring-2 focus:ring-korean-red focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="border-t border-korean-gray-800">
        <div className="container-custom py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2024 Loobapbap Korean Restaurant. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-korean-red fill-current" />
              <span>in Waterloo</span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-korean-gray-800 space-y-2 lg:space-y-0">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-xs sm:text-sm text-gray-400">
              <motion.button
                whileHover={{ color: '#DC143C' }}
                className="hover:text-korean-red transition-colors"
              >
                Privacy Policy
              </motion.button>
              <motion.button
                whileHover={{ color: '#DC143C' }}
                className="hover:text-korean-red transition-colors"
              >
                Terms of Service
              </motion.button>
              <motion.button
                whileHover={{ color: '#DC143C' }}
                className="hover:text-korean-red transition-colors"
              >
                Accessibility
              </motion.button>
            </div>
            <div className="text-xs sm:text-sm text-gray-400 text-center lg:text-right">
              <span>Powered by React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
