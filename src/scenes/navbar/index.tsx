
//import useMediaQuery from "@/hooks/useMediaQuery";
import { Link } from "react-router-dom";
import resume from "@/assets/SonyaYuenResume24.pdf";



const Navbar = () => {
  //const flexBetween = "flex items-center justify-between"; //gonna use a lot so made it a constant
  //const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  //const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); //bool to lyk if you ar eabove the width

  
  return (
    <nav className=" w-full flex justify-center">
      {/* MINI NAV BAR */}
      <div className="flex flex-row w-3/4  rounded-3xl  sm:gap-8 gap-2 h-[35px] ">

        <Link to="/" className="w-1/3 h-full flex justify-center items-center  rounded-3xl outline outline-2 outline-[#181A21] dark:outline-white">
          <p className=" text-lg  text-center  text-black dark:text-white  ">Home</p>
        </Link>
                
        <Link to="/projects" className="w-1/3  flex justify-center items-center  rounded-3xl outline outline-2 outline-[#181A21] dark:outline-white  ">
          <p className=" text-lg  text-center  text-black dark:text-white ">Projects</p>
        </Link>

        <Link to="/about" className="w-1/3  flex justify-center items-center outline outline-2 outline-[#181A21] dark:outline-white  rounded-3xl  ">
          <p className=" text-lg text-center  text-black  dark:text-white  ">About</p>
        </Link>

        <a href={resume} target="_blank" className="w-1/3  flex justify-center items-center outline outline-2 outline-[#181A21] dark:outline-white rounded-3xl  ">
          <p className=" text-lg text-center  text-black dark:text-white   ">Resume</p>
        </a>
        
      </div>

    </nav>
  );
};

export default Navbar;