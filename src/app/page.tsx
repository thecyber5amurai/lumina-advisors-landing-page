import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InitiateForm from "./components/InitiateForm";
import MethodologySection from "./components/Methodology";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonials";

export default function Home() {
  return (
    <>
    <NavBar/>
    <main>
       <HeroSection/>
       <Services />
       <MethodologySection />
       <Testimonial />
       <InitiateForm />
    </main>
    <Footer />
    </>
  );
}
