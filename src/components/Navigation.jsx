import React, { useState, useEffect } from 'react'
import { Menu, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'

const Navigation = ({ onMenuClick, showMenuButton = false }) => {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Check if we're on the home page
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ]

  const handleNavigate = (path) => {
    navigate(path)
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Menu Button & Logo */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Hamburger Menu Button */}
            {showMenuButton && (
              <button
                onClick={onMenuClick}
                className={`p-2 transition-colors hover:text-korean-red ${
                  scrolled || !isHomePage
                    ? 'text-korean-black' 
                    : 'text-white'
                }`}
              >
                <Menu size={24} />
              </button>
            )}
            
            {/* Logo */}
            <div 
              className="flex items-center space-x-1 md:space-x-2 cursor-pointer"
              onClick={() => handleNavigate('/')}
            >
              <img
                src="/logo.jpg"
                alt="LooBapBap Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-korean-red"
              />
              <div>
                <h1 className={`text-xl md:text-2xl font-display font-bold transition-colors ${
                  scrolled || !isHomePage ? 'text-korean-black' : 'text-white'
                }`}>
                  Loobapbap
                </h1>
                <p className={`text-xs -mt-1 transition-colors hidden sm:block ${
                  scrolled || !isHomePage ? 'text-korean-gray-600' : 'text-white/80'
                }`}>Korean Restaurant</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigate(item.path)}
                className={`font-medium transition-colors duration-300 hover:text-korean-red ${
                  location.pathname === item.path
                    ? 'text-korean-red'
                    : scrolled || !isHomePage
                      ? 'text-korean-black' 
                      : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className={`hidden lg:flex items-center space-x-4 text-sm transition-colors ${
              scrolled || !isHomePage ? 'text-korean-gray-600' : 'text-white/80'
            }`}>
              <div className="flex items-center space-x-1">
                <Phone size={16} />
                <span>(519) 883-4747</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>Waterloo, ON</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </motion.nav>
  )
}

export default Navigation
