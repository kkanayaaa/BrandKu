import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Feature';
import Footer from './components/Footer';

const App = () => {

  const [count, setCount] = useState(0);
  const onTapped = () => {
    console.log("clicked")
    setCount(count + 1);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      
      
      <div>
        <Header />
        <Hero count={count} onTapped={onTapped}/>
        <Features />
      </div>

    
      <Footer />

    </div>
  );
}

export default App; 