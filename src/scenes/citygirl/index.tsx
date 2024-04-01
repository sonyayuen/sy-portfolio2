//import React from 'react'
import Navbar from "../navbar";




//type Props = {}

const CityGirl = () => {
  return (
    <section className='flex justify-center items-center sm:p-8 p-4 text-black dark:text-white bg-white dark:bg-[#181A21] '>

        <div className='flex flex-col  justify-center items-center p-4 sm:gap-8 gap-2 md:max-w-[1000px]  xl:min-w-[75%] w-full  '>

            

            
            <Navbar></Navbar>


            <a href="https://gba.ninja/?autorun=citygirl.gba" className="bg-slate-300">
                <h1>City Girl Online Player</h1>
            </a>
            
            
           


                
            




        </div>
        




    </section>
  )
}

export default CityGirl;