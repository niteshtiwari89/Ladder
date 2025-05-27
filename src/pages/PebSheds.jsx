import React from 'react'

const PebSheds = () => {

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
    //                     backgroundImage: "url('/peb-shed-hero.png')", // Replace with your actual image path
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
    //                     PEB Sheds
    //                 </h1>

    //                 {/* Breadcrumb navigation */}
    //                 <div className="flex items-center text-lg">
    //                     <span className="hover:underline">Product & Services </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="hover:underline">Pre Engineered Steel Structures </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="text-[#8CB5FF] font-bold text-xl">PEB Sheds</span>
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
    //                             src="/peb-shed-img1.png"
    //                             alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
    //                             className="w-full h-[460px] rounded-4xl object-contain"
    //                         />

    //                         <p className='leading-base mt-6'>
    //                             <span className='font-semibold'>Blueladder PEB Shed Manufacturer in India</span> EPC has established itself as the fastest-growing industrial shed manufacturer and supplier in Central India, catering to the diverse demands of the construction industry. We are the leading producer of prefabricated buildings & we provide excellent solutions for industrial sheds at competitive construction expenses. The utilization of pre-engineered constructions has gained popularity across various industries, with a particular focus on the highly desirable pre-engineered industrial sheds.
    //                             <br />
    //                             In PEB sheds pre cast panels are lifted into place and connected together using bolts or other fasteners. Because the panels are precast, they can be made in a factory setting, which allows for faster construction and more consistent quality.
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>



    //             <div className="flex flex-wrap justify-center md:justify-evenly items-center mb-8 px-5">
    //                 {/* Building Illustration */}
    //                 <div className="flex justify-center md:block">
    //                     <img
    //                         src="/peb-shed-img2.png"
    //                         alt="Pre-engineered building structure diagram"
    //                         className="w-[300px] md:w-[400px] h-auto"
    //                     />
    //                 </div>

    //                 {/* Text Content */}
    //                 <div className="max-w-full md:w-[700px] text-center md:text-left px-4">
    //                     <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
    //                         PEB SHEDS – INDUSTRIAL STRUCTURES THAT LAST LONG
    //                     </h2>

    //                     <p className="text-sm md:text-base">
    //                         At Blueladder EPC, the leading industrial shed company in India, we prioritize custom-designed architecture and
    //                         client-specific construction. Our pre-engineered structures are crafted to meet the unique requirements of each
    //                         customer, forming the cornerstone of our progress and success. With a meticulous manufacturing process and the
    //                         use of high-quality raw materials, we confidently offer a lifetime guarantee of durability and exceptional
    //                         service for these industrial PEB sheds. Here are the remarkable features of our pre-engineered fabricated structures:
    //                     </p>
    //                 </div>
    //             </div>




    //             <div className="relative w-full container mx-auto px-4 py-8 md:px-8 lg:px-12 overflow-hidden">

    //                 <div className="relative z-10">
    //                     <h1 className="text-2xl text-center font-bold text-gray-900 mb-8">
    //                         Explore the Outstanding Features of Our Top-notch PEB Industrial Sheds
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
    //                                 Robust Design for Unmatched Longevity: Our industrial sheds boast a rugged design that ensures optimum longevity. Built to withstand the test of time, these structures provide lasting protection for your valuable assets.
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
    //                                 Shielded from the Elements: We understand the importance of safeguarding your investments. That’s why our industrial sheds are resistant to rust, moisture, and harmful UV rays, providing reliable protection against environmental damage.
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
    //                                 Swift Installation and Construction: Say goodbye to the hassle of traditional shed construction. Our pre-engineered structures offer rapid installation, significantly reducing downtime and saving valuable resources.
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
    //                                 Enhanced Fire Resistance: Safety is a top priority for us. Our industrial sheds are designed with optimal fire resistance features, providing you with peace of mind and added protection.
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
    //                                 Cost-effective Construction Solution: We believe in providing value to our customers. Our industrial sheds offer a cost-effective alternative to conventional construction, saving you money without compromising on quality.
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>



    //             <div className="min-h-screen p-4 md:p-8 lg:p-12">
    //                 <div className="container mx-auto">
    //                     <div className="text-center mb-8">
    //                         <h1 className="text-xl text-center font-semibold text-gray-800 mb-2">
    //                             PEB Shed Applications
    //                         </h1>
    //                     </div>

    //                     <div className="space-y-4 text-gray-700 text-sm md:text-lg mb-10">
    //                         <p>
    //                             Revolutionizing the Transport Industry: PEB sheds can serve as maintenance workshops, storage facilities, or even loading and unloading areas, ensuring the seamless functioning of transport operations. With the possibility of integrating additional insulation support, these sheds help maintain optimal temperatures for sensitive cargo, reducing the risk of damage during transit.
    //                         </p>


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
    //                                 Safeguarding the Chemical Industry: The chemical industry often deals with hazardous materials that require special handling and storage considerations. Our industrial sheds offer a safe and controlled environment, providing protection against harsh weather conditions and preventing chemical spills. These structures can be customized to meet specific safety regulations, ensuring compliance and peace of mind for chemical manufacturers and distributors.
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
    //                                 Empowering Manufacturing Centers: Our industrial sheds are designed to accommodate heavy machinery and streamline production processes. With their expansive open spaces and flexible layouts, these sheds can house manufacturing units, assembly lines, and quality control centers.
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
    //                                 Efficient Warehousing Solutions: PEB sheds provide ample space for storing goods and materials, optimizing inventory management. Additionally, the ability to incorporate insulation support helps maintain temperature control, safeguarding perishable items and delicate merchandise. Our industrial sheds ensure that warehousing operations run smoothly, enabling businesses to meet customer demands promptly and efficiently.
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
    //                                 Enabling Dynamic Commercial Outlets: Retail and commercial spaces need to be aesthetically appealing while offering functional features.Our industrial sheds can be customized to create attractive and modern commercial outlets that draw in customers. Whether it’s retail stores, showrooms, or entertainment centers, these versatile structures offer the adaptability required to match unique design preferences and functional requirements.
    //                             </p>

    //                         </div>
    //                     </div>

    //                     <p className="text-xl text-center">Choose Blueladder EPC Pvt Ltd for best-in-class industrial sheds that combine superior craftsmanship, durability, and affordability. Experience the difference of tailored solutions that cater to your specific needs. Contact us today to explore our extensive range of prefabricated structures.</p>


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
          backgroundImage: "url('/peb-shed-hero.png')",
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
          PEB <span className="text-[#8CB5FF]">Sheds</span>
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
            PEB Sheds
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
                src="/peb-shed-img1.png"
                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                className="w-full h-[460px] object-contain transform transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <p className='leading-base mt-6 text-gray-700 hover:text-gray-900 transition-colors duration-300'>
              <span className='font-semibold hover:text-[#024965] transition-colors duration-300'>Blueladder PEB Shed Manufacturer in India</span> EPC has established itself as the fastest-growing industrial shed manufacturer and supplier in Central India, catering to the diverse demands of the construction industry. We are the leading producer of prefabricated buildings & we provide excellent solutions for industrial sheds at competitive construction expenses. The utilization of pre-engineered constructions has gained popularity across various industries, with a particular focus on the highly desirable pre-engineered industrial sheds.
              <br /><br />
              In PEB sheds pre cast panels are lifted into place and connected together using bolts or other fasteners. Because the panels are precast, they can be made in a factory setting, which allows for faster construction and more consistent quality.
            </p>
          </div>
        </div>
      </div>

      {/* Image and Text Section */}
      <div className="flex flex-wrap justify-center md:justify-evenly items-center mb-8 px-5 transform transition-all duration-500 hover:-translate-y-2">
        {/* Building Illustration */}
        <div className="flex justify-center md:block group">
          <img
            src="/peb-shed-img2.png"
            alt="Pre-engineered building structure diagram"
            className="w-[300px] md:w-[400px] h-auto transform transition-all duration-700 group-hover:scale-110"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-full md:w-[700px] text-center md:text-left px-4">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 hover:text-[#024965] transition-colors duration-300">
            PEB SHEDS – INDUSTRIAL STRUCTURES THAT LAST LONG
          </h2>

          <p className="text-sm md:text-base hover:text-gray-900 transition-colors duration-300">
            At Blueladder EPC, the leading industrial shed company in India, we prioritize custom-designed architecture and
            client-specific construction. Our pre-engineered structures are crafted to meet the unique requirements of each
            customer, forming the cornerstone of our progress and success. With a meticulous manufacturing process and the
            use of high-quality raw materials, we confidently offer a lifetime guarantee of durability and exceptional
            service for these industrial PEB sheds. Here are the remarkable features of our pre-engineered fabricated structures:
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative w-full container mx-auto px-4 py-8 md:px-8 lg:px-12 overflow-hidden">
        <div className="relative z-10 bg-white/90 backdrop-blur-sm p-6 rounded-4xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <h1 className="text-2xl text-center font-bold text-gray-900 mb-8 hover:text-[#024965] transition-colors duration-300">
            Explore the Outstanding Features of Our Top-notch PEB Industrial Sheds
          </h1>

          <div className="space-y-6">
            {[
              "Robust Design for Unmatched Longevity: Our industrial sheds boast a rugged design that ensures optimum longevity. Built to withstand the test of time, these structures provide lasting protection for your valuable assets.",
              "Shielded from the Elements: We understand the importance of safeguarding your investments. That's why our industrial sheds are resistant to rust, moisture, and harmful UV rays, providing reliable protection against environmental damage.",
              "Swift Installation and Construction: Say goodbye to the hassle of traditional shed construction. Our pre-engineered structures offer rapid installation, significantly reducing downtime and saving valuable resources.",
              "Enhanced Fire Resistance: Safety is a top priority for us. Our industrial sheds are designed with optimal fire resistance features, providing you with peace of mind and added protection.",
              "Cost-effective Construction Solution: We believe in providing value to our customers. Our industrial sheds offer a cost-effective alternative to conventional construction, saving you money without compromising on quality."
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

      {/* Applications Section */}
      <div className="min-h-screen p-4 md:p-8 lg:p-12 bg-white">
        <div className="container mx-auto transform transition-all duration-500 hover:-translate-y-2">
          <div className="text-center mb-8">
            <h1 className="text-xl text-center font-semibold text-gray-800 mb-2 hover:text-[#024965] transition-colors duration-300">
              PEB Shed Applications
            </h1>
          </div>

          <div className="space-y-6 text-gray-700 text-sm md:text-lg mb-10">
            <p className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Revolutionizing the Transport Industry: PEB sheds can serve as maintenance workshops, storage facilities, or even loading and unloading areas, ensuring the seamless functioning of transport operations. With the possibility of integrating additional insulation support, these sheds help maintain optimal temperatures for sensitive cargo, reducing the risk of damage during transit.
            </p>

            {[
              "Safeguarding the Chemical Industry: The chemical industry often deals with hazardous materials that require special handling and storage considerations. Our industrial sheds offer a safe and controlled environment, providing protection against harsh weather conditions and preventing chemical spills. These structures can be customized to meet specific safety regulations, ensuring compliance and peace of mind for chemical manufacturers and distributors.",
              "Empowering Manufacturing Centers: Our industrial sheds are designed to accommodate heavy machinery and streamline production processes. With their expansive open spaces and flexible layouts, these sheds can house manufacturing units, assembly lines, and quality control centers.",
              "Efficient Warehousing Solutions: PEB sheds provide ample space for storing goods and materials, optimizing inventory management. Additionally, the ability to incorporate insulation support helps maintain temperature control, safeguarding perishable items and delicate merchandise. Our industrial sheds ensure that warehousing operations run smoothly, enabling businesses to meet customer demands promptly and efficiently.",
              "Enabling Dynamic Commercial Outlets: Retail and commercial spaces need to be aesthetically appealing while offering functional features.Our industrial sheds can be customized to create attractive and modern commercial outlets that draw in customers. Whether it's retail stores, showrooms, or entertainment centers, these versatile structures offer the adaptability required to match unique design preferences and functional requirements."
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

            <p className="text-xl text-center p-6 rounded-lg bg-gray-50 hover:bg-[#8CB5FF]/10 transition-colors duration-300">
              Choose Blueladder EPC Pvt Ltd for best-in-class industrial sheds that combine superior craftsmanship, durability, and affordability. Experience the difference of tailored solutions that cater to your specific needs. Contact us today to explore our extensive range of prefabricated structures.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)
}

export default PebSheds
