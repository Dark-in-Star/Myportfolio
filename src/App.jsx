import About from './component/about'
import Contact from './component/contact'
import Navbar from './component/navbar'
import Project from './component/project'
import Skill from './component/skill'
import Footer from './component/footer'


function App() {
  return (
    <>
     <div id="about" className="about-section sec">
     <Navbar/>
        <About />
      </div>
      <div id="skill" className="skill-section sec">
        <Skill />
      </div>
      <div id="project" className="project-section sec">
        <Project />
      </div>
      <div id="contact" className="contact-section sec">
        <Contact />
      </div>
      <Footer/>

    </>
  )
}
export default App