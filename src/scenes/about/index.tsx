import ProfilePic from  "@/assets/ProfilePic.png";
import Navbar from "../navbar";



const About = () => {
  return (
    <section className=" w-full flex justify-center  gap-8 bg-white py-8">



      <div className="flex flex-col items-center w-4/5  gap-8">   



        <Navbar></Navbar>
       


        <div className="flex flex-row gap-8 justify-center items-center flex-wrap md:flex-nowrap   ">

          <div className="   md:w-1/3 md:h-full ">
            <img alt="profilePic" src = {ProfilePic} 
            className="object-cover rounded-3xl h-full w-full" />
          </div>


          <div className="flex flex-col gap-8 text-lg text-black hover:outline outline-[#bde0fe] md:w-2/3   p-8 rounded-3xl outline-4">

            <h1 className="font-bold text-4xl">Hi I'm Sonya Yuen</h1>
            <p className="">I’m a computer science and industrial design student at Georgia Tech. Go Jackets and THWg always! I am passionate about using technology to build both innovative and creative solutions. 
            </p>

            <p> Outside of school, I love to travel. I previously completed a Co-Op at Delta Air Lines which was an incredible experience. I got to see and experience so many different places and cultures, while being able to develop my engineering skill set. 
            </p>

            <p>I love that computer science and indistrial design have given me the tools to express my creativity in so many ways- from building video games, to designing learning platforms, and so much more</p>




          </div>
          


        </div>

      </div>

    </section>
  )
}

export default About;