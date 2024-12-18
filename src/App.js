import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Productos from './Components/Productos';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
        <Home />
        <About />
        <Productos />
        <Contact />
    </div>
  );
}

export default App;
