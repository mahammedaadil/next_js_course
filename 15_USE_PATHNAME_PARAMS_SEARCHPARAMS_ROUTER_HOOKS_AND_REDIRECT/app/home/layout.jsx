import Sidebar from '@/components/Sidebar';
import React from 'react'

const HomeLayout = ({ children }) => {
  return (
    <div>
        <main><Sidebar/></main>
        <div>{children}</div>
    </div>
  )
}

export default HomeLayout