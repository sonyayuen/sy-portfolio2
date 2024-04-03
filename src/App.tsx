import Home2 from "@/scenes/home2";
import Projects from "@/scenes/projects";
import About from "@/scenes/about";
import Resume from "@/scenes/resume";
import { Routes, Route } from "react-router-dom";
import SheCodes from "./scenes/sheCodes";
import PandaDream from "./scenes/pandaDream";
import CityGirl from "./scenes/citygirl";
import PhotoGallery from "./scenes/photoGallery";


function App() {
  return (
  
    <Routes> 
      
      <Route path= "/" element={<Home2  />} /> //sets home page
      <Route path= "projects" element={<Projects  />} />
      <Route path= "about" element={<About  />} />
      <Route path= "resume" element={<Resume  />} />
      <Route path="sheCodes" element={<SheCodes />} />
      <Route path="pandaDream" element={<PandaDream />} />
      <Route path="citygirl" element={<CityGirl />} />
      <Route path="photoGallery" element={<PhotoGallery />} />



    </Routes>
  
  

  );
  
}

export default App;
