import "./styles/index.css";
import Hero from "./components/Hero";
import Arrow from "./components/Arrow";
import RecentCheatsheets from "./components/RecentCheatsheets";
import WhyHeader from "./components/WhyHeader";
import Why from "./components/Why";
import Testimonies from "./components/Testimonies";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Hero />
      <Arrow />
      <RecentCheatsheets />
      <WhyHeader />
      <Why />
      <Testimonies />
      <Footer />
    </>
  );
}

export default App;
