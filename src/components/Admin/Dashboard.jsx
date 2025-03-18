import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import { FaEdit } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";

const Dashboard = () => {

    const navigate = useNavigate()

  return (
    <div className='min-h-screen'>

       

     

        <div className='flex items-start'>

            {/*left side bar*/}
            

                <div className='inline-block min-h-screen border-r-2'> 
                    <ul className='flex flex-col items-start pt-5 text-gray-800 '>
                         <NavLink className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-blue-500 border-r-4'}`} to={'/dashboard/edit-artists'}>
                             
                              <FaEdit  className='min-w-4'/>
                              <p className='max-sm:hidden'>Edit Artists</p>
                        </NavLink>

                        <NavLink className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-blue-500 border-r-4'}`} to={'/dashboard/manage-subscribers'}>
                             
                              <SlEnvolopeLetter  className='min-w-4'/>
                              <p className='max-sm:hidden'>Manage Subscribers</p>
                        </NavLink>


                    </ul>
                </div>

                <div>
                    <Outlet/>
                </div>


        </div>


    </div>
  )
}

export default Dashboard
