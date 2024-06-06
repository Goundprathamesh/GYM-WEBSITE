import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";

const App = () => {
  // Example of how you might use toast
  const notify = () => {
    toast("Welcome to Elite Edge Fitness!");
  };

  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <button onClick={notify} style={{ display: "none" }}>Notify</button> {/* Hidden button to trigger notification */}
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
