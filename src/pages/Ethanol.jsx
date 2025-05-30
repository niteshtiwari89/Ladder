import React from 'react'
import { Check } from 'lucide-react'

const Ethanol = () => {

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
    //                     backgroundImage: "url('/ethanol-hero.png')", // Replace with your actual image path
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
    //                     Ethanol Sheds
    //                 </h1>

    //                 {/* Breadcrumb navigation */}
    //                 <div className="flex items-center text-lg">
    //                     <span className="hover:underline">Product & Services </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="hover:underline">Pre Engineered Steel Structures </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="text-[#8CB5FF] font-bold text-xl">Ethanol Sheds</span>
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
    //                             src="/ethanol-img1.png"
    //                             alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
    //                             className="w-full h-[460px] rounded-4xl object-contain"
    //                         />

    //                         <p className='leading-base mt-6'>
    //                             PEB Ethanol sheds are facilities used for the storage and handling of ethanol, which is a type of alcohol that is commonly used as a fuel additive or solvent. These sheds are typically designed to store large quantities of ethanol and may be equipped with features such as temperature and humidity control systems, fire suppression systems, and spill containment measures.
    //                             <br />
    //                             The sheds may be used to store ethanol before it is shipped to other locations or after it has been received from a production facility.                             </p>
    //                     </div>
    //                 </div>
    //             </div>




    //             <div className="relative z-10 container mx-auto px-4 py-12">
    //                 <div className="flex flex-col md:flex-row justify-evenly">
    //                     {/* Left Panel - Dark Blue Card */}
    //                     <div className="w-full md:w-1/4 bg-[#024965] text-white rounded-4xl overflow-hidden shadow-lg">
    //                         <div className="p-6 relative">
    //                             {/* Decorative curved lines in top right */}
    //                             <div className="absolute top-0 right-0">
    //                                 <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                     <path d="M120 0C120 66.2742 66.2742 120 0 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
    //                                     <path d="M120 30C120 82.4671 82.4671 120 30 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
    //                                     <path d="M120 60C120 92.7107 92.7107 120 60 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
    //                                 </svg>
    //                             </div>

    //                             <h2 className="text-2xl text-center font-bold pt-20 mb-2">
    //                                 Pre-Engineered Sheds for Secure Ethanol Storage!

    //                             </h2>

    //                             <p className="mb-8 text-center">
    //                                 Engineered for durability and safety, our PEB ethanol sheds ensure secure storage and efficient space utilization.
    //                             </p>



    //                             {/* 3D Building Model Image */}
    //                             <div className="mt-8 flex justify-center">
    //                                 <img
    //                                     src="/ethanol-3d-model.png"
    //                                     alt="3D model of building structure"
    //                                     className="w-full h-64 object-contain -mb-24 opacity-80 grayscale"
    //                                 />
    //                             </div>
    //                         </div>
    //                     </div>

    //                     {/* Right Side - Content */}
    //                     <div className="w-full md:w-2/3">
    //                         <h2 className="text-xl text-center font-bold mb-2 text-gray-900">
    //                             High-Quality PEB Ethanol Sheds
    //                         </h2>
    //                         <h2 className="text-lg text-center font-bold mb-6 text-gray-900">
    //                             Blueladder EPC Solutions
    //                         </h2>

    //                         <div className="space-y-6 text-gray-700">
    //                             <p className="leading-relaxed text-lg">
    //                                 At Blueladder EPC, we understand the importance of reliable and robust structures for storing ethanol. That’s why we offer state-of-the-art Pre-Engineered Building (PEB) ethanol sheds that are designed to meet your specific requirements. Our expertise in PEB construction, coupled with our commitment to quality, makes us the preferred choice for clients seeking efficient ethanol storage solutions.
    //                             </p>

    //                             <div className="w-full mx-auto p-6">
    //                                 <h2 className="text-xl md:text-xl font-bold mb-8 text-gray-900 pb-2">
    //                                     Key Features of Our Ethanol Sheds
    //                                 </h2>

    //                                 <ul className="space-y-4">
    //                                     <li className="flex items-center">
    //                                         <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mr-3">
    //                                             <Check size={16} className="text-white" />
    //                                         </span>
    //                                         <span className="text-lg text-gray-800">High-strength steel structure for durability</span>
    //                                     </li>

    //                                     <li className="flex items-center">
    //                                         <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mr-3">
    //                                             <Check size={16} className="text-white" />
    //                                         </span>
    //                                         <span className="text-lg text-gray-800">Weather-resistant and corrosion-proof design</span>
    //                                     </li>

    //                                     <li className="flex items-center">
    //                                         <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mr-3">
    //                                             <Check size={16} className="text-white" />
    //                                         </span>
    //                                         <span className="text-lg text-gray-800">Customizable layouts for optimal storage</span>
    //                                     </li>

    //                                     <li className="flex items-center">
    //                                         <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mr-3">
    //                                             <Check size={16} className="text-white" />
    //                                         </span>
    //                                         <span className="text-lg text-gray-800">Quick installation with minimal downtime</span>
    //                                     </li>

    //                                     <li className="flex items-center">
    //                                         <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mr-3">
    //                                             <Check size={16} className="text-white" />
    //                                         </span>
    //                                         <span className="text-lg text-gray-800">Cost-effective and low maintenance solutions</span>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>



    //             <div className="bg-sky-50 p-6 md:p-8 lg:p-10 rounded-lg  mx-auto">
    //                 <h2 className="text-[#024965] text-xl md:text-2xl font-semibold mb-6">Cost-effective and low maintenance solutions</h2>

    //                 <div className="space-y-6">
    //                     <div className="flex items-start">
    //                         <div className="text-blue-600 mr-2 mt-1">
    //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    //                                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    //                             </svg>
    //                         </div>
    //                         <p className="text-gray-800 text-sm md:text-base">
    //                             <span className="font-medium">Expertise in PEB Construction:</span> With years of experience in the PEB construction industry, we have honed our skills to deliver superior quality of sheds. Our team of experts is well-versed in designing and building structures that adhere to the highest industry standards.
    //                         </p>
    //                     </div>

    //                     <div className="flex items-start">
    //                         <div className="text-blue-600 mr-2 mt-1">
    //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    //                                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    //                             </svg>
    //                         </div>
    //                         <p className="text-gray-800 text-sm md:text-base">
    //                             <span className="font-medium">Customized Solutions:</span> We understand that every project is unique. Our PEB sheds are tailor-made to accommodate your specific needs, ensuring a perfect fit for your ethanol storage requirements.
    //                         </p>
    //                     </div>

    //                     <div className="flex items-start">
    //                         <div className="text-blue-600 mr-2 mt-1">
    //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    //                                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    //                             </svg>
    //                         </div>
    //                         <p className="text-gray-800 text-sm md:text-base">
    //                             <span className="font-medium">Durability & Strength:</span> Ethanol storage demands structures that can withstand the test of time and environmental factors. Our PEB sheds are engineered to be highly durable, offering long-lasting protection for your ethanol reserves.
    //                         </p>
    //                     </div>

    //                     <div className="flex items-start">
    //                         <div className="text-blue-600 mr-2 mt-1">
    //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    //                                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    //                             </svg>
    //                         </div>
    //                         <p className="text-gray-800 text-sm md:text-base">
    //                             <span className="font-medium">Efficiency in Construction:</span> Time is of the essence in the ethanol industry. Our PEB construction process is efficient, reducing construction time and costs, so you can start utilizing your ethanol sheds sooner.
    //                         </p>
    //                     </div>

    //                     <div className="flex items-start">
    //                         <div className="text-blue-600 mr-2 mt-1">
    //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    //                                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    //                             </svg>
    //                         </div>
    //                         <div className="text-gray-800 text-sm md:text-base">
    //                             <span className="font-medium">Cost-Effective Solutions:</span> We offer competitive pricing without compromising on quality. Our PEB sheds provide excellent value for your investment.
    //                             <span className="text-blue-600 ml-1 text-sm cursor-pointer">Read More &gt;&gt;</span>
    //                         </div>
    //                     </div>
    //                 </div>

    //             </div>
    //             <div className="p-20 text-center text-[#024965] md:text-lg">
    //                 <p>Contact us today to discuss your PEB ethanol shed project, and let us show you how Blueladder EPC can exceed your expectations. Your ethanol storage needs are in safe hands with us.</p>
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
                        backgroundImage: "url('/ethanol-hero.png')",
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
                        Ethanol Sheds
                    </h1>

                    {/* Breadcrumb navigation with hover effects */}
                    <div className="flex flex-wrap items-center justify-center text-lg space-x-2">
                        <span className="hover:underline hover:text-blue-300 transition-colors duration-300">Product & Services</span>
                        <span>/</span>
                        <span className="hover:underline hover:text-blue-300 transition-colors duration-300">Pre Engineered Steel Structures</span>
                        <span>/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl hover:text-blue-200 transition-colors duration-300">Ethanol Sheds</span>
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
                                    src="/ethanol-img1.png"
                                    alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                    className="w-full h-[460px] rounded-4xl object-contain shadow-md transition-all duration-300 hover:shadow-lg"
                                />
                            </div>

                            <p className='leading-base mt-6 transition-all duration-300 hover:text-gray-900'>
                                PEB Ethanol sheds are facilities used for the storage and handling of ethanol, which is a type of alcohol that is commonly used as a fuel additive or solvent. These sheds are typically designed to store large quantities of ethanol and may be equipped with features such as temperature and humidity control systems, fire suppression systems, and spill containment measures.
                                <br />
                                The sheds may be used to store ethanol before it is shipped to other locations or after it has been received from a production facility.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Two Column Section */}
                <div className="relative z-10 container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row justify-evenly gap-6">
                        {/* Left Panel - Dark Blue Card with hover effect */}
                        <div className="w-full md:w-1/4 bg-[#024965] text-white rounded-4xl overflow-hidden shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
                            <div className="p-6 relative h-full">
                                {/* Decorative curved lines with animation */}
                                <div className="absolute top-0 right-0 animate-spin-slow">
                                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M120 0C120 66.2742 66.2742 120 0 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                        <path d="M120 30C120 82.4671 82.4671 120 30 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                        <path d="M120 60C120 92.7107 92.7107 120 60 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                    </svg>
                                </div>

                                <h2 className="text-2xl text-center font-bold pt-20 mb-2 transform transition duration-500 hover:scale-105">
                                    Pre-Engineered Sheds for Secure Ethanol Storage!
                                </h2>

                                <p className="mb-8 text-center">
                                    Engineered for durability and safety, our PEB ethanol sheds ensure secure storage and efficient space utilization.
                                </p>

                                {/* 3D Building Model Image with hover effect */}
                                <div className="mt-8 flex justify-center transform transition duration-500 hover:scale-110">
                                    <img
                                        src="/ethanol-3d-model.png"
                                        alt="3D model of building structure"
                                        className="w-full h-64 object-contain -mb-24 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full md:w-2/3">
                            <h2 className="text-xl text-center font-bold mb-2 text-gray-900 transform transition duration-500 hover:scale-105">
                                High-Quality PEB Ethanol Sheds
                            </h2>
                            <h2 className="text-lg text-center font-bold mb-6 text-gray-900">
                                Blueladder EPC Solutions
                            </h2>

                            <div className="space-y-6 text-gray-700">
                                <p className="leading-relaxed text-lg transition-all duration-300 hover:text-gray-900">
                                    At Blueladder EPC, we understand the importance of reliable and robust structures for storing ethanol. That's why we offer state-of-the-art Pre-Engineered Building (PEB) ethanol sheds that are designed to meet your specific requirements. Our expertise in PEB construction, coupled with our commitment to quality, makes us the preferred choice for clients seeking efficient ethanol storage solutions.
                                </p>

                                <div className="w-full mx-auto p-6">
                                    <h2 className="text-xl md:text-xl font-bold mb-8 text-gray-900 pb-2 transform transition duration-500 hover:scale-105">
                                        Key Features of Our Ethanol Sheds
                                    </h2>

                                    <ul className="space-y-4">
                                        {[
                                            "High-strength steel structure for durability",
                                            "Weather-resistant and corrosion-proof design",
                                            "Customizable layouts for optimal storage",
                                            "Quick installation with minimal downtime",
                                            "Cost-effective and low maintenance solutions"
                                        ].map((feature, index) => (
                                            <li key={index} className="flex items-center group">
                                                <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mr-3 transition-all duration-300 group-hover:bg-blue-800 group-hover:scale-110">
                                                    <Check size={16} className="text-white" />
                                                </span>
                                                <span className="text-lg text-gray-800 transition-all duration-300 group-hover:text-blue-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section with animated checkmarks */}
                <div className="bg-sky-50 p-6 md:p-8 lg:p-10 rounded-lg mx-auto transform transition duration-500 hover:shadow-lg">
                    <h2 className="text-[#024965] text-xl md:text-2xl font-semibold mb-6 transform transition duration-500 hover:scale-105">
                        Cost-effective and low maintenance solutions
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Expertise in PEB Construction",
                                content: "With years of experience in the PEB construction industry, we have honed our skills to deliver superior quality of sheds. Our team of experts is well-versed in designing and building structures that adhere to the highest industry standards."
                            },
                            {
                                title: "Customized Solutions",
                                content: "We understand that every project is unique. Our PEB sheds are tailor-made to accommodate your specific needs, ensuring a perfect fit for your ethanol storage requirements."
                            },
                            {
                                title: "Durability & Strength",
                                content: "Ethanol storage demands structures that can withstand the test of time and environmental factors. Our PEB sheds are engineered to be highly durable, offering long-lasting protection for your ethanol reserves."
                            },
                            {
                                title: "Efficiency in Construction",
                                content: "Time is of the essence in the ethanol industry. Our PEB construction process is efficient, reducing construction time and costs, so you can start utilizing your ethanol sheds sooner."
                            },
                            {
                                title: "Cost-Effective Solutions",
                                content: "We offer competitive pricing without compromising on quality. Our PEB sheds provide excellent value for your investment."
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start group transform transition duration-300 hover:-translate-y-1">
                                <div className="text-blue-600 mr-2 mt-1 transform transition duration-500 group-hover:scale-125">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-800 text-sm md:text-base">
                                    <span className="font-medium group-hover:text-blue-600 transition-colors duration-300">{item.title}:</span> {item.content}
                                    {index === 4 && <span className="text-blue-600 ml-1 text-sm cursor-pointer hover:underline">Read More &gt;&gt;</span>}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section with pulse animation */}
                <div className="p-20 text-center text-[#024965] md:text-lg animate-pulse-slow">
                    <p className="transform transition duration-500 hover:scale-105">
                        Contact us today to discuss your PEB ethanol shed project, and let us show you how Blueladder EPC can exceed your expectations. Your ethanol storage needs are in safe hands with us.
                    </p>
                    <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-xl">
                        Get a Free Quote
                    </button>
                </div>
            </div>

            {/* Animation styles */}
            <style jsx>{`
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            @keyframes spinSlow {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes pulseSlow {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.9; }
            }
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
            .animate-spin-slow {
                animation: spinSlow 60s linear infinite;
            }
            .animate-pulse-slow {
                animation: pulseSlow 3s ease-in-out infinite;
            }
        `}</style>
        </>
    )
}

export default Ethanol
