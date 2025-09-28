import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollTimeout, setScrollTimeout] = useState(null)
  const location = useLocation()

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  // Handle scroll to hide sidebar
  useEffect(() => {
    const handleScroll = () => {
      // Handle sidebar auto-hide on scroll
      if (sidebarOpen) {
        setIsScrolling(true)
        setSidebarOpen(false) // Close sidebar immediately on scroll
        
        // Clear any existing timeout
        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }
        
        // Set new timeout to reset scrolling state
        const newTimeout = setTimeout(() => {
          setIsScrolling(false)
        }, 300)
        
        setScrollTimeout(newTimeout)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sidebarOpen, scrollTimeout])

  // Cleanup scroll timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [scrollTimeout])

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      {/* Navigation */}
      <Navigation 
        onMenuClick={toggleSidebar}
        showMenuButton={true}
      />

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
