import React from 'react';
import { Check } from 'lucide-react';

const ErectionServices = () => {
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
            title: "Precision Engineering",
            description: "Ensuring accurate alignment and stability.",
        },
        {
            id: 2,
            title: "Safety Compliance",
            description: "Adhering to industry standards for risk-free execution.",
        },
        {
            id: 3,
            title: "Advanced Equipment",
            description: "Using the latest tools for efficient assembly.",
        },
        {
            id: 4,
            title: "Expert Workforce",
            description: "Skilled professionals for seamless installation.",
        },
        {
            id: 5,
            title: "Timely Completion",
            description: "Delivering projects on schedule with reliability.",
        },
    ];

    // return (
    //     <>
    //         {/* Hero Section with Background Image */}
    //         <div className="relative w-full h-80 md:h-96">
    //             {/* Background image with overlay */}
    //             <div
    //                 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    //                 style={{
    //                     backgroundImage: "url('/erection-hero.png')", // Replace with your actual image path
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
    //                     Erection Services
    //                 </h1>

    //                 {/* Breadcrumb navigation */}
    //                 <div className="flex items-center text-lg">
    //                     <span className="hover:underline">Product & Services </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="hover:underline">EPC - Turnkey Solutions</span>
    //                     <span className="mx-2">/</span>
    //                     <span className="text-[#8CB5FF] font-bold text-xl">Erection Services</span>
    //                 </div>
    //             </div>
    //         </div>

    //         {/* Main Content */}
    //         <div className="min-h-screen w-full bg-gray-50 relative overflow-hidden">
    //             {/* Background Image with Opacity */}
    //             <div
    //                 className="absolute inset-0 z-0 opacity-10"
    //                 style={{
    //                     backgroundImage: "url(/bg-pattern.jpeg')",
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
    //                             src="/erection-img1.png"
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
    //                                 Expert Erection
    //                                 <br />
    //                                 Services 🏗️
    //                             </h2>

    //                             <p className="mb-8 text-center">
    //                                 Precision, safety, and efficiency in steel structure erection, scaffolding, and heavy lifting. We ensure seamless assembly for durable and reliable constructions.
    //                             </p>

    //                             <button className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-teal-900 font-medium rounded-md transition duration-300 text-center">
    //                                 Contact Us for Consultation!
    //                             </button>

    //                             {/* 3D Building Model Image */}
    //                             <div className="mt-8 flex justify-center">
    //                                 <img
    //                                     src="/3d-model.png"
    //                                     alt="3D model of building structure"
    //                                     className="w-48 h-auto object-contain -mb-7 opacity-80 grayscale"
    //                                 />
    //                             </div>
    //                         </div>
    //                     </div>

    //                     {/* Right Side - Content */}
    //                     <div className="w-full md:w-2/3">
    //                         <h2 className="text-3xl text-center font-bold mb-6 text-gray-900">Erection Services</h2>

    //                         <div className="space-y-6 text-gray-700">
    //                             <p className="leading-relaxed text-xl">
    //                                 At Blueladder Engineering Company, we specialize in providing top-quality civil erection
    //                                 services for a wide range of projects. From small residential developments to large-scale
    //                                 commercial and industrial projects, we have the expertise and resources to handle all of
    //                                 your civil erection needs. Our team of highly skilled professionals has extensive
    //                                 experience in all aspects of civil erection, including site preparation, foundation work,
    //                                 concrete construction, and steel erection. We utilize state-of-the-art equipment and
    //                                 techniques to ensure that every project is completed on time, within budget, and to the
    //                                 highest standards of quality.
    //                             </p>

    //                             <p className="leading-relaxed text-xl">
    //                                 In addition to our exceptional civil erection services, we also offer a full range of
    //                                 engineering and consulting services. Our team of professionals includes engineers,
    //                                 architects, and project managers who are dedicated to helping our clients achieve their
    //                                 goals and deliver successful projects. If you're in need of reliable and efficient civil
    //                                 erection services, look no further than XYZ Engineering Company. Contact us today to
    //                                 learn more about how we can help you with your next project.
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
    //                             Features of Our Erection Services 🚧 🏗️
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
    //                                         <span className="font-semibold text-lg text-gray-900">{feature.title}</span>
    //                                         <span className="text-gray-700 text-lg"> – {feature.description}</span>
    //                                     </div>
    //                                 </div>
    //                             ))}
    //                         </div>
    //                     </div>

    //                     {/* Right side - Building illustration */}
    //                     <div className="w-full md:w-2/5 mt-8 md:mt-0">
    //                         <img
    //                             src="/erection-img.png"
    //                             alt="Building construction with cranes illustration"
    //                             className="w-full h-auto object-contain"
    //                         />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );

return (
    <>
        {/* Hero Section with Background Image */}
        <div className="relative w-full h-80 md:h-96 overflow-hidden group">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
                style={{
                    backgroundImage: "url('/erection-hero.png')",
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark overlay with hover effect */}
                <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>

            {/* Content container */}
            <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                {/* Main heading with hover effect */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center transform transition-transform duration-300 hover:scale-105">
                    Erection Services
                </h1>

                {/* Breadcrumb navigation */}
                <div className="flex items-center text-lg">
                    <span className="hover:underline transition-all duration-200 hover:text-blue-200">Product & Services</span>
                    <span className="mx-2">/</span>
                    <span className="hover:underline transition-all duration-200 hover:text-blue-200">EPC - Turnkey Solutions</span>
                    <span className="mx-2">/</span>
                    <span className="text-[#8CB5FF] font-bold text-xl hover:text-[#a8c9ff] transition-colors duration-200">
                        Erection Services
                    </span>
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
                className="absolute inset-0 z-0 opacity-10"
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
                    <div className="bg-white rounded-4xl shadow-md p-6 md:w-1/3 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <h2 className="text-xl font-bold mb-6">EPC - Turnkey Solutions</h2>

                        <div className="space-y-6">
                            {services.map((service) => (
                                <div key={service.id} className="border-b pb-4 group">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-200">
                                            <Check className="w-4 h-4 text-blue-500 group-hover:text-blue-700 transition-colors duration-200" />
                                        </div>
                                        <span className="text-gray-700 group-hover:text-gray-900 group-hover:font-medium transition-all duration-200">
                                            {service.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Construction Image with hover zoom */}
                    <div className="md:w-2/3 overflow-hidden rounded-4xl shadow-md">
                        <img
                            src="/erection-img1.png"
                            alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                            className="w-full h-[420px] object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-evenly gap-8">
                    {/* Left Panel - Dark Blue Card with hover effect */}
                    <div className="w-full md:w-1/4 bg-[#024965] text-white rounded-4xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="p-6 relative">
                            {/* Decorative curved lines in top right */}
                            <div className="absolute top-0 right-0">
                                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M120 0C120 66.2742 66.2742 120 0 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                    <path d="M120 30C120 82.4671 82.4671 120 30 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                    <path d="M120 60C120 92.7107 92.7107 120 60 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                </svg>
                            </div>

                            <h2 className="text-2xl text-center font-bold mb-2">
                                Expert Erection
                                <br />
                                Services 🏗️
                            </h2>

                            <p className="mb-8 text-center">
                                Precision, safety, and efficiency in steel structure erection, scaffolding, and heavy lifting. We ensure seamless assembly for durable and reliable constructions.
                            </p>

                            <button className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-teal-900 font-medium rounded-md transition duration-300 text-center transform hover:scale-[1.02]">
                                Contact Us for Consultation!
                            </button>

                            {/* 3D Building Model Image */}
                            <div className="mt-8 flex justify-center">
                                <img
                                    src="/3d-model.png"
                                    alt="3D model of building structure"
                                    className="w-48 h-auto object-contain -mb-7 opacity-80 grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl text-center font-bold mb-6 text-gray-900 transform transition-transform duration-300 hover:scale-[1.01]">
                            Erection Services
                        </h2>

                        <div className="space-y-6 text-gray-700">
                            <p className="leading-relaxed text-xl p-6 bg-white rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300">
                                At Blueladder Engineering Company, we specialize in providing top-quality civil erection
                                services for a wide range of projects. From small residential developments to large-scale
                                commercial and industrial projects, we have the expertise and resources to handle all of
                                your civil erection needs. Our team of highly skilled professionals has extensive
                                experience in all aspects of civil erection, including site preparation, foundation work,
                                concrete construction, and steel erection. We utilize state-of-the-art equipment and
                                techniques to ensure that every project is completed on time, within budget, and to the
                                highest standards of quality.
                            </p>

                            <p className="leading-relaxed text-xl p-6 bg-white rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300">
                                In addition to our exceptional civil erection services, we also offer a full range of
                                engineering and consulting services. Our team of professionals includes engineers,
                                architects, and project managers who are dedicated to helping our clients achieve their
                                goals and deliver successful projects. If you're in need of reliable and efficient civil
                                erection services, look no further than XYZ Engineering Company. Contact us today to
                                learn more about how we can help you with your next project.
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
                        <h2 className="text-2xl font-bold mb-8 flex items-center transform transition-transform duration-300 hover:scale-[1.01]">
                            Features of Our Erection Services 🚧 🏗️
                        </h2>

                        <div className="space-y-5">
                            {features.map((feature) => (
                                <div key={feature.id} className="flex items-start group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                                    <div className="flex-shrink-0 mt-1 transform transition-transform duration-300 group-hover:scale-110">
                                        <div className="bg-[#345CA5] rounded-full p-1 mr-3 group-hover:bg-[#4a75c9] transition-colors duration-300">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <span className="font-semibold text-lg text-gray-900 group-hover:text-[#024965] transition-colors duration-200">
                                            {feature.title}
                                        </span>
                                        <span className="text-gray-700 text-lg group-hover:text-gray-800 transition-colors duration-200">
                                            {" "}– {feature.description}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Building illustration */}
                    <div className="w-full md:w-2/5 mt-8 md:mt-0 overflow-hidden rounded-xl shadow-md">
                        <img
                            src="/erection-img.png"
                            alt="Building construction with cranes illustration"
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
);};

export default ErectionServices;
