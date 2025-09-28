import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Clock, Mail, Send, Star } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  })
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['280 Lester St Unit 104', 'Waterloo, ON N2L 0G2', 'Canada'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(519) 883-4747', 'Call for reservations'],
      action: 'Call Now'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 11:30AM - 9:00PM', 'Saturday: 11:30AM - 9:00PM', 'Sunday: 11:30AM - 9:00PM'],
      action: 'View Menu'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['Visit loobapbap.ca', 'Check our online menu'],
      action: 'Send Email'
    }
  ]

  const hours = [
    { day: 'Monday', hours: '11:30 AM - 9:00 PM' },
    { day: 'Tuesday', hours: '11:30 AM - 9:00 PM' },
    { day: 'Wednesday', hours: '11:30 AM - 9:00 PM' },
    { day: 'Thursday', hours: '11:30 AM - 9:00 PM' },
    { day: 'Friday', hours: '11:30 AM - 9:00 PM' },
    { day: 'Saturday', hours: '11:30 AM - 9:00 PM' },
    { day: 'Sunday', hours: '11:30 AM - 9:00 PM' }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-korean-black mb-6">
            Visit <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-korean-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to welcome you to Loobapbap in Waterloo. Make a reservation or just drop by 
            to experience authentic Korean cuisine in a warm, friendly atmosphere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-korean-black mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-korean-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-korean-black mb-1">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-korean-gray-600 text-sm">{detail}</p>
                    ))}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-korean-red font-medium text-sm mt-2 hover:underline"
                    >
                      {info.action}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hours Table */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-korean-black mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-korean-red" />
                Opening Hours
              </h4>
              <div className="space-y-2">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-korean-gray-600">{schedule.day}</span>
                    <span className="font-medium text-korean-black">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 bg-white border border-gray-200 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-korean-gold" />
                  ))}
                </div>
                <span className="font-bold text-korean-black">4.8/5 Rating</span>
              </div>
              <p className="text-sm text-korean-gray-600 mb-4">
                "Amazing authentic Korean food! The bulgogi was incredible and the service was outstanding. 
                Definitely coming back!" - Sarah M.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-korean-red text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Read More Reviews
              </motion.button>
            </motion.div>
          </motion.div>
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-korean-black mb-6">Make a Reservation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-korean-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korean-red focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-korean-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korean-red focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-korean-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korean-red focus:border-transparent transition-all"
                      placeholder="(416) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-korean-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korean-red focus:border-transparent transition-all"
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7+">7+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-korean-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korean-red focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-korean-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korean-red focus:border-transparent transition-all"
                    >
                      <option value="">Select time</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-korean-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korean-red focus:border-transparent transition-all resize-none"
                    placeholder="Any special dietary requirements, celebrations, or requests..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Make Reservation</span>
                </motion.button>
              </form>

              <p className="text-sm text-korean-gray-600 mt-4 text-center">
                We'll confirm your reservation within 2 hours via email or phone.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-korean-gray-600">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">280 Lester St Unit 104, Waterloo, ON N2L 0G2</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 btn-secondary"
              >
                Open in Google Maps
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
