// 1. Import komponen Card yang baru kita buat
import Card from './Card';

function Features() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Mengapa BrandKu?
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        
        {/* 2. Panggil komponen Card dan isi datanya lewat props */}
        <Card 
          title="Mudah Digunakan" 
          description="Tidak perlu keahlian teknis. Setup dalam 5 menit." 
        />
        
        <Card 
          title="Serba Otomatis" 
          description="Otomatiskan tugas berulang dan fokus pada hal penting." 
        />
        
        <Card 
          title="Laporan Real-time" 
          description="Pantau performa bisnis kapan saja dan di mana saja." 
        />

      </div>
    </section>
  );
}

export default Features;