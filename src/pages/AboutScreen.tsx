import React from 'react';

export const AboutScreen: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-12 max-w-[1280px] mx-auto min-h-screen">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="font-display-lg text-4xl sm:text-5xl text-[#071e28]">About Our Parish</h1>
        <p className="text-lg text-[#3e484d] leading-relaxed">
          Welcome to Lourde Matha Church, Thalayanadu. We are a vibrant Catholic community dedicated to worship, service, and spiritual growth. 
        </p>
        
        <div className="mt-12 text-left space-y-12">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-[#e8f6ff]">
            <h2 className="text-2xl font-display-md text-[#006780] mb-4">Our History</h2>
            <p className="text-[#3e484d] leading-relaxed">
              Founded to serve the faithful and pilgrims, Lourde Matha Church stands as a spiritual bastion of Roman Catholic faith, Eucharistic worship, and charitable service. We invite all to join us in prayer and fellowship.
            </p>
          </section>

          <section className="bg-[#f4faff] p-8 rounded-3xl shadow-sm border border-[#dbf1ff]">
            <h2 className="text-2xl font-display-md text-[#006780] mb-4">Our Mission</h2>
            <p className="text-[#3e484d] leading-relaxed">
              Our mission is to be a true family of God—nourished by the Holy Eucharist, renewed in confession, and commissioned to bring the compassionate love of Christ to everyone we encounter.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
