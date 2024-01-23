import './App.css';
import Hero from './components/Hero';
import Footer from './components/footer/Footer';
import JoinUs from './components/join_us/JoinUs';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Testimonials from './components/testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Plans/>
          <Testimonials/>
          <JoinUs/>
          <Footer/>
    </div>
  );
}

export default App;
