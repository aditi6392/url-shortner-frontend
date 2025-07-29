import React from 'react'
import Graph from './Graph'
import { dummyData } from '../DummyData/data'

const DashboardLayout = () => {
  return (
    <div className='lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]'>
        <div className='lg:w-full sm:px-8 px-4 min-h-calc(100vh-64px)]'>
            <div className='h-96 relative'>
                <Graph graphData={dummyData} />
            </div>
            <div className='py-5 sm:text-end text-center'>
                <button className='bg-blue-900 text-white  font-bold py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300'>
                    Create a new short URL
                </button>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout