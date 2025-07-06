import React from 'react'

export default function Footer() {
  return (
    <section className="bg-[#F8FAFF] max-w-7xl mx-auto border-t border-gray-200 lg:py-16 text-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src='' alt="Fintech" className="h-8 w-auto mb-4" />
            <p className="text-sm leading-relaxed max-w-xs">
              Your trusted partner for border‑less money transfers and investments.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary-600">Home</a></li>
              <li><a href="#about" className="hover:text-primary-600">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary-600">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Money Transfers</li>
              <li>Investments</li>
              <li>Loans</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm">Email: support@FinTech.com</p>
            <p className="text-sm mt-1">Phone: +123‑456‑7890</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500 text-center">
          © 2025 FinTech. All rights reserved.
        </div>
      </section>
  )
}
