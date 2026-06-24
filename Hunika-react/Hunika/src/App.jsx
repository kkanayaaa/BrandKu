import React, { useState } from 'react';
import DashboardPemilik from './pages/Pemilik/DashboardPemilik';
import TambahKos from './pages/Pemilik/TambahKos';

function App() {
  const [currentPage, setCurrentPage] = useState('DashboardPemilik');

  return (
    <>
      
      {currentPage === 'DashboardPemilik' && (
        <DashboardPemilik setPage={setCurrentPage} />
      )}
      
      
      {currentPage === 'TambahKos' && (
        <TambahKos setPage={setCurrentPage} />
      )}
    </>
  );
}

export default App;