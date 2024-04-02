//import React from 'react'
import Navbar from "../navbar";




//type Props = {}

const CityGirl = () => {
  return (
    <section className='flex justify-center items-center sm:p-8 p-4 text-black dark:text-white bg-white dark:bg-[#181A21] '>

        <div className='flex flex-col  justify-center items-center p-4 sm:gap-8 gap-2 md:max-w-[1000px]  xl:min-w-[75%] w-full  '>

            

            
            <Navbar></Navbar>



            <div className="flex flex-col justify-center">
              <h1 className="text-xl">City Girl</h1>
              <p>City Girl is a Game Boy Advance game made using C for a final project in the Media Device Architecture class at Georgia Tech. The game is a 2D platformer game with parallax scrolling, custom sprite's and animations, and 3 mini games!</p>
            </div>

            <div>
            <iframe
              width="860"
              height="484"
              src="https://gba.ninja/?autorun=https://sonyayuen.github.io/citygirl/Project.gba&exclusive"
            >

            </iframe>
            </div>
            
            
           


                
            




        </div>
        




    </section>
  )
}

export default CityGirl;