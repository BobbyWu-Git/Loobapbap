import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Flame, Leaf } from 'lucide-react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('sandwich')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [
    { id: 'sandwich', name: 'Sandwich', icon: '/sandwich-logo.png', fallbackIcon: Star },
    { id: 'cupbap', name: 'CupBap', icon: '/cupbap-logo.png', fallbackIcon: Star },
    { id: 'kimbap', name: 'KimBap', icon: '/kimbap-logo.png', fallbackIcon: Leaf },
    { id: 'beverage', name: 'Beverage', icon: '/beverage-logo.svg', fallbackIcon: Star },
    { id: 'appetizer', name: 'Appetizer', icon: '/appetizer-logo.svg', fallbackIcon: Flame },
    { id: 'spicy-rice', name: 'Spicy Rice Cakes', icon: '/ricecake-logo.png', fallbackIcon: Flame },
  ]

  const menuItems = {
    sandwich: [
      {
        name: 'Ham and Cheese',
        description: 'Classic ham and cheese sandwich with fresh ingredients',
        price: '$9.99',
        image: '/egg-toast.jpg',
        popular: true,
        spicy: false
      },
      {
        name: 'Bacon and Double Cheese',
        description: 'Crispy bacon with double cheese on fresh bread',
        price: '$12.49',
        image: '/egg-toast.jpg',
        popular: true,
        spicy: false
      },
      {
        name: 'Crab and Avocado',
        description: 'Fresh crab meat with creamy avocado',
        price: '$12.49',
        image: '/egg-toast.jpg',
        popular: false,
        spicy: false
      },
      {
        name: 'Tuna Toast',
        description: 'Grilled tuna sandwich with vegetables',
        price: '$10.49',
        image: '/egg-toast.jpg',
        popular: false,
        spicy: false
      },
      {
        name: 'BLT',
        description: 'Classic bacon, lettuce, and tomato sandwich',
        price: '$11.99',
        image: '/egg-toast.jpg',
        popular: false,
        spicy: false
      }
    ],
    cupbap: [
      {
        name: 'Shrimp CupBap',
        description: 'Korean rice bowl topped with seasoned shrimp',
        price: '$10.99',
        image: '/cup bap.jpeg',
        popular: true,
        spicy: false
      },
      {
        name: 'Avoholic CupBap',
        description: 'Fresh avocado rice bowl with Korean seasonings',
        price: '$10.49',
        image: '/cup bap.jpeg',
        popular: true,
        spicy: false
      },
      {
        name: 'Hashbrown CupBap',
        description: 'Crispy hashbrown over seasoned rice',
        price: '$10.99',
        image: '/cup bap.jpeg',
        popular: false,
        spicy: false
      }
    ],
    kimbap: [
      {
        name: 'Traditional Kimbap',
        description: 'Korean seaweed rice roll with vegetables and egg',
        price: '$8.99',
        image: '/cupbap-and-kimbap.avif',
        popular: true,
        spicy: false
      },
      {
        name: 'Bulgogi Kimbap',
        description: 'Kimbap filled with marinated bulgogi beef',
        price: '$12.99',
        image: '/cupbap-and-kimbap.avif',
        popular: true,
        spicy: false
      },
      {
        name: 'Tuna Kimbap',
        description: 'Fresh tuna kimbap with Korean seasonings',
        price: '$10.99',
        image: '/cupbap-and-kimbap.avif',
        popular: false,
        spicy: false
      }
    ],
    beverage: [
      {
        name: 'Korean Tea',
        description: 'Traditional Korean teas - green tea, barley tea',
        price: '$4.99',
        image: '/beverage-logo.svg',
        popular: true,
        spicy: false
      },
      {
        name: 'Korean Coffee',
        description: 'Freshly brewed Korean-style coffee',
        price: '$5.99',
        image: '/beverage-logo.svg',
        popular: true,
        spicy: false
      },
      {
        name: 'Sikhye',
        description: 'Traditional Korean sweet rice drink',
        price: '$5.99',
        image: '/beverage-logo.svg',
        popular: false,
        spicy: false
      }
    ],
    appetizer: [
      {
        name: 'Korean Fried Chicken',
        description: 'Crispy Korean-style fried chicken',
        price: '$12.99',
        image: '/menu items.jpeg',
        popular: true,
        spicy: true
      },
      {
        name: 'Mandu',
        description: 'Korean dumplings filled with pork and vegetables',
        price: '$8.99',
        image: '/menu items.jpeg',
        popular: true,
        spicy: false
      },
      {
        name: 'Pajeon',
        description: 'Korean scallion pancake',
        price: '$9.99',
        image: '/menu items.jpeg',
        popular: false,
        spicy: false
      }
    ],
    'spicy-rice': [
      {
        name: 'Tteokbokki',
        description: 'Spicy Korean rice cakes in gochujang sauce',
        price: '$8.99',
        image: '/cupbap-and-kimbap.avif',
        popular: true,
        spicy: true
      },
      {
        name: 'Cheese Tteokbokki',
        description: 'Spicy rice cakes topped with melted cheese',
        price: '$10.99',
        image: '/cupbap-and-kimbap.avif',
        popular: true,
        spicy: true
      }
    ]
  }

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-korean-black mb-6">
            Our <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-lg text-korean-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover authentic Korean flavors crafted with traditional recipes and the finest ingredients.
            Each dish tells a story of Korean culinary heritage.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 px-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'bg-korean-red text-white shadow-lg'
                  : 'bg-gray-100 text-korean-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {category.icon.endsWith('.svg') || category.icon.endsWith('.png') ? (
                  <img 
                    src={category.icon} 
                    alt={`${category.name} icon`}
                    className={`w-full h-full object-contain ${
                      activeCategory === category.id ? 'filter brightness-0 invert' : ''
                    }`}
                    onError={(e) => {
                      // Fallback to Lucide icon if image fails to load
                      e.target.style.display = 'none'
                      const fallbackIcon = document.createElement('div')
                      fallbackIcon.innerHTML = `<svg class="w-5 h-5"><use href="#${category.fallbackIcon.name}"/></svg>`
                      e.target.parentNode.appendChild(fallbackIcon)
                    }}
                  />
                ) : (
                  <category.fallbackIcon className="w-full h-full" />
                )}
              </div>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          >
            {menuItems[activeCategory].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-32 h-48 sm:h-32 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-korean-black pr-2">{item.name}</h3>
                      <div className="flex items-center space-x-1 flex-shrink-0">
                        {item.popular && (
                          <span className="bg-korean-gold text-white text-xs px-2 py-1 rounded-full font-medium">
                            Popular
                          </span>
                        )}
                        {item.spicy && (
                          <Flame className="w-4 h-4 text-korean-red" />
                        )}
                      </div>
                    </div>
                    <p className="text-korean-gray-600 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <span className="text-xl sm:text-2xl font-bold text-korean-red">{item.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-korean-red text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
                      >
                        Order Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-korean-red to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't decide? Try our Chef's Special!</h3>
            <p className="text-lg mb-6 opacity-90">
              Let our chef surprise you with a curated selection of our most popular dishes.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-korean-red px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Order Chef's Special - $45.99
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu
