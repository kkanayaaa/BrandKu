import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      
      {/* Container atas untuk Header, Hero, dan Features */}
      <div>
        <Header />
        <Hero />
        <Features />
      </div>

    
      <Footer />

    </div>
  );
}

export default App;