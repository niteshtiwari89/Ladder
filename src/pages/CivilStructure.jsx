import React from 'react';
import { Check } from 'lucide-react';

const CivilStructure = () => {
    const services = [
        { id: 1, name: 'Erection Services' },
        { id: 2, name: 'MEP Designing' },
        { id: 3, name: 'PEB designing' },
        { id: 4, name: 'Civil Structure Design' },
        { id: 5, name: 'PEB Design Vetting' },
    ];

    const features = [
        {
            id: 1,
            title: "Robust Structural Planning ",
            description: "Ensuring durability and stability.",
        },
        {
            id: 2,
            title: "Code & Compliance Review",
            description: "Designed to withstand environmental forces.",

        },
        {
            id: 3,
            title: "Material Optimization",
            description: "Efficient use of resources for cost-effectiveness..",
        },
        {
            id: 4,
            title: "Compliance with Standards",
            description: "Meeting all safety and regulatory codes.",
        },
        {
            id: 5,
            title: "Innovative & Sustainable Designs",
            description: "Eco-friendly and future-ready solutions.",
        },
    ];

return (
    <>
        {/* Hero Section with Background Image */}
        <div className="relative w-full h-80 md:h-96 overflow-hidden">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 hover:scale-105"
                style={{
                    backgroundImage: "url('/civil-hero.png')",
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark overlay to make text more readable */}
                <div className="absolute inset-0 bg-black opacity-60 hover:opacity-50 transition-opacity duration-300"></div>
            </div>

            {/* Content container */}
            <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                {/* Main heading with fade-in animation */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in-up">
                    Civil Structure Design
                </h1>

                {/* Breadcrumb navigation */}
                <div className="flex items-center text-lg space-x-2">
                    <span className="hover:underline hover:text-blue-200 transition-colors duration-200">Product & Services</span>
                    <span>/</span>
                    <span className="hover:underline hover:text-blue-200 transition-colors duration-200">EPC - Turnkey Solutions</span>
                    <span>/</span>
                    <span className="text-[#8CB5FF] font-bold text-xl hover:scale-105 transition-transform duration-200">Civil Structure Design</span>
                </div>
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
            {/* Background Image with Opacity */}
            <div
                className="absolute inset-0 z-0 opacity-10 hover:opacity-15 transition-opacity duration-500"
                style={{
                    backgroundImage: "url('/bg-pattern.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>

            <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
                {/* Top Section with Card and Image */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    {/* Services Card with hover effect */}
                    <div className="bg-white rounded-4xl shadow-md p-6 md:w-1/3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <h2 className="text-xl font-bold mb-6">EPC - Turnkey Solutions</h2>

                        <div className="space-y-6">
                            {services.map((service) => (
                                <div key={service.id} className="border-b pb-4 hover:border-blue-300 transition-colors duration-200">
                                    <div className="flex items-center group">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-200">
                                            <Check className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                                        </div>
                                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200">{service.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Construction Image with hover zoom */}
                    <div className="md:w-2/3 overflow-hidden rounded-4xl shadow-md">
                        <img
                            src="/civil-img1.png"
                            alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                            className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-evenly gap-8">
                    {/* Left Panel - Dark Blue Card with hover effect */}
                    <div className="w-full md:w-1/4 bg-[#024965] text-white rounded-4xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="p-6 relative">
                            {/* Decorative curved lines in top right with animation */}
                            <div className="absolute top-0 right-0 animate-pulse-slow">
                                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M120 0C120 66.2742 66.2742 120 0 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                    <path d="M120 30C120 82.4671 82.4671 120 30 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                    <path d="M120 60C120 92.7107 92.7107 120 60 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                </svg>
                            </div>

                            <h2 className="text-2xl text-center font-bold mb-2 hover:text-yellow-300 transition-colors duration-200">
                                Civil Structure
                                <br />
                                Design 🏗️
                            </h2>

                            <p className="mb-8 text-center hover:text-blue-100 transition-colors duration-200">
                                Providing innovative and durable structural designs for residential, commercial, and industrial projects. We ensure safety, efficiency, and compliance with engineering standards.
                            </p>

                            <button className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-400 hover:scale-105 text-teal-900 font-medium rounded-md transition-all duration-300 text-center shadow-md hover:shadow-lg">
                                Contact Us for Consultation!
                            </button>

                            {/* 3D Building Model Image with hover effect */}
                            <div className="mt-8 flex justify-center hover:animate-bounce-slow">
                                <img
                                    src="/civil-3d-model.png"
                                    alt="3D model of building structure"
                                    className="w-48 h-auto object-contain -mb-7 opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content with fade-in effect */}
                    <div className="w-full md:w-2/3 animate-fade-in">
                        <h2 className="text-3xl text-center font-bold mb-6 text-gray-900 hover:text-blue-700 transition-colors duration-200">Civil Structure Design</h2>

                        <div className="space-y-6 text-gray-700">
                            <p className="leading-relaxed text-lg hover:text-gray-800 transition-colors duration-200">
                                Welcome to our engineering company's website! We specialize in civil structure design, utilizing the latest technologies and methodologies to provide our clients with the most efficient and cost-effective solutions for their projects. Our team of experienced engineers has a wealth of knowledge in the field of civil structure design, and we have worked on a wide range of projects including bridges, buildings, and other infrastructure projects. We are dedicated to delivering high-quality designs that meet all applicable codes and standards, and we take pride in our attention to detail and commitment to safety. We understand that every project is unique, and we work closely with our clients to understand their specific needs and goals.
                            </p>

                            <p className="leading-relaxed text-lg hover:text-gray-800 transition-colors duration-200">
                                Whether you are in need of a new bridge for your community or a building for your business, we have the expertise to deliver a solution that meets your needs. In addition to traditional civil structure design services, we also offer a variety of other engineering services such as construction management. Project management, and consulting. Our team is equipped to handle every aspect of your project, from initial planning and design to construction and beyond. Thank you for considering us for your civil structure design needs. We look forward to working with you and delivering the best possible solution for your project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full bg-white py-12 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left side - Features list */}
                    <div className="w-full md:w-3/5 pr-0 md:pr-8">
                        <h2 className="text-2xl font-bold mb-8 flex items-center hover:text-blue-600 transition-colors duration-200">
                            Features of Our PEB Design Vetting 🚧 🏗️
                        </h2>

                        <div className="space-y-5">
                            {features.map((feature) => (
                                <div key={feature.id} className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="bg-[#345CA5] rounded-full p-1 mr-3 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-200">
                                            <Check className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-300" />
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <span className="font-semibold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-200">{feature.title}</span>
                                        <span className="text-gray-700 text-lg group-hover:text-gray-800 transition-colors duration-200"> – {feature.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Building illustration with hover effect */}
                    <div className="w-full md:w-2/5 mt-8 md:mt-0 overflow-hidden rounded-4xl">
                        <img
                            src="/civil-img2.png"
                            alt="Building construction with cranes illustration"
                            className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Add these animation keyframes to your global CSS */}
        <style jsx global>{`
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .animate-fade-in-up {
                animation: fadeInUp 0.8s ease-out forwards;
            }
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            .animate-fade-in {
                animation: fadeIn 1s ease-out forwards;
            }
            @keyframes bounceSlow {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-10px);
                }
            }
            .animate-bounce-slow {
                animation: bounceSlow 3s infinite;
            }
            @keyframes pulseSlow {
                0%, 100% {
                    opacity: 0.7;
                }
                50% {
                    opacity: 0.3;
                }
            }
            .animate-pulse-slow {
                animation: pulseSlow 4s infinite;
            }
        `}</style>
    </>
);

    // return (
    
    //     <>
    //         {/* Hero Section with Background Image */}
    //         <div className="relative w-full h-80 md:h-96">
    //             {/* Background image with overlay */}
    //             <div
    //                 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    //                 style={{
    //                     backgroundImage: "url('/civil-hero.png')", // Replace with your actual image path
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
    //                     Civil Structure Design
    //                 </h1>

    //                 {/* Breadcrumb navigation */}
    //                 <div className="flex items-center text-lg">
    //                     <span className="hover:underline">Product & Services </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="hover:underline">EPC - Turnkey Solutions</span>
    //                     <span className="mx-2">/</span>
    //                     <span className="text-[#8CB5FF] font-bold text-xl">Civil Structure Design</span>
    //                 </div>
    //             </div>
    //         </div>

    //         {/* Main Content */}
    //         <div className="min-h-screen w-full bg-gray-50 relative overflow-hidden">
    //             {/* Background Image with Opacity */}
    //             <div
    //                 className="absolute inset-0 z-0 opacity-10"
    //                 style={{
    //                     backgroundImage: "url('/bg-pattern.jpeg')",
    //                     backgroundSize: 'cover',
    //                     backgroundPosition: 'center',
    //                     backgroundRepeat: 'no-repeat',
    //                 }}
    //             ></div>

    //             <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
    //                 {/* Top Section with Card and Image */}
    //                 <div className="flex flex-col md:flex-row gap-6 mb-8">
    //                     {/* Services Card */}
    //                     <div className="bg-white rounded-4xl shadow-md p-6 md:w-1/3">
    //                         <h2 className="text-xl font-bold mb-6">EPC - Turnkey Solutions</h2>

    //                         <div className="space-y-6">
    //                             {services.map((service) => (
    //                                 <div key={service.id} className="border-b pb-4">
    //                                     <div className="flex items-center">
    //                                         <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
    //                                             <Check className="w-4 h-4 text-blue-500" />
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
    //                             src="/civil-img1.png"
    //                             alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
    //                             className="w-full h-[420px] rounded-4xl shadow-md object-cover"
    //                         />
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

    //                             <h2 className="text-2xl text-center font-bold mb-2">
    //                                 Civil Structure
    //                                 <br />
    //                                 Design 🏗️
    //                             </h2>

    //                             <p className="mb-8 text-center">
    //                             Providing innovative and durable structural designs for residential, commercial, and industrial projects. We ensure safety, efficiency, and compliance with engineering standards.
    //                             </p>

    //                             <button className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-teal-900 font-medium rounded-md transition duration-300 text-center">
    //                                 Contact Us for Consultation!
    //                             </button>

    //                             {/* 3D Building Model Image */}
    //                             <div className="mt-8 flex justify-center">
    //                                 <img
    //                                     src="/civil-3d-model.png"
    //                                     alt="3D model of building structure"
    //                                     className="w-48 h-auto object-contain -mb-7 opacity-80 grayscale"
    //                                 />
    //                             </div>
    //                         </div>
    //                     </div>

    //                     {/* Right Side - Content */}
    //                     <div className="w-full md:w-2/3">
    //                         <h2 className="text-3xl text-center font-bold mb-6 text-gray-900">Civil Structure Design</h2>

    //                         <div className="space-y-6 text-gray-700">
    //                             <p className="leading-relaxed text-lg">
    //                                 Welcome to our engineering company’s website! We specialize in civil structure design, utilizing the latest technologies and methodologies to provide our clients with the most efficient and cost-effective solutions for their projects. Our team of experienced engineers has a wealth of knowledge in the field of civil structure design, and we have worked on a wide range of projects including bridges, buildings, and other infrastructure projects. We are dedicated to delivering high-quality designs that meet all applicable codes and standards, and we take pride in our attention to detail and commitment to safety. We understand that every project is unique, and we work closely with our clients to understand their specific needs and goals.

    //                             </p>

    //                             <p className="leading-relaxed text-lg">


    //                                 Whether you are in need of a new bridge for your community or a building for your business, we have the expertise to deliver a solution that meets your needs. In addition to traditional civil structure design services, we also offer a variety of other engineering services such as construction management. Project management, and consulting. Our team is equipped to handle every aspect of your project, from initial planning and design to construction and beyond. Thank you for considering us for your civil structure design needs. We look forward to working with you and delivering the best possible solution for your project.
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="w-full bg-white py-12 px-4 md:px-8">
    //             <div className="container mx-auto">
    //                 <div className="flex flex-col md:flex-row items-center justify-between">
    //                     {/* Left side - Features list */}
    //                     <div className="w-full md:w-3/5 pr-0 md:pr-8">
    //                         <h2 className="text-2xl font-bold mb-8 flex items-center">
    //                             Features of Our PEB Design Vetting 🚧 🏗️
    //                         </h2>

    //                         <div className="space-y-5">
    //                             {features.map((feature) => (
    //                                 <div key={feature.id} className="flex items-start">
    //                                     <div className="flex-shrink-0 mt-1">
    //                                         <div className="bg-[#345CA5] rounded-full p-1 mr-3">
    //                                             <Check className="w-4 h-4 text-white" />
    //                                         </div>
    //                                     </div>
    //                                     <div className="ml-3">
    //                                         <span className="font-semibold text-gray-900 text-lg">{feature.title}</span>
    //                                         <span className="text-gray-700 text-lg"> – {feature.description}</span>
    //                                     </div>
    //                                 </div>
    //                             ))}
    //                         </div>
    //                     </div>

    //                     {/* Right side - Building illustration */}
    //                     <div className="w-full md:w-2/5 mt-8 md:mt-0">
    //                         <img
    //                             src="/civil-img2.png"
    //                             alt="Building construction with cranes illustration"
    //                             className="w-full h-96 object-cover rounded-4xl"
    //                         />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );
};

export default CivilStructure;
