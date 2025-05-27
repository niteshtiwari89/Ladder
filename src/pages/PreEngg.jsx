import React from 'react'

const PreEngg = () => {

    const services = [
        { id: 1, name: 'Pre Engineered Buildings' },
        { id: 2, name: 'PEB Warehouse' },
        { id: 3, name: 'PEB Sheds' },
        { id: 4, name: 'Poultry Sheds' },
        { id: 6, name: 'PEB Mills' },
        { id: 5, name: 'PEB Multi Storey Building' },
        { id: 7, name: 'PEB Spining & Grinding Sheds' },
        { id: 8, name: 'Ethanol Sheds ' },
        { id: 9, name: 'PEB Metro Stations ' },
    ];

    // return (
    //     <>
    //         {/* Hero Section with Background Image */}
    //         <div className="relative w-full h-80 md:h-96">
    //             {/* Background image with overlay */}
    //             <div
    //                 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    //                 style={{
    //                     backgroundImage: "url('/pre-engg-main-hero.png')", // Replace with your actual image path
    //                     backgroundPosition: 'center',
    //                 }}
    //             >
    //                 {/* Dark overlay to make text more readable */}
    //                 <div className="absolute inset-0 bg-black opacity-60"></div>
    //             </div>

    //             {/* Content container */}
    //             <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
    //                 {/* Main heading */}
    //                 <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
    //                     Pre Engineered Steel Structures
    //                 </h1>

    //                 {/* Breadcrumb navigation */}
    //                 <div className="flex items-center text-lg">
    //                     <span className="hover:underline">Product & Services </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="text-[#8CB5FF] font-bold text-xl">Pre Engineered Steel Structures</span>
    //                 </div>
    //             </div>
    //         </div>



    //         {/* Main Content */}
    //         <div className="min-h-screen w-full bg-gray-50 relative overflow-hidden">
    //             <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
    //                 {/* Top Section with Card and Image */}
    //                 <div className="flex flex-col  md:flex-row gap-6 mb-8">
    //                     {/* Services Card */}
    //                     <div className="bg-white rounded-4xl shadow-md p-6 md:w-1/3">
    //                         <h2 className="text-xl font-bold mb-6">Pre Engineered Steel Structures</h2>

    //                         <div className="space-y-6">
    //                             {services.map((service) => (
    //                                 <div key={service.id} className="border-b pb-4">
    //                                     <div className="flex items-center">
    //                                             <img src="/arrow-right.png" alt="" className='w-6 h-6 mr-2'/>
    //                                         <span className="text-gray-700">{service.name}</span>
    //                                     </div>
    //                                 </div>
    //                             ))}
    //                         </div>
    //                     </div>

    //                     {/* Construction Image */}
    //                     <div className="md:w-2/2 md:ml-6">
    //                         <img
    //                             src="/pre-engg-img1.png"
    //                             alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
    //                             className="w-full h-[500px] rounded-4xl shadow-md object-cover"
    //                         />

    //                         <h1 className='mt-7 text-center text-lg font-bold'>Pre Engineered Steel Building Manufacturers</h1>

    //                         <p className='leading-base mt-6'>
    //                             BlueLadder is Pre Engineered Steel Building Manufacturers and suppliers. These steel structures buildings are pre-designed and prefabricated buildings that are made from steel components. The structures are typically used for commercial, industrial, and agricultural buildings, such as warehouses, factories, barns, and aircraft hangars.
    //                         </p>
    //                     </div>

    //                 </div>
    //             </div>


    //             <div className="flex flex-col md:flex-row w-full container mx-auto p-4 gap-6">
    //                 {/* Left Panel - Question Section */}
    //                 <div className="bg-[#024965] text-white rounded-4xl p-8 flex flex-col items-center text-center md:w-1/3">
    //                     <h2 className="text-2xl md:text-3xl font-bold mb-4">You Still Have A Question</h2>

    //                     <p className="text-sm md:text-base mb-8">
    //                         if you cannot find answer to your question our FAQ, you can alwas contact us. web will answer you shortly!
    //                     </p>

    //                     {/* Contact Info */}
    //                     <div className="w-full space-y-4">
    //                         <div className="bg-white text-[#004258] rounded-full py-2 px-4 flex items-center">
    //                             <div className="bg-yellow-300 rounded-full p-2 mr-3">
    //                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    //                                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    //                                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    //                                 </svg>
    //                             </div>
    //                             <span className="text-sm font-medium">info@domain.com</span>
    //                         </div>

    //                         <div className="bg-white text-[#004258] rounded-full py-2 px-4 flex items-center">
    //                             <div className="bg-yellow-300 rounded-full p-2 mr-3">
    //                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    //                                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    //                                 </svg>
    //                             </div>
    //                             <span className="text-sm font-medium">+91 0987654321</span>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 {/* Right Section - Features */}
    //                 <div className="md:w-2/3">
    //                     <h3 className="text-xl font-semibold mb-6">Features:</h3>

    //                     {/* Features List */}
    //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    //                         <div className="flex items-center">
    //                             <div className="bg-[#345CA5] rounded-full p-1 mr-2">
    //                                 <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     className="h-4 w-4 text-white"
    //                                     viewBox="0 0 20 20"
    //                                     fill="currentColor"
    //                                 >
    //                                     <path
    //                                         fillRule="evenodd"
    //                                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                                         clipRule="evenodd"
    //                                     />
    //                                 </svg>
    //                             </div>
    //                             <span>Clear span design</span>
    //                         </div>

    //                         <div className="flex items-center">
    //                             <div className="bg-[#345CA5] rounded-full p-1 mr-2">
    //                                 <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     className="h-4 w-4 text-white"
    //                                     viewBox="0 0 20 20"
    //                                     fill="currentColor"
    //                                 >
    //                                     <path
    //                                         fillRule="evenodd"
    //                                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                                         clipRule="evenodd"
    //                                     />
    //                                 </svg>
    //                             </div>
    //                             <span>Skylights</span>
    //                         </div>

    //                         <div className="flex items-center">
    //                             <div className="bg-[#345CA5] rounded-full p-1 mr-2">
    //                                 <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     className="h-4 w-4 text-white"
    //                                     viewBox="0 0 20 20"
    //                                     fill="currentColor"
    //                                 >
    //                                     <path
    //                                         fillRule="evenodd"
    //                                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                                         clipRule="evenodd"
    //                                     />
    //                                 </svg>
    //                             </div>
    //                             <span>Mezzanines and loft areas</span>
    //                         </div>

    //                         <div className="flex items-center">
    //                             <div className="bg-[#345CA5] rounded-full p-1 mr-2">
    //                                 <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     className="h-4 w-4 text-white"
    //                                     viewBox="0 0 20 20"
    //                                     fill="currentColor"
    //                                 >
    //                                     <path
    //                                         fillRule="evenodd"
    //                                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                                         clipRule="evenodd"
    //                                     />
    //                                 </svg>
    //                             </div>
    //                             <span>Insulation</span>
    //                         </div>

    //                         <div className="flex items-center">
    //                             <div className="bg-[#345CA5] rounded-full p-1 mr-2">
    //                                 <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     className="h-4 w-4 text-white"
    //                                     viewBox="0 0 20 20"
    //                                     fill="currentColor"
    //                                 >
    //                                     <path
    //                                         fillRule="evenodd"
    //                                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                                         clipRule="evenodd"
    //                                     />
    //                                 </svg>
    //                             </div>
    //                             <span>Roll-up doors</span>
    //                         </div>
    //                     </div>

    //                     {/* Images */}
    //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //                         <div className="rounded-4xl overflow-hidden">
    //                             <img
    //                                 src="/pre-engg-img2.png"
    //                                 alt="Construction professional reviewing blueprints"
    //                                 className="w-full h-48 object-cover"
    //                             />
    //                         </div>
    //                         <div className="rounded-4xl overflow-hidden">
    //                             <img
    //                                 src="/pre-engg-img3.png"
    //                                 alt="Construction workers at job site"
    //                                 className="w-full h-48 object-cover"
    //                             />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>


    //             <div className="w-full max-w-6xl mx-auto">
    //                 {/* Components Section */}
    //                 <div className="px-4 py-8 md:py-12">
    //                     <h2 className="text-center text-2xl font-bold mb-8">Components of a Pre Engineered Steel Building Structure</h2>

    //                     <div className="space-y-8">
    //                         {/* Wall Sheet */}
    //                         <div className="flex">
    //                             <div className="flex-shrink-0 mt-1">
    //                                 <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
    //                             </div>
    //                             <div className="ml-4">
                                   
    //                                 <p className="text-black mt-1">
    //                                    Wall Sheet: Wall sheets form the outer skin of a PEB structure, offering both aesthetic appeal and functional
    //                                     protection. They play a crucial role in maintaining the building's insulation, ensuring energy
    //                                     efficiency while safeguarding the interior from external elements.
    //                                 </p>
    //                             </div>
    //                         </div>

    //                         {/* Fascias */}
    //                         <div className="flex">
    //                             <div className="flex-shrink-0 mt-1">
    //                                 <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
    //                             </div>
    //                             <div className="ml-4">
    //                                 <p className="text-black mt-1">
    //                                     Fascias: Fascias enhance the visual appeal of a PEB structure by providing a clean finish to the roof and wall
    //                                     intersections. These architectural elements also help in concealing the building's gutter and drainage
    //                                     systems, contributing to a seamless and polished appearance.
    //                                 </p>
    //                             </div>
    //                         </div>

    //                         {/* Cranes System */}
    //                         <div className="flex">
    //                             <div className="flex-shrink-0 mt-1">
    //                                 <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
    //                             </div>
    //                             <div className="ml-4">
    //                                 <p className="text-black mt-1">
    //                                     Cranes System: An integral part of many PEB structures, the cranes system facilitates efficient material handling and
    //                                     improves the building's operational capabilities. It enables smooth movement and lifting of heavy loads,
    //                                     enhancing productivity in industrial settings.
    //                                 </p>
    //                             </div>
    //                         </div>

    //                         {/* Girders */}
    //                         <div className="flex">
    //                             <div className="flex-shrink-0 mt-1">
    //                                 <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
    //                             </div>
    //                             <div className="ml-4">
    //                                 <p className="text-black mt-1">
    //                                     Girders: Girders are essential structural members that support the weight of the roof and transfer it to the
    //                                     columns. These horizontal beams are critical for maintaining the structural integrity and stability of
    //                                     the PEB, ensuring its ability to withstand loads and forces.
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //             {/* CTA Section */}
    //             <div className="bg-[#024965] text-white">
    //                 <div className="container mx-auto px-10 py-12 md:py-16">
    //                     <div className="flex flex-col md:flex-row items-center">
    //                         <div className="md:w-1/2 mb-8 md:mb-0">
    //                             <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something great together!</h2>
    //                             <p className="mb-8 max-w-md">
    //                                 Don't wait any longer to bring your construction dreams to life. Partner with BlueLadder and experience
    //                                 unparalleled service and quality.
    //                             </p>
    //                             <button className="bg-[#CDB943] hover:bg-yellow-500 text-gray-800 font-medium py-2 px-6 rounded-full flex items-center">
    //                                 Get Free Quote
    //                                 <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     className="h-5 w-5 ml-2"
    //                                     viewBox="0 0 20 20"
    //                                     fill="currentColor"
    //                                 >
    //                                     <path
    //                                         fillRule="evenodd"
    //                                         d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
    //                                         clipRule="evenodd"
    //                                     />
    //                                 </svg>
    //                             </button>
    //                         </div>
    //                         <div className="md:w-1/2 flex justify-center md:justify-end">
    //                             <img
    //                                 src="/pre-engg-girl.png"
    //                                 alt="Construction professional in safety gear"
    //                                 className="max-h-80 -mb-16 object-contain"
    //                             />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>

    //     </>
    // )

    return (
  <>
    {/* Hero Section with Enhanced Effects */}
    <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: "url('/pre-engg-main-hero.png')",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 opacity-90 transition-opacity duration-500 hover:opacity-80"></div>
      </div>

      {/* Content container with animation */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 animate-fadeIn">
        {/* Main heading with text shadow and hover effect */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center tracking-tight leading-tight drop-shadow-lg transform transition-all duration-500 hover:scale-105">
          Pre Engineered <span className="text-[#8CB5FF]">Steel Structures</span>
        </h1>

        {/* Breadcrumb navigation with interactive arrows */}
        <div className="flex items-center text-lg space-x-2 mt-6">
          <span className="hover:text-[#8CB5FF] transition-colors duration-300 flex items-center group">
            Product & Services
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-gray-300">/</span>
          <span className="text-[#8CB5FF] font-bold text-xl hover:text-white transition-colors duration-300">
            Pre Engineered Steel Structures
          </span>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-[#8CB5FF]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>

    {/* Main Content Section */}
    <div className="min-h-screen w-full bg-gray-50 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Top Section with Card and Image */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Services Card with Hover Effect */}
          <div className="bg-white rounded-4xl shadow-lg p-6 md:w-1/3 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <h2 className="text-xl font-bold mb-6 border-b pb-4 border-gray-200">Pre Engineered Steel Structures</h2>

            <div className="space-y-6">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="border-b pb-4 group transition-all duration-300 hover:border-[#8CB5FF]"
                >
                  <div className="flex items-center">
                    <img 
                      src="/arrow-right.png" 
                      alt="" 
                      className='w-6 h-6 mr-2 transform group-hover:translate-x-2 transition-transform duration-300'
                    />
                    <span className="text-gray-700 group-hover:text-[#024965] group-hover:font-medium transition-all duration-300">
                      {service.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Construction Image with Hover Effect */}
          <div className="md:w-2/3 md:ml-6 group">
            <div className="relative overflow-hidden rounded-4xl shadow-lg">
              <img
                src="/pre-engg-img1.png"
                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                className="w-full h-[500px] object-cover transform transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <h1 className='mt-7 text-center text-lg font-bold hover:text-[#024965] transition-colors duration-300'>
              Pre Engineered Steel Building Manufacturers
            </h1>

            <p className='leading-base mt-6 text-gray-700 hover:text-gray-900 transition-colors duration-300'>
              BlueLadder is Pre Engineered Steel Building Manufacturers and suppliers. These steel structures buildings are pre-designed and prefabricated buildings that are made from steel components. The structures are typically used for commercial, industrial, and agricultural buildings, such as warehouses, factories, barns, and aircraft hangars.
            </p>
          </div>
        </div>
      </div>

      {/* Features and Contact Section */}
      <div className="flex flex-col md:flex-row w-full container mx-auto p-4 gap-6">
        {/* Left Panel - Question Section with Hover Effects */}
        <div className="bg-[#024965] text-white rounded-4xl p-8 flex flex-col items-center text-center md:w-1/3 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">You Still Have A Question</h2>

          <p className="text-sm md:text-base mb-8 opacity-90 hover:opacity-100 transition-opacity duration-300">
            if you cannot find answer to your question our FAQ, you can always contact us. We will answer you shortly!
          </p>

          {/* Contact Info with Hover Effects */}
          <div className="w-full space-y-4">
            <div className="bg-white text-[#004258] rounded-full py-2 px-4 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
              <div className="bg-yellow-300 rounded-full p-2 mr-3 transform transition-all duration-300 hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-sm font-medium hover:text-[#024965] transition-colors duration-300">info@domain.com</span>
            </div>

            <div className="bg-white text-[#004258] rounded-full py-2 px-4 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
              <div className="bg-yellow-300 rounded-full p-2 mr-3 transform transition-all duration-300 hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-sm font-medium hover:text-[#024965] transition-colors duration-300">+91 0987654321</span>
            </div>
          </div>
        </div>

        {/* Right Section - Features with Hover Effects */}
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold mb-6 hover:text-[#024965] transition-colors duration-300">Features:</h3>

          {/* Features List with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              "Clear span design",
              "Skylights",
              "Mezzanines and loft areas",
              "Insulation",
              "Roll-up doors"
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="bg-[#345CA5] rounded-full p-1 mr-2 transform transition-all duration-300 hover:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="hover:text-[#024965] hover:font-medium transition-all duration-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* Images with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-4xl overflow-hidden group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
              <img
                src="/pre-engg-img2.png"
                alt="Construction professional reviewing blueprints"
                className="w-full h-48 object-cover transform transition-all duration-700 group-hover:scale-110"
              />
            </div>
            <div className="rounded-4xl overflow-hidden group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
              <img
                src="/pre-engg-img3.png"
                alt="Construction workers at job site"
                className="w-full h-48 object-cover transform transition-all duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Components Section with Hover Effects */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
        <h2 className="text-center text-2xl font-bold mb-8 hover:text-[#024965] transition-colors duration-300">
          Components of a Pre Engineered Steel Building Structure
        </h2>

        <div className="space-y-8">
          {[
            {
              title: "Wall Sheet",
              description: "Wall sheets form the outer skin of a PEB structure, offering both aesthetic appeal and functional protection. They play a crucial role in maintaining the building's insulation, ensuring energy efficiency while safeguarding the interior from external elements."
            },
            {
              title: "Fascias",
              description: "Fascias enhance the visual appeal of a PEB structure by providing a clean finish to the roof and wall intersections. These architectural elements also help in concealing the building's gutter and drainage systems, contributing to a seamless and polished appearance."
            },
            {
              title: "Cranes System",
              description: "An integral part of many PEB structures, the cranes system facilitates efficient material handling and improves the building's operational capabilities. It enables smooth movement and lifting of heavy loads, enhancing productivity in industrial settings."
            },
            {
              title: "Girders",
              description: "Girders are essential structural members that support the weight of the roof and transfer it to the columns. These horizontal beams are critical for maintaining the structural integrity and stability of the PEB, ensuring its ability to withstand loads and forces."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <img 
                  src="/arrow-right.png" 
                  alt="" 
                  className='w-6 h-6 transform transition-all duration-300 hover:translate-x-2'
                />
              </div>
              <div className="ml-4">
                <p className="text-black mt-1 group-hover:text-[#024965] transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section with Enhanced Effects */}
      <div className="bg-[#024965] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-repeat"></div>
        <div className="container mx-auto px-10 py-12 md:py-16 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 transform transition-all duration-500 hover:-translate-y-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something great together!</h2>
              <p className="mb-8 max-w-md opacity-90 hover:opacity-100 transition-opacity duration-300">
                Don't wait any longer to bring your construction dreams to life. Partner with BlueLadder and experience
                unparalleled service and quality.
              </p>
              <button className="bg-[#CDB943] hover:bg-yellow-500 text-gray-800 font-medium py-3 px-8 rounded-full flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get Free Quote
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform transition-all duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end transform transition-all duration-500 hover:scale-105">
              <img
                src="/pre-engg-girl.png"
                alt="Construction professional in safety gear"
                className="max-h-80 -mb-16 object-contain hover:drop-shadow-xl transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
}

export default PreEngg
