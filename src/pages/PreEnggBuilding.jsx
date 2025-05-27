import React from 'react'

const PreEnggBuilding = () => {

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
    //                     backgroundImage: "url('/pre-building-hero.png')", // Replace with your actual image path
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
    //                 Pre Engineered Buildings
    //                 </h1>

    //                 {/* Breadcrumb navigation */}
    //                 <div className="flex items-center text-lg">
    //                     <span className="hover:underline">Product & Services </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="hover:underline">Pre Engineered Steel Structures </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="text-[#8CB5FF] font-bold text-xl">Pre Engineered Buildings</span>
    //                 </div>
    //             </div>
    //         </div>



    //         {/* Main Content */}
    //         <div className="min-h-screen w-full bg-gray-50 relative overflow-hidden">
    //             <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
    //                 {/* Top Section with Card and Image */}
    //                 <div className="flex flex-col md:flex-row gap-6 mb-8">
    //                     {/* Services Card */}
    //                     <div className="bg-white rounded-4xl shadow-md p-6 md:w-1/3">
    //                         <h2 className="text-xl font-bold mb-6">Pre Engineered Steel Structures</h2>

    //                         <div className="space-y-6">
    //                             {services.map((service) => (
    //                                 <div key={service.id} className="border-b pb-4">
    //                                     <div className="flex items-center">
    //                                         <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
    //                                             <span className="text-blue-600 text-sm">✓</span>
    //                                         </div>
    //                                         <span className="text-gray-700">{service.name}</span>
    //                                     </div>
    //                                 </div>
    //                             ))}
    //                         </div>
    //                     </div>

    //                     {/* Construction Image */}
    //                     <div className="md:w-2/3">
    //                         <img
    //                             src="/pre-building-img1.png"
    //                             alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
    //                             className="w-full h-[400px] rounded-4xl shadow-md object-cover"
    //                         />

    //                         <h1 className='mt-7 text-center text-lg font-bold'>Pre Engineered Building</h1>

    //                         <h3 className='text-center font-semibold'>PEB Construction Company & Manufacturers</h3>

    //                         <p className='leading-base mt-6'>
    //                             As a premier manufacturer of pre-engineered buildings(PEBs), we take pride in providing top-notch solutions for multi-storey PEBs with a seamless turnkey approach. Our commitment to excellence has enabled us to build a robust and growing client network, as our offerings come with numerous advantages.
    //                             <br />
    //                             The hallmark of our pre-engineered buildings lies in their cost-effectiveness and exceptional durability. These structures stand the test of time, making them a highly desirable choice in the construction industry.                             </p>
    //                     </div>

    //                 </div>
    //             </div>


    //             <div className="container mx-auto p-4 md:p-6">
    //                 <div className="p-6 md:p-8">
    //                     {/* Components Categories Section */}
    //                     <div className="grid md:grid-cols-2 gap-8 mb-12">
    //                         <div>
    //                             <h2 className="text-xl font-semibold mb-6">PEB components can be categorized as follows:</h2>

    //                             <div className="space-y-6">
    //                                 {/* Primary Members */}
    //                                 <div className="flex">
    //                                     <div className="flex-shrink-0 mt-1">
    //                                         <div className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center">
    //                                             <div className="w-2 h-2 rounded-full bg-blue-600"></div>
    //                                         </div>
    //                                     </div>
    //                                     <div className="ml-4">
    //                                         <p className="text-gray-800">
    //                                             <span className="font-medium">Primary Members include:</span> Columns, Rafters, Crane beams, etc.
    //                                         </p>
    //                                     </div>
    //                                 </div>

    //                                 {/* Secondary Members */}
    //                                 <div className="flex">
    //                                     <div className="flex-shrink-0 mt-1">
    //                                         <div className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center">
    //                                             <div className="w-2 h-2 rounded-full bg-blue-600"></div>
    //                                         </div>
    //                                     </div>
    //                                     <div className="ml-4">
    //                                         <p className="text-gray-800">
    //                                             <span className="font-medium">Secondary Members include:</span> Purlins, Bracings, Tie rods, Angle
    //                                             bracings, High Tensile Bolts and washers etc
    //                                         </p>
    //                                     </div>
    //                                 </div>

    //                                 {/* Roofing & Cladding */}
    //                                 <div className="flex">
    //                                     <div className="flex-shrink-0 mt-1">
    //                                         <div className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center">
    //                                             <div className="w-2 h-2 rounded-full bg-blue-600"></div>
    //                                         </div>
    //                                     </div>
    //                                     <div className="ml-4">
    //                                         <p className="text-gray-800">
    //                                             <span className="font-medium">Roofing, Cladding & Accessories include:</span> Top Roof
    //                                             Sheets/Panels, Side Cladding (Vertical) Sheets/Panels, Skylights Sheets, Ventilators, Louvers,
    //                                             Downspouts, etc.
    //                                         </p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                         {/* Building Illustration */}
    //                         <div className="flex justify-center items-center">
    //                             <img
    //                                 src="/pre-building-img2.png"
    //                                 alt="Pre-engineered building structure diagram"
    //                                 className="max-w-full h-auto"
    //                             />
    //                         </div>
    //                     </div>

    //                     {/* Advantages Section */}
    //                     <div>
    //                         <h2 className="text-xl font-semibold mb-6 text-center">Advantages Of Pre-engineered buildings</h2>

    //                         <div className="space-y-4 text-gray-700">
    //                             <p>
    //                                 One of the main advantages of PEB is that it can be customized to meet the specific needs of the customer.
    //                                 For example, the size, shape, and layout of the building can be customized to fit the desired use, and the
    //                                 building can be designed to meet specific building codes and regulations.
    //                             </p>

    //                             <p>
    //                                 Pre-engineered buildings are also typically easier and faster to construct than traditional buildings, as
    //                                 the components are pre-fabricated and ready to be assembled on-site.
    //                             </p>

    //                             <p>
    //                                 The buildings are also known for their durability and long lifespan. The steel components used in these
    //                                 buildings are strong and resistant to damage from weather and other external factors. Additionally, PEB
    //                                 buildings are often designed with energy efficiency in mind and can be equipped with features such as
    //                                 insulation and energy-efficient lighting to reduce energy consumption and costs. Overall, pre-engineered
    //                                 buildings are a cost-effective and efficient solution for a wide range of construction projects. We offer
    //                                 customization, durability, and versatility, and can be a good choice for a variety of applications.
    //                             </p>
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
          backgroundImage: "url('/pre-building-hero.png')",
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
          Pre Engineered <span className="text-[#8CB5FF]">Buildings</span>
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
          <span className="hover:text-[#8CB5FF] transition-colors duration-300 flex items-center group">
            Pre Engineered Steel Structures
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
            Pre Engineered Buildings
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
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 transform transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                      <span className="text-blue-600 text-sm group-hover:text-white transition-colors duration-300">✓</span>
                    </div>
                    <span className="text-gray-700 group-hover:text-[#024965] group-hover:font-medium transition-all duration-300">
                      {service.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Construction Image with Hover Effect */}
          <div className="md:w-2/3 group">
            <div className="relative overflow-hidden rounded-4xl shadow-lg">
              <img
                src="/pre-building-img1.png"
                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                className="w-full h-[400px] object-cover transform transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <h1 className='mt-7 text-center text-lg font-bold hover:text-[#024965] transition-colors duration-300'>
              Pre Engineered Building
            </h1>

            <h3 className='text-center font-semibold hover:text-[#345CA5] transition-colors duration-300'>
              PEB Construction Company & Manufacturers
            </h3>

            <p className='leading-base mt-6 text-gray-700 hover:text-gray-900 transition-colors duration-300'>
              As a premier manufacturer of pre-engineered buildings(PEBs), we take pride in providing top-notch solutions for multi-storey PEBs with a seamless turnkey approach. Our commitment to excellence has enabled us to build a robust and growing client network, as our offerings come with numerous advantages.
              <br /><br />
              The hallmark of our pre-engineered buildings lies in their cost-effectiveness and exceptional durability. These structures stand the test of time, making them a highly desirable choice in the construction industry.
            </p>
          </div>
        </div>
      </div>

      {/* Components Categories Section */}
      <div className="container mx-auto p-4 md:p-6">
        <div className="p-6 md:p-8 bg-white rounded-4xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-semibold mb-6 hover:text-[#024965] transition-colors duration-300">PEB components can be categorized as follows:</h2>

              <div className="space-y-6">
                {/* Primary Members */}
                <div className="flex p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center transform transition-all duration-300 hover:scale-125 hover:bg-blue-600">
                      <div className="w-2 h-2 rounded-full bg-blue-600 transform transition-all duration-300 hover:bg-white"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 hover:text-gray-900 transition-colors duration-300">
                      <span className="font-medium">Primary Members include:</span> Columns, Rafters, Crane beams, etc.
                    </p>
                  </div>
                </div>

                {/* Secondary Members */}
                <div className="flex p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center transform transition-all duration-300 hover:scale-125 hover:bg-blue-600">
                      <div className="w-2 h-2 rounded-full bg-blue-600 transform transition-all duration-300 hover:bg-white"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 hover:text-gray-900 transition-colors duration-300">
                      <span className="font-medium">Secondary Members include:</span> Purlins, Bracings, Tie rods, Angle
                      bracings, High Tensile Bolts and washers etc
                    </p>
                  </div>
                </div>

                {/* Roofing & Cladding */}
                <div className="flex p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center transform transition-all duration-300 hover:scale-125 hover:bg-blue-600">
                      <div className="w-2 h-2 rounded-full bg-blue-600 transform transition-all duration-300 hover:bg-white"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 hover:text-gray-900 transition-colors duration-300">
                      <span className="font-medium">Roofing, Cladding & Accessories include:</span> Top Roof
                      Sheets/Panels, Side Cladding (Vertical) Sheets/Panels, Skylights Sheets, Ventilators, Louvers,
                      Downspouts, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Building Illustration with Hover Effect */}
            <div className="flex justify-center items-center group">
              <img
                src="/pre-building-img2.png"
                alt="Pre-engineered building structure diagram"
                className="max-w-full h-auto transform transition-all duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Advantages Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-center hover:text-[#024965] transition-colors duration-300">
              Advantages Of Pre-engineered buildings
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                One of the main advantages of PEB is that it can be customized to meet the specific needs of the customer.
                For example, the size, shape, and layout of the building can be customized to fit the desired use, and the
                building can be designed to meet specific building codes and regulations.
              </p>

              <p className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                Pre-engineered buildings are also typically easier and faster to construct than traditional buildings, as
                the components are pre-fabricated and ready to be assembled on-site.
              </p>

              <p className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                The buildings are also known for their durability and long lifespan. The steel components used in these
                buildings are strong and resistant to damage from weather and other external factors. Additionally, PEB
                buildings are often designed with energy efficiency in mind and can be equipped with features such as
                insulation and energy-efficient lighting to reduce energy consumption and costs. Overall, pre-engineered
                buildings are a cost-effective and efficient solution for a wide range of construction projects. We offer
                customization, durability, and versatility, and can be a good choice for a variety of applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
}

export default PreEnggBuilding
