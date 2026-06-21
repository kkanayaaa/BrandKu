
import { useState } from 'react';

function Hero() {

  const [clickCount, setClickCount] = useState(0);    // menyimpan jumlah klik
  const [message, setMessage] = useState('');         // menyimpan teks pesan
  const [isBtnVisible, setIsBtnVisible] = useState(true); // mengatur muncul/sembunyi btn


  const handleButtonClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount); // naik jumlah count+1

    if (nextCount === 1) {
      console.log('clicked');
      setMessage('Hello World!');
    } else if (nextCount === 2) {
      console.log('change text color');
    } else if (nextCount === 3) {
      console.log('off');
      setIsBtnVisible(false); // hide tombol
      setMessage('');        // hapus teks
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-200 to-white py-24 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Solusi Terbaik untuk Bisnismu
      </h1>
      
      <p className="text-gray-600 mb-8">
        Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
      </p>

      
      {isBtnVisible && (
        <button 
          onClick={handleButtonClick} 
          className="bg-blue-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition-all"
        >
          Mulai Gratis
        </button>
      )}

     
      {message && (
        <p className={`mt-4 text-lg font-medium transition-all ${clickCount === 2 ? 'text-red-500' : 'text-gray-600'}`}>
          {message}
        </p>
      )}
    </section>
  );
}

export default Hero;