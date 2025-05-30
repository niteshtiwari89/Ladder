import React from 'react'

const PebSpinning = () => {

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
    //                     backgroundImage: "url('/peb-spinning-hero.png')", // Replace with your actual image path
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
    //                     PEB Spinning & Ginning Sheds
    //                 </h1>

    //                 {/* Breadcrumb navigation */}
    //                 <div className="flex items-center text-lg">
    //                     <span className="hover:underline">Product & Services </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="hover:underline">Pre Engineered Steel Structures </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="text-[#8CB5FF] font-bold text-xl"> PEB Spinning & Ginning Sheds</span>
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
    //                             src="/peb-spinning-img1.png"
    //                             alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
    //                             className="w-full h-[460px] rounded-4xl object-contain"
    //                         />

    //                         <p className='leading-base mt-6'>
    //                             sheds are facilities where raw cotton is processed into a usable fiber. The process begins with PEB spinning, which involves separating the seeds from the cotton fibers. This is done using a machine called a cotton gin, which separates the fibers from the seeds by pulling them through a series of wire screens and saw-toothed disks.
    //                             Once the seeds have been removed, the cotton fibers are cleaned and prepared for spinning. This is done using a variety of machines, such as carding machines and drawing frames, which comb and straighten the fibers.

    //                             The fibers are then spun into yarn, which is used to make a variety of products, including clothing, bedding, and towels. Ginning sheds are typically large, industrial facilities that are equipped with a range of machines and equipment to process raw cotton into usable fiber.
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>



    //             <div className="w-full container mx-auto p-6 font-sans">
    //                 {/* Main heading */}
    //                 <h1 className="text-center text-2xl md:text-xl font-bold mb-12 text-gray-900">
    //                     Why Choose Blueladder EPC Solutions for PEB Spinning & Ginning Sheds?
    //                 </h1>

    //                 {/* Grid layout for the four sections */}
    //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
    //                     {/* Section 1: Expertise in PEB Construction */}
    //                     <div>
    //                         <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">
    //                             Expertise in PEB Construction
    //                         </h2>
    //                         <div className="bg-blue-50 rounded-xl p-6 md:p-10 shadow-sm">
    //                         <p className="text-gray-700 text-center">
    //                             At Blueladder EPC, we bring decades of experience to the table. Our
    //                             skilled engineers and architects specialize in PEB construction, ensuring
    //                             that your spinning and ginning sheds are built to perfection. We
    //                             understand the unique requirements of the textile industry and tailor
    //                             our designs accordingly.
    //                         </p>
    //                     </div>
    //                     </div>

    //                     {/* Section 2: Customized Solution */}
    //                    <div>
    //                         <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">
    //                             Customized Solution
    //                         </h2>
    //                      <div className="bg-blue-50 rounded-xl p-6 md:p-10 shadow-sm">
    //                         <p className="text-gray-700 text-center">
    //                             We recognize that every project is different. That's why we offer fully
    //                             customized PEB spinning and ginning shed solutions. Our team will work
    //                             closely with you to understand your specific needs, ensuring that your
    //                             facility is optimized for maximum productivity.
    //                         </p>
    //                     </div>
    //                    </div>

    //                     {/* Section 3: Quality Materials & Construction */}
    //                     <div>
    //                         <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">
    //                             Quality Materials & Construction
    //                         </h2>
    //                         <div className="bg-blue-50 rounded-xl p-6 md:p-10 shadow-sm">
    //                         <p className="text-gray-700 text-center">
    //                             Quality is at the heart of everything we do. Blueladder EPC uses only the
    //                             finest materials and cutting-edge construction techniques,
    //                             guaranteeing the longevity and durability of your spinning and ginning
    //                             sheds. Our commitment to excellence is evident in every project we
    //                             undertake.
    //                         </p>
    //                     </div>
    //                     </div>

    //                     {/* Section 4: Timely Project Delivery */}
    //                    <div>
    //                         <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">
    //                             Timely Project Delivery
    //                         </h2>
    //                      <div className="bg-blue-50 rounded-xl p-6 md:p-10 shadow-sm">
    //                         <p className="text-gray-700 text-center">
    //                             Time is of the essence in the textile industry. Our streamlined
    //                             construction processes and project management expertise ensure that
    //                             your PEB spinning and ginning sheds are completed on schedule. We
    //                             prioritize your operational timelines and minimize disruptions.
    //                         </p>
    //                     </div>
    //                    </div>
    //                 </div>
    //             </div>

    //             <div className="w-full max-w-6xl mx-auto p-6 my-6">
    //                 <p className="text-center text-[#024965] text-base md:text-lg">
    //                     When it comes to PEB spinning and ginning sheds, Blueladder EPC is your trusted partner. Our commitment to quality & customization sets us apart. Contact us today to discuss your project and discover how we can help you achieve your goals. Your success is our priority.
    //                 </p>
    //             </div>


    //         </div>

    //     </>
    // )

    return (
    <>
        {/* Hero Section with Background Image - Added parallax effect */}
        <div className="relative w-full h-80 md:h-96 overflow-hidden group">
            {/* Background image with overlay and subtle zoom effect */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 group-hover:scale-105"
                style={{
                    backgroundImage: "url('/peb-spinning-hero.png')",
                    backgroundPosition: 'center',
                }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            </div>

            {/* Content container with fade-in effect */}
            <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                {/* Main heading with slight scale effect */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center transform transition duration-500 hover:scale-105">
                    PEB Spinning & Ginning Sheds
                </h1>

                {/* Breadcrumb navigation with hover effects */}
                <div className="flex flex-wrap items-center justify-center text-lg space-x-2">
                    <span className="hover:underline hover:text-blue-300 transition-colors duration-300">Product & Services</span>
                    <span>/</span>
                    <span className="hover:underline hover:text-blue-300 transition-colors duration-300">Pre Engineered Steel Structures</span>
                    <span>/</span>
                    <span className="text-[#8CB5FF] font-bold text-xl hover:text-blue-200 transition-colors duration-300">PEB Spinning & Ginning Sheds</span>
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

        {/* Main Content */}
        <div className="min-h-screen w-full bg-gray-50 relative overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
                {/* Top Section with Card and Image */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    {/* Services Card with hover elevation */}
                    <div className="bg-white rounded-4xl shadow-md p-6 md:w-1/3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <h2 className="text-xl font-bold mb-6">Pre Engineered Steel Structures</h2>

                        <div className="space-y-6">
                            {services.map((service) => (
                                <div key={service.id} className="border-b pb-4 group">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                                            <span className="text-blue-600 text-sm transition-all duration-300 group-hover:text-white">✓</span>
                                        </div>
                                        <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-600">{service.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Construction Image with floating animation */}
                    <div className="md:w-2/3">
                        <div className="animate-float">
                            <img
                                src="/peb-spinning-img1.png"
                                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                className="w-full h-[460px] rounded-4xl object-contain shadow-md transition-all duration-300 hover:shadow-lg"
                            />
                        </div>

                        <p className='leading-base mt-6 transition-all duration-300 hover:text-gray-900'>
                            sheds are facilities where raw cotton is processed into a usable fiber. The process begins with PEB spinning, which involves separating the seeds from the cotton fibers. This is done using a machine called a cotton gin, which separates the fibers from the seeds by pulling them through a series of wire screens and saw-toothed disks.
                            Once the seeds have been removed, the cotton fibers are cleaned and prepared for spinning. This is done using a variety of machines, such as carding machines and drawing frames, which comb and straighten the fibers.

                            The fibers are then spun into yarn, which is used to make a variety of products, including clothing, bedding, and towels. Ginning sheds are typically large, industrial facilities that are equipped with a range of machines and equipment to process raw cotton into usable fiber.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="w-full container mx-auto p-6 font-sans">
                {/* Main heading with subtle animation */}
                <h1 className="text-center text-2xl md:text-xl font-bold mb-12 text-gray-900 transform transition duration-500 hover:scale-105">
                    Why Choose Blueladder EPC Solutions for PEB Spinning & Ginning Sheds?
                </h1>

                {/* Grid layout with animated cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Section 1: Expertise in PEB Construction */}
                    <div className="transform transition duration-500 hover:-translate-y-1">
                        <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">
                            Expertise in PEB Construction
                        </h2>
                        <div className="bg-blue-50 rounded-xl p-6 md:p-10 shadow-sm transition-all duration-500 hover:shadow-md hover:bg-blue-100">
                            <p className="text-gray-700 text-center">
                                At Blueladder EPC, we bring decades of experience to the table. Our
                                skilled engineers and architects specialize in PEB construction, ensuring
                                that your spinning and ginning sheds are built to perfection. We
                                understand the unique requirements of the textile industry and tailor
                                our designs accordingly.
                            </p>
                        </div>
                    </div>

                    {/* Section 2: Customized Solution */}
                    <div className="transform transition duration-500 hover:-translate-y-1">
                        <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">
                            Customized Solution
                        </h2>
                        <div className="bg-blue-50 rounded-xl p-6 md:p-10 shadow-sm transition-all duration-500 hover:shadow-md hover:bg-blue-100">
                            <p className="text-gray-700 text-center">
                                We recognize that every project is different. That's why we offer fully
                                customized PEB spinning and ginning shed solutions. Our team will work
                                closely with you to understand your specific needs, ensuring that your
                                facility is optimized for maximum productivity.
                            </p>
                        </div>
                    </div>

                    {/* Section 3: Quality Materials & Construction */}
                    <div className="transform transition duration-500 hover:-translate-y-1">
                        <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">
                            Quality Materials & Construction
                        </h2>
                        <div className="bg-blue-50 rounded-xl p-6 md:p-10 shadow-sm transition-all duration-500 hover:shadow-md hover:bg-blue-100">
                            <p className="text-gray-700 text-center">
                                Quality is at the heart of everything we do. Blueladder EPC uses only the
                                finest materials and cutting-edge construction techniques,
                                guaranteeing the longevity and durability of your spinning and ginning
                                sheds. Our commitment to excellence is evident in every project we
                                undertake.
                            </p>
                        </div>
                    </div>

                    {/* Section 4: Timely Project Delivery */}
                    <div className="transform transition duration-500 hover:-translate-y-1">
                        <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">
                            Timely Project Delivery
                        </h2>
                        <div className="bg-blue-50 rounded-xl p-6 md:p-10 shadow-sm transition-all duration-500 hover:shadow-md hover:bg-blue-100">
                            <p className="text-gray-700 text-center">
                                Time is of the essence in the textile industry. Our streamlined
                                construction processes and project management expertise ensure that
                                your PEB spinning and ginning sheds are completed on schedule. We
                                prioritize your operational timelines and minimize disruptions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section with pulse animation */}
            <div className="w-full max-w-6xl mx-auto p-6 my-6 text-center animate-pulse-slow">
                <p className="text-[#024965] text-base md:text-lg transition-all duration-500 hover:scale-105">
                    When it comes to PEB spinning and ginning sheds, Blueladder EPC is your trusted partner. Our commitment to quality & customization sets us apart. Contact us today to discuss your project and discover how we can help you achieve your goals. Your success is our priority.
                </p>
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow-md transition-all duration-500 hover:scale-110 hover:shadow-lg">
                    Get a Free Consultation
                </button>
            </div>
        </div>

        {/* Animation styles */}
        <style jsx>{`
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            @keyframes pulseSlow {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.9; }
            }
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
            .animate-pulse-slow {
                animation: pulseSlow 3s ease-in-out infinite;
            }
        `}</style>
    </>
)
}

export default PebSpinning
