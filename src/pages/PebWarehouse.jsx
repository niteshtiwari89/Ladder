import React from 'react'

const PebWarehouse = () => {

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
    //                     backgroundImage: "url('/peb-warehouse-hero.png')", // Replace with your actual image path
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
    //                     PEB Warehouse
    //                 </h1>

    //                 {/* Breadcrumb navigation */}
    //                 <div className="flex items-center text-lg">
    //                     <span className="hover:underline">Product & Services </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="hover:underline">Pre Engineered Steel Structures </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="text-[#8CB5FF] font-bold text-xl">PEB Warehouse</span>
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
    //                             src="/peb-warehouse-img1.png"
    //                             alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
    //                             className="w-full h-[460px] rounded-4xl object-cover"
    //                         />

    //                         <p className='leading-base mt-6'>
    //                             BlueLadder, Top Warehouse construction Company in India, is at the forefront of the industry with its outstanding skills and unique solutions. BlueLadder has built its reputation as a dependable and customer-focused partner by delivering high-quality PEB warehouses. They cater to different project requirements with the latest technology and a competent crew, ensuring timely and cost-effective delivery. Whether it’s a small-scale storage facility or a major distribution centre, BlueLadder’s commitment to excellence shines through in every project they take on, making them the chosen choice for warehouse construction needs in India.
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>



    //             <div className="relative w-full container mx-auto px-4 py-8 md:px-8 lg:px-12 overflow-hidden">
    //                 {/* Background image in the upper right corner */}
    //                 <div
    //                     className="absolute top-0 right-0 w-1/2 h-full opacity-70 pointer-events-none z-0"
    //                     style={{
    //                         backgroundImage:
    //                             "url(/peb-warehouse-img2.png')",
    //                         backgroundSize: "cover",
    //                         backgroundPosition: "center",
    //                         backgroundRepeat: "no-repeat",
    //                     }}
    //                 />

    //                 <div className="relative z-10">
    //                     <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
    //                         Rapid and Affordable Warehouse Construction Solutions by Blueladder EPC, India's Premier PEB Warehouse
    //                         Manufacturer
    //                     </h1>

    //                     <div className="space-y-6">
    //                         <div className="flex items-start">
    //                             <div className="flex-shrink-0 mt-1">
    //                                 <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
    //                                     <svg
    //                                         xmlns="http://www.w3.org/2000/svg"
    //                                         className="h-3 w-3 text-white"
    //                                         viewBox="0 0 20 20"
    //                                         fill="currentColor"
    //                                     >
    //                                         <path
    //                                             fillRule="evenodd"
    //                                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                                             clipRule="evenodd"
    //                                         />
    //                                     </svg>
    //                                 </div>
    //                             </div>
    //                             <p className="ml-4 text-sm md:text-lg text-gray-800">
    //                                 Experience the Speed and Affordability of PreEngineered Warehouses.
    //                             </p>
    //                         </div>

    //                         <div className="flex items-start">
    //                             <div className="flex-shrink-0 mt-1">
    //                                 <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
    //                                     <svg
    //                                         xmlns="http://www.w3.org/2000/svg"
    //                                         className="h-3 w-3 text-white"
    //                                         viewBox="0 0 20 20"
    //                                         fill="currentColor"
    //                                     >
    //                                         <path
    //                                             fillRule="evenodd"
    //                                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                                             clipRule="evenodd"
    //                                         />
    //                                     </svg>
    //                                 </div>
    //                             </div>
    //                             <p className="ml-4 text-sm md:text-lg text-gray-800">
    //                                 Discover the power of PreAEngineering with India's leading manufacturer of top-quality PEB warehouses. Our
    //                                 innovative solutions redefine the speed and cost-effectiveness of warehouse construction for industrial
    //                                 and commercial applications.
    //                             </p>
    //                         </div>

    //                         <div className="flex items-start">
    //                             <div className="flex-shrink-0 mt-1">
    //                                 <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
    //                                     <svg
    //                                         xmlns="http://www.w3.org/2000/svg"
    //                                         className="h-3 w-3 text-white"
    //                                         viewBox="0 0 20 20"
    //                                         fill="currentColor"
    //                                     >
    //                                         <path
    //                                             fillRule="evenodd"
    //                                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                                             clipRule="evenodd"
    //                                         />
    //                                     </svg>
    //                                 </div>
    //                             </div>
    //                             <p className="ml-4 text-sm md:text-lg text-gray-800">
    //                                 Tailored Warehouse Designs to Match Your Requirements: We understand that every client has unique needs.
    //                                 That's why we offer a diverse range of design options to customize your warehouse exactly the way you
    //                                 envision it. From layout to aesthetics, we bring your ideas to life with precision and excellence.
    //                             </p>
    //                         </div>

    //                         <div className="flex items-start">
    //                             <div className="flex-shrink-0 mt-1">
    //                                 <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
    //                                     <svg
    //                                         xmlns="http://www.w3.org/2000/svg"
    //                                         className="h-3 w-3 text-white"
    //                                         viewBox="0 0 20 20"
    //                                         fill="currentColor"
    //                                     >
    //                                         <path
    //                                             fillRule="evenodd"
    //                                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                                             clipRule="evenodd"
    //                                         />
    //                                     </svg>
    //                                 </div>
    //                             </div>
    //                             <p className="ml-4 text-sm md:text-lg text-gray-800">
    //                                 Lightweight Construction for Easy Installation and Future Expansions: Our Pre engineered warehouses
    //                                 feature lightweight construction, ensuring hassle-free installation and the flexibility to accommodate
    //                                 future expansions. Experience the convenience of a rapidly assembled structure without compromising on
    //                                 durability and strength.
    //                             </p>
    //                         </div>

    //                         <div className="flex items-start">
    //                             <div className="flex-shrink-0 mt-1">
    //                                 <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
    //                                     <svg
    //                                         xmlns="http://www.w3.org/2000/svg"
    //                                         className="h-3 w-3 text-white"
    //                                         viewBox="0 0 20 20"
    //                                         fill="currentColor"
    //                                     >
    //                                         <path
    //                                             fillRule="evenodd"
    //                                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                                             clipRule="evenodd"
    //                                         />
    //                                     </svg>
    //                                 </div>
    //                             </div>
    //                             <p className="ml-4 text-sm md:text-lg text-gray-800">
    //                                 Aesthetically Appealing and Modular Warehouse Solutions: At Blueladder EPC, we believe that function
    //                                 should never come at the expense of style. Our prefabricated warehouses boast aesthetically appealing
    //                                 designs and a modular structure, blending seamlessly into any environment while offering unmatched
    //                                 functionality.
    //                             </p>
    //                         </div>

    //                         <div className="flex items-start">
    //                             <div className="flex-shrink-0 mt-1">
    //                                 <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
    //                                     <svg
    //                                         xmlns="http://www.w3.org/2000/svg"
    //                                         className="h-3 w-3 text-white"
    //                                         viewBox="0 0 20 20"
    //                                         fill="currentColor"
    //                                     >
    //                                         <path
    //                                             fillRule="evenodd"
    //                                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                                             clipRule="evenodd"
    //                                         />
    //                                     </svg>
    //                                 </div>
    //                             </div>
    //                             <p className="ml-4 text-sm md:text-lg text-gray-800">
    //                                 Experience the revolution in warehouse construction with Blueladder's innovative and modern technological
    //                                 solutions. Contact us today to explore a new era of rapid and reliable warehouse development.
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>



    //             <div className="min-h-screen p-4 md:p-8 lg:p-12">
    //                 <div className="container mx-auto">
    //                     <div className="text-center mb-8">
    //                         <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
    //                             The Ultimate Modern Storage Solution
    //                         </h1>
    //                         <h2 className="text-lg md:text-xl text-gray-700">Engineered Metal Building Warehouse</h2>
    //                     </div>

    //                     <div className="space-y-4 text-gray-700  md:text-base mb-10">
    //                         <p className='text-xl'>
    //                             PEB Warehouse construction Company are usually made warehouses from a steel frame, with exterior walls and
    //                             roof panels that are also made from steel. The steel components are prefabricated in a factory and then
    //                             shipped to the site, where they are assembled using bolts or welds.
    //                         </p>
    //                         <p className='text-xl'>
    //                             This allows the building to be erected quickly and with minimal on-site construction. PEB warehouses are
    //                             also often designed to be easily expandable, so they can be easily modified or extended as the needs of the
    //                             business change.
    //                         </p>
    //                         <p className='text-xl'>
    //                             Blueladder EPC is India's Leading{" "}
    //                             <span className="underline font-medium">
    //                                 Pre-Engineered Warehouse Manufacturer for Commercial & Industrial Storage
    //                             </span>
    //                             . We stand as the premier warehouse manufacturer in India, specializing in pre-engineered warehouses
    //                             tailored to meet unique client needs while ensuring unrivaled durability.
    //                         </p>
    //                         <p className='text-xl'>
    //                             Our warehouses are meticulously constructed using lightweight yet robust materials, making them the perfect
    //                             choice for both small and large industries. We at Blueladder take pride in offering these prefabricated
    //                             structures at highly competitive prices, without compromising on performance and storage convenience for our
    //                             esteemed clients.
    //                         </p>
    //                         <p className='text-xl'>
    //                             With the industrial landscape advancing rapidly and production levels on the rise, the demand for
    //                             prefabricated warehouses has experienced a significant upswing. At Blueladder, we are committed to meeting
    //                             the specific requirements of every client and guaranteeing maximum performance and efficiency with our
    //                             state-of-the-art, factory-built prefab & preengineered warehouses.
    //                         </p>
    //                     </div>

    //                     <div className="mb-6">
    //                         <h3 className="text-lg md:text-2xl font-semibold text-gray-800 text-center mb-6">Top of the line facility</h3>

    //                         <div className="space-y-4">
    //                             {[
    //                                 "Humanitarian Aid Warehouses: Responding to Global Emergency and Disasters",
    //                                 "Mining and Construction Material Storage: Organized Inventory for Resource Industries",
    //                                 "Automotive Parts Warehousing: Streamlining Supply Chains for Manufacturers",
    //                                 "Aerospace and Aviation Warehouses: Safekeeping of Aircraft Components",
    //                                 "Healthcare and Pharmaceutical Warehousing: Storing Medicines and Medical Supplies",
    //                                 "Smart Warehouses: Integration of IoT and Automation for Enhanced Efficiency",
    //                                 "Retail Warehouses: Supporting Modern Retail Operations and Inventory Management",
    //                                 "Textile and Fashion Industry Warehousing: Storing and Distributing Apparel Products",
    //                                 "Food and Beverage Distribution Centers: Meeting Demands in the Food Industry",
    //                                 "Customizable and Sustainable Warehouses: Eco-friendly Solutions for a Greener Future.",
    //                             ].map((item, index) => (
    //                                 <div key={index} className="flex items-start">
    //                                     <div className="flex-shrink-0 mt-1">
    //                                         <div className="w-5 h-5 rounded-full border border-blue-500 flex items-center justify-center">
    //                                             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
    //                                         </div>
    //                                     </div>
    //                                     <p className="ml-3 text-xl md:text-xl text-gray-700">{item}</p>
    //                                 </div>
    //                             ))}
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
          backgroundImage: "url('/peb-warehouse-hero.png')",
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
          PEB <span className="text-[#8CB5FF]">Warehouse</span>
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
            PEB Warehouse
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
                src="/peb-warehouse-img1.png"
                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                className="w-full h-[460px] object-cover transform transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <p className='leading-base mt-6 text-gray-700 hover:text-gray-900 transition-colors duration-300'>
              BlueLadder, Top Warehouse construction Company in India, is at the forefront of the industry with its outstanding skills and unique solutions. BlueLadder has built its reputation as a dependable and customer-focused partner by delivering high-quality PEB warehouses. They cater to different project requirements with the latest technology and a competent crew, ensuring timely and cost-effective delivery. Whether it's a small-scale storage facility or a major distribution centre, BlueLadder's commitment to excellence shines through in every project they take on, making them the chosen choice for warehouse construction needs in India.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section with Background Image */}
      <div className="relative w-full container mx-auto px-4 py-8 md:px-8 lg:px-12 overflow-hidden">
        {/* Background image in the upper right corner */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-70 pointer-events-none z-0 transform transition-all duration-1000 hover:opacity-90"
          style={{
            backgroundImage: "url('/peb-warehouse-img2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="relative z-10 bg-white/90 backdrop-blur-sm p-6 rounded-4xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 hover:text-[#024965] transition-colors duration-300">
            Rapid and Affordable Warehouse Construction Solutions by Blueladder EPC, India's Premier PEB Warehouse Manufacturer
          </h1>

          <div className="space-y-6">
            {[
              "Experience the Speed and Affordability of PreEngineered Warehouses.",
              "Discover the power of PreAEngineering with India's leading manufacturer of top-quality PEB warehouses. Our innovative solutions redefine the speed and cost-effectiveness of warehouse construction for industrial and commercial applications.",
              "Tailored Warehouse Designs to Match Your Requirements: We understand that every client has unique needs. That's why we offer a diverse range of design options to customize your warehouse exactly the way you envision it. From layout to aesthetics, we bring your ideas to life with precision and excellence.",
              "Lightweight Construction for Easy Installation and Future Expansions: Our Pre engineered warehouses feature lightweight construction, ensuring hassle-free installation and the flexibility to accommodate future expansions. Experience the convenience of a rapidly assembled structure without compromising on durability and strength.",
              "Aesthetically Appealing and Modular Warehouse Solutions: At Blueladder EPC, we believe that function should never come at the expense of style. Our prefabricated warehouses boast aesthetically appealing designs and a modular structure, blending seamlessly into any environment while offering unmatched functionality.",
              "Experience the revolution in warehouse construction with Blueladder's innovative and modern technological solutions. Contact us today to explore a new era of rapid and reliable warehouse development."
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-180 group-hover:bg-[#8CB5FF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
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
                </div>
                <p className="ml-4 text-sm md:text-lg text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ultimate Solution Section */}
      <div className="min-h-screen p-4 md:p-8 lg:p-12 bg-white">
        <div className="container mx-auto transform transition-all duration-500 hover:-translate-y-2">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 hover:text-[#024965] transition-colors duration-300">
              The Ultimate Modern Storage Solution
            </h1>
            <h2 className="text-lg md:text-xl text-gray-700 hover:text-gray-900 transition-colors duration-300">
              Engineered Metal Building Warehouse
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 md:text-base mb-10">
            {[
              "PEB Warehouse construction Company are usually made warehouses from a steel frame, with exterior walls and roof panels that are also made from steel. The steel components are prefabricated in a factory and then shipped to the site, where they are assembled using bolts or welds.",
              "This allows the building to be erected quickly and with minimal on-site construction. PEB warehouses are also often designed to be easily expandable, so they can be easily modified or extended as the needs of the business change.",
              "Blueladder EPC is India's Leading Pre-Engineered Warehouse Manufacturer for Commercial & Industrial Storage. We stand as the premier warehouse manufacturer in India, specializing in pre-engineered warehouses tailored to meet unique client needs while ensuring unrivaled durability.",
              "Our warehouses are meticulously constructed using lightweight yet robust materials, making them the perfect choice for both small and large industries. We at Blueladder take pride in offering these prefabricated structures at highly competitive prices, without compromising on performance and storage convenience for our esteemed clients.",
              "With the industrial landscape advancing rapidly and production levels on the rise, the demand for prefabricated warehouses has experienced a significant upswing. At Blueladder, we are committed to meeting the specific requirements of every client and guaranteeing maximum performance and efficiency with our state-of-the-art, factory-built prefab & preengineered warehouses."
            ].map((paragraph, index) => (
              <p 
                key={index} 
                className="text-xl p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Top Facility Section */}
          <div className="mb-6 transform transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-lg md:text-2xl font-semibold text-gray-800 text-center mb-6 hover:text-[#024965] transition-colors duration-300">
              Top of the line facility
            </h3>

            <div className="space-y-4">
              {[
                "Humanitarian Aid Warehouses: Responding to Global Emergency and Disasters",
                "Mining and Construction Material Storage: Organized Inventory for Resource Industries",
                "Automotive Parts Warehousing: Streamlining Supply Chains for Manufacturers",
                "Aerospace and Aviation Warehouses: Safekeeping of Aircraft Components",
                "Healthcare and Pharmaceutical Warehousing: Storing Medicines and Medical Supplies",
                "Smart Warehouses: Integration of IoT and Automation for Enhanced Efficiency",
                "Retail Warehouses: Supporting Modern Retail Operations and Inventory Management",
                "Textile and Fashion Industry Warehousing: Storing and Distributing Apparel Products",
                "Food and Beverage Distribution Centers: Meeting Demands in the Food Industry",
                "Customizable and Sustainable Warehouses: Eco-friendly Solutions for a Greener Future."
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full border border-blue-500 flex items-center justify-center transform transition-all duration-300 group-hover:bg-blue-500 group-hover:scale-110">
                      <div className="w-2 h-2 bg-blue-500 rounded-full transform transition-all duration-300 group-hover:bg-white"></div>
                    </div>
                  </div>
                  <p className="ml-3 text-xl md:text-xl text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
}

export default PebWarehouse
