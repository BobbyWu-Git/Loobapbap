import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Menu, Info, Phone, User, X, ChevronRight } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const menuItems = [
    { id: 'home', name: 'Home', icon: Home, path: '/' },
    { id: 'menu', name: 'Menu', icon: Menu, path: '/menu' },
    { id: 'about', name: 'About', icon: Info, path: '/about' },
    { id: 'contact', name: 'Contact', icon: Phone, path: '/contact' },
    { id: 'user', name: 'User Information', icon: User, path: '/user' },
  ]

  const handleNavigate = (path) => {
    navigate(path)
    onClose()
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    closed: {
      x: -288, // w-72 = 288px
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
  }

  // Simple animation state
  const getAnimationState = () => {
    return isOpen ? "open" : "closed"
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/50 z-[55]"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial="closed"
            animate={getAnimationState()}
            exit="closed"
            variants={sidebarVariants}
            className="fixed left-0 top-0 h-full w-72 bg-white shadow-2xl z-[60] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.jpg"
                  alt="LooBapBap Logo"
                  className="w-12 h-12 rounded-full object-cover border-2 border-korean-red logo-image"
                />
                <div>
                  <h2 className="text-xl font-display font-bold text-korean-black">LooBapBap</h2>
                  <p className="text-sm text-korean-gray-600">Korean Restaurant</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-korean-gray-600 hover:text-korean-red transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className="p-4">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigate(item.path)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                        location.pathname === item.path
                          ? 'bg-korean-red text-white'
                          : 'text-korean-gray-700 hover:bg-gray-100 hover:text-korean-red'
                      }`}
                    >
                      <item.icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
              <div className="text-center">
                <p className="text-sm text-korean-gray-600 mb-2">Contact Us</p>
                <p className="text-sm font-medium text-korean-black">(519) 883-4747</p>
                <p className="text-xs text-korean-gray-500 mt-1">280 Lester St Unit 104</p>
                <p className="text-xs text-korean-gray-500">Waterloo, ON N2L 0G2</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Sidebar
