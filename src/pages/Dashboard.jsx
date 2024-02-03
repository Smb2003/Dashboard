import React from 'react'
import { Layout } from './Layout'

import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <>
        
        <div className='flex w-full h-screen'>
            <Layout/>
            <Outlet/>
        </div>
    </>
  )
}
