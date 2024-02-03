import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'
import { Dashboard_home } from '../pages/Dashboard_home'
import {OrderList} from '../pages/OrderList'
import { OrderDetail } from '../pages/Order Detail'
import { Analytics } from '../pages/Analytics'
import {Customer} from '../pages/Customer'
import { Reviews } from '../pages/Reviews'
import { FoodDetails } from '../pages/FoodDetails'
import { CustomerDetails } from '../pages/CustomerDetails'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='' element={<Login/>}/>

            <Route path='Dashboard' element={<Dashboard/>}>
              {/* <Route path='' element={<Dashboard/>}/> */}
              <Route path='' element={<Dashboard_home/>}/>
              <Route path='OrderList' element={<OrderList/>}/>
              <Route path='OrderDetails' element={<OrderDetail/>}/>
              <Route path='Analytics' element={<Analytics/>}/>
              <Route path='Customer' element={<Customer/>}/>
              <Route path='Reviews' element={<Reviews/>}/>
              <Route path='FoodDetails' element={<FoodDetails/>}/>
              <Route path='CustomerDetail' element={<CustomerDetails/>}/>


            </Route>
        </Route>
    )
)

export const Routing = () => {
  return (
    <>
     <RouterProvider router={router}/>
      
    </>
  )
}
