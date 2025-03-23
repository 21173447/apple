import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero/Hero';
import Hero0 from './Components/Hero/Hero0';
import Hero1 from './Components/Hero/Hero1';
import Hero2 from './Components/Hero/Hero2';
import Grid from './Components/Grid';
import Footer from './Components/Footer';
import Slider from './Components/Slider';
import ConveyorBelt from './Components/ConvyorBelt';
import Mac from './Pages/Mac';

function App() {
  return (
    <Router>
      {/* NavBar is always shown */}
      <NavBar />

      <Routes>
        {/* Route for the Mac page */}
        <Route path="/Mac" element={<Mac />} />

        {/* You can add more routes here for different pages */}
        {/* Example of a homepage route */}
        <Route path="/" element={
          <>
            {/* Only these components will render on the homepage */}
            <Hero />
            <Hero0 />
            <Hero1 />
            <Hero2 />
            <Grid />
            <Slider />
            <ConveyorBelt />
          </>
        } />
      </Routes>

      {/* Footer is always shown */}
      <Footer />
    </Router>
  );
}

export default App;
