import About from "./components/About";
import Analyze from "./components/Analyze";
import Blog from "./components/Blog";
import Client from "./components/Client";
import Counter from "./components/Counter";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Howwework from "./components/Howwework";
import Members from "./components/Members";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import UiSlider from "./components/UiSlider";



export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Discover/>
      <UiSlider/>
      <Counter/>
      <Analyze/>
      <Howwework/>
      <Members/>
      <Testimonial/>
      <Client/>
      <Blog/>
      <Footer/>
    </main>
  )
}
