import React from 'react'
import { User, MapPin, Phone, Clock, Mail, Star, Users, Calendar } from 'lucide-react'

const UserPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <img
            src="/logo.jpg"
            alt="LooBapBap Logo"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-korean-red mx-auto mb-6 shadow-lg logo-image"
          />
          <h1 className="text-4xl font-display font-bold text-korean-black mb-4">
            User Information
          </h1>
          <p className="text-lg text-korean-gray-600 max-w-2xl mx-auto">
            Everything you need to know about visiting LooBapBap Korean Restaurant
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-korean-black mb-6 flex items-center">
              <Phone className="mr-3 text-korean-red" size={24} />
              Contact Information
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-korean-red" />
                <div>
                  <p className="font-medium text-korean-black">(519) 883-4747</p>
                  <p className="text-sm text-korean-gray-600">Call for reservations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-korean-red" />
                <div>
                  <p className="font-medium text-korean-black">info@loobapbap.ca</p>
                  <p className="text-sm text-korean-gray-600">Email us anytime</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-korean-red mt-1" />
                <div>
                  <p className="font-medium text-korean-black">280 Lester St Unit 104</p>
                  <p className="text-korean-gray-600">Waterloo, ON N2L 0G2</p>
                  <p className="text-sm text-korean-gray-600 mt-1">Near University of Waterloo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours of Operation */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-korean-black mb-6 flex items-center">
              <Clock className="mr-3 text-korean-red" size={24} />
              Hours of Operation
            </h2>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-korean-black">Monday - Friday</span>
                <span className="text-korean-gray-600">11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-korean-black">Saturday</span>
                <span className="text-korean-gray-600">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-korean-black">Sunday</span>
                <span className="text-korean-gray-600">12:00 PM - 9:00 PM</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-korean-red/10 rounded-lg">
              <p className="text-sm text-korean-gray-700">
                <strong>Note:</strong> Hours may vary on holidays. Please call ahead to confirm.
              </p>
            </div>
          </div>

          {/* Restaurant Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-korean-black mb-6 flex items-center">
              <Star className="mr-3 text-korean-red" size={24} />
              Restaurant Stats
            </h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-korean-red/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="text-korean-red" size={20} />
                </div>
                <p className="text-2xl font-bold text-korean-black">4.8</p>
                <p className="text-sm text-korean-gray-600">Star Rating</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-korean-red/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="text-korean-red" size={20} />
                </div>
                <p className="text-2xl font-bold text-korean-black">1000+</p>
                <p className="text-sm text-korean-gray-600">Happy Customers</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-korean-red/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calendar className="text-korean-red" size={20} />
                </div>
                <p className="text-2xl font-bold text-korean-black">10+</p>
                <p className="text-sm text-korean-gray-600">Years Experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-korean-red/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="text-korean-red" size={20} />
                </div>
                <p className="text-2xl font-bold text-korean-black">7</p>
                <p className="text-sm text-korean-gray-600">Days a Week</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-korean-black mb-6">
              Additional Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-korean-black mb-2">Parking</h3>
                <p className="text-korean-gray-600">Free parking available in front of the restaurant and nearby streets.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-korean-black mb-2">Accessibility</h3>
                <p className="text-korean-gray-600">Wheelchair accessible entrance and seating available.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-korean-black mb-2">Payment Methods</h3>
                <p className="text-korean-gray-600">We accept cash, credit cards, and debit cards.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-korean-black mb-2">Reservations</h3>
                <p className="text-korean-gray-600">Reservations recommended for groups of 6 or more. Call us at (519) 883-4747.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage
