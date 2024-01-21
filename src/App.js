import './App.css';
import Hero from './components/Hero';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Plans/>
    </div>
  );
}

export default App;
