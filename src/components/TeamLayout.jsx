import React from 'react'
import { Outlet } from 'react-router-dom'
import Team from '../pages/Team/Team'
import YearsOfSuccess from '../pages/Home/YearsOfSuccess'
import InstagramSection from '../pages/Home/InstagramSection'

export default function TeamLayout() {
  return (
    <div>
      <Team />
      <Outlet />
      <YearsOfSuccess />
      <InstagramSection />
    </div>
  )
}
