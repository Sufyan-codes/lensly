import React from 'react'
import { Outlet } from 'react-router-dom'
import Contact from '../pages/Contact/Contact'
import InstagramSection from '../pages/Home/InstagramSection'

export default function ContactLayout() {
  return (
      <div>
          <Contact />

          <Outlet />
          <InstagramSection />
    </div>
  )
}
