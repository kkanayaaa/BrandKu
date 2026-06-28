import React from 'react';
import Card from './Card.jsx';
import featureData from '../data/feature'; 

const Feature = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa BrandKu?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan semua fitur yang Anda butuhkan untuk mengembangkan bisnis ke level selanjutnya.
          </p>
        </div>

       
        <div className="grid md:grid-cols-3 gap-8">
          {featureData.map((item) => (
            <Card 
              key={item.id}
              id={item.id} 
              title={item.title} 
            
              description={item.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature; 