
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Memories from './components/Memories';
import Travelars from './components/Travelars';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Fly from "./components/Fly";
import BackToTop from './components/Backtotop';
import Tabs from './components/Tabs';
import Feedback from './components/Feedback';
import Flight from './components/Flight';
import Loder from "./components/Loder";

function App() {
  return (
    <div>
      <div className='bg-header-img'>
     <Header/>
     <Hero/>
     </div>
     <Tabs/>
     <Features/>
     <Fly/>
     <Flight/>
     <Travelars/>
     <Feedback/>
     <Memories/>
     <Subscribe/>
     <div className='bg-footer-img'>
     <Footer/>
     <BackToTop/>
     <Loder/>
     </div>
    </div>
  );
}

export default App;
