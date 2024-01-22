import './App.css';
import Hero from './components/Hero';
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
    </div>
  );
}

export default App;
