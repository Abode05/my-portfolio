import Project from "@/components/projects/Project";
import About from "@/components/About";
import Header from "@/components/Header";
import Contact from "@/components/contact/Ccontact";
import Hero from "@/components/hero/Hero";
// import Projects from "@/components/project/Projects";
import Skills from "@/components/skills/Skills";
// import WorkExperience from "@/components/workExperience/WorkExperience";

export default function page() {
  return (
    <div className="bg-zinc-800 text-white snap-y snap-mandatory overflow-y-hidden overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7abba]/80
    ">
    
        <Header />
           <section id="about" className="snap-start h-screen">

          <Hero/>

        </section>
      <section id="abouts" className="snap-center">
          <About/>
        </section>
        <section id="skills" className="snap-start">
          <Skills/>
        </section>
        <section id="projects" className="snap-center">
          {/* <Projects/> */}
        <Project/>
       
        </section>
        {/* <section id="experience" className="snap-center">
          <WorkExperience/>
        </section> */}
        <section id="contact" className="snap-center ">
          <Contact/>
        </section>
          
        
    </div>
  );
}
