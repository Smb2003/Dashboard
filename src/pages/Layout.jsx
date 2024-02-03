import React from 'react'
import { MdDashboard } from "react-icons/md";
import { useNavigate, useParams , Link} from 'react-router-dom';

export const Layout = () => {
    const list= ["OrderList","OrderDetails","Analytics","Customer","Reviews","FoodDetails","CustomerDetail"];
    const naviagte = useNavigate();
    const params = useParams();
  return (
    <div className='md:w-1/5 md:h-full bg-slate-500'>
        <div className='flex justify-center my-5 bg-gray-300'>
            <MdDashboard className='text-3xl my-1' />
            <h1 className='text-3xl text-center font-semibold'>Dashboard</h1>
        </div>
        <div className='md:w-full h-auto'>
            {
                list.map((item,index)=>{
                    return(
                        <div key={index} className='my-5 flex justify-center hover:bg-gray-900 hover:text-white hover:cursor-pointer'>
                            <Link className='text-2xl md:text-2xl my-2 text-center font-medium ' to={item}>{item}</Link>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}
