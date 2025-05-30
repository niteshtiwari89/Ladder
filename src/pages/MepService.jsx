import { Check } from 'lucide-react';

const MepService = () => {
    const services = [
        { id: 1, name: 'Civil Foundation Work' },
        { id: 2, name: 'MEP Services' },
        { id: 3, name: 'Fire Services' }
    ];

    const domain = [
        {
            id: 1,
            title: "Mechanical",
            description: "",
            imageUrl: "/mechanical.png", // Replace with your actual image
        },
        {
            id: 2,
            title: "Electrical",
            description: "Powering Reliable & Safe Connections",
            imageUrl: "/electrical.png", // Replace with your actual image
        },
        {
            id: 3,
            title: "Plumbing",
            description: "",
            imageUrl: "/plumbing.png", // Replace with your actual image
        }
    ];



    // return (
    //     <>
    //         {/* Hero Section with Background Image */}
    //         <div className="relative w-full h-80 md:h-96">
    //             {/* Background image with overlay */}
    //             <div
    //                 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    //                 style={{
    //                     backgroundImage: "url('/mep-service-hero.png')", // Replace with your actual image path
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
    //                     MEP Services
    //                 </h1>

    //                 {/* Breadcrumb navigation */}
    //                 <div className="flex items-center text-lg">
    //                     <span className="hover:underline">Product & Services </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="hover:underline">Engineering & Technical Advisory Services </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="text-[#8CB5FF]">MEP Services</span>

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
    //                         <h2 className="text-xl font-bold mb-6">Engineering & Technical Advisory Services</h2>

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
    //                             src="/mep-service-img1.png"
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
    //                                 🔧 MEP Services

    //                             </h2>

    //                             <p className="mb-8 text-center">
    //                                 Comprehensive Mechanical, Electrical, and Plumbing (MEP) solutions for efficient and sustainable building systems. We ensure seamless integration, safety, and optimal performance for every project.                             </p>

    //                             <button className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-teal-900 font-medium rounded-md transition duration-300 text-center">
    //                                 Contact Us for Consultation!
    //                             </button>

    //                             {/* 3D Building Model Image */}
    //                             <div className="mt-8 flex justify-center">
    //                                 <img
    //                                     src="/mep-service-3d-model.png"
    //                                     alt="3D model of building structure"
    //                                     className="w-48 h-auto object-contain -mb-7 opacity-80 grayscale"
    //                                 />
    //                             </div>
    //                         </div>
    //                     </div>

    //                     {/* Right Side - Content */}
    //                     <div className="w-full md:w-2/3">
    //                         <h2 className="text-3xl text-center font-bold mb-6 text-gray-900">
    //                             MEP Services
    //                         </h2>

    //                         <div className="space-y-6 text-gray-700">
    //                             <p className="leading-relaxed text-lg">
    //                                 MEP stands for mechanical, electrical, and plumbing, and MEP services refer to the design, installation, maintenance, and repair of these systems in a building or structure. Mechanical systems include heating, ventilation, and air conditioning (HVAC), as well as refrigeration and plumbing. Electrical systems include the wiring, lighting, and distribution of electricity throughout a building. Plumbing systems include the pipes, fixtures, and appliances that are used to distribute water and remove waste. MEP services are typically provided by specialized contractors who have expertise in one or more of these areas. They may be involved in the construction of new buildings or the renovation or maintenance of existing ones. They may also be responsible for the installation and maintenance of specialized systems, such as fire sprinkler systems, data and communication systems, or renewable energy systems.
    //                             </p>

    //                             <p className="leading-relaxed text-lg">
    //                                 MEP services are important for ensuring that a building’s systems are functioning properly and safely, and are essential for the comfort and safety of the people who use the building.
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>


    //             <div className="w-full flex justify-center items-center p-6 min-h-[400px] md:min-h-[400px]">
    //                 <div className="flex flex-col md:flex-row max-w-7xl w-full gap-6 md:gap-8 items-center justify-evenly">
    //                     {/* First card - Mechanical */}
    //                     <div className="w-full md:w-1/3 h-48 md:h-56 rounded-2xl overflow-hidden relative">
    //                         <div
    //                             className="absolute inset-0 bg-cover bg-center"
    //                             style={{ backgroundImage: `url(${domain[0].imageUrl})` }}
    //                         />
    //                         <div className="absolute inset-0 bg-black opacity-40"></div>
    //                         <div className="absolute inset-0 flex items-center justify-center">
    //                             <h3 className="text-white text-2xl font-semibold">{domain[0].title}</h3>
    //                         </div>
    //                     </div>

    //                     {/* Middle card - Electrical (larger) */}
    //                     <div className="w-full md:w-1/3 h-60 md:h-64 rounded-2xl overflow-hidden relative">
    //                         <div
    //                             className="absolute inset-0 bg-cover bg-center"
    //                             style={{ backgroundImage: `url(${domain[1].imageUrl})` }}
    //                         />
    //                         <div className="absolute inset-0 bg-black opacity-40"></div>
    //                         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    //                             <h3 className="text-white text-2xl font-semibold mb-2">{domain[1].title}</h3>
    //                             <p className="text-white text-sm">{domain[1].description}</p>
    //                         </div>
    //                     </div>

    //                     {/* Third card - Plumbing */}
    //                     <div className="w-full md:w-1/3 h-48 md:h-56 rounded-2xl overflow-hidden relative">
    //                         <div
    //                             className="absolute inset-0 bg-cover bg-center"
    //                             style={{ backgroundImage: `url(${domain[2].imageUrl})` }}
    //                         />
    //                         <div className="absolute inset-0 bg-black opacity-40"></div>
    //                         <div className="absolute inset-0 flex items-center justify-center">
    //                             <h3 className="text-white text-2xl font-semibold">{domain[2].title}</h3>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>



    //     </>
    // );


    return (
        <>
            {/* Hero Section with Background Image */}
            <div className="relative w-full h-80 md:h-96 group overflow-hidden">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 group-hover:scale-105"
                    style={{
                        backgroundImage: "url('/mep-service-hero.png')",
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Dark overlay with hover effect */}
                    <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>

                {/* Content container */}
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    {/* Main heading with animation */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center transform transition-all duration-500 hover:scale-105">
                        MEP Services
                    </h1>

                    {/* Breadcrumb navigation with hover effects */}
                    <div className="flex items-center text-lg flex-wrap justify-center">
                        <span className="hover:underline transition-all duration-300 hover:text-blue-200">Product & Services</span>
                        <span className="mx-2">/</span>
                        <span className="hover:underline transition-all duration-300 hover:text-blue-200">Engineering & Technical Advisory Services</span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] transform hover:scale-110 transition-transform duration-300">MEP Services</span>
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
                {/* Background Pattern with subtle animation */}
                <div
                    className="absolute inset-0 z-0 opacity-10 transition-all duration-1000 hover:opacity-15"
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
                        {/* Services Card with hover effects */}
                        <div className="bg-white rounded-4xl shadow-md p-6 md:w-1/3 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                            <h2 className="text-xl font-bold mb-6">Engineering & Technical Advisory Services</h2>

                            <div className="space-y-6">
                                {services.map((service) => (
                                    <div key={service.id} className="border-b pb-4 hover:border-blue-300 transition-colors duration-300 group">
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                                                <Check className="w-4 h-4 text-blue-500 group-hover:scale-125 transition-transform duration-200" />
                                            </div>
                                            <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{service.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Construction Image with hover effect */}
                        <div className="md:w-2/3 group overflow-hidden rounded-4xl">
                            <img
                                src="/mep-service-img1.png"
                                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row justify-evenly gap-8">
                        {/* Left Panel - Dark Blue Card with animations */}
                        <div className="w-full md:w-1/4 bg-[#024965] text-white rounded-4xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                            <div className="p-6 relative h-full flex flex-col">
                                {/* Decorative curved lines with animation */}
                                <div className="absolute top-0 right-0 transition-transform duration-1000 hover:rotate-12">
                                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M120 0C120 66.2742 66.2742 120 0 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                        <path d="M120 30C120 82.4671 82.4671 120 30 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                        <path d="M120 60C120 92.7107 92.7107 120 60 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                    </svg>
                                </div>

                                <h2 className="text-2xl text-center font-bold mb-2 transform hover:scale-105 transition-transform duration-300 inline-block">
                                    🔧 MEP Services
                                </h2>

                                <p className="mb-8 text-center transition-all duration-500 hover:text-blue-100">
                                    Comprehensive Mechanical, Electrical, and Plumbing (MEP) solutions for efficient and sustainable building systems. We ensure seamless integration, safety, and optimal performance for every project.
                                </p>

                                <button className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-teal-900 font-medium rounded-md transition duration-300 text-center transform hover:scale-[1.02] shadow-md hover:shadow-lg mt-auto">
                                    Contact Us for Consultation!
                                </button>

                                {/* 3D Building Model Image with hover effect */}
                                <div className="mt-8 flex justify-center group">
                                    <img
                                        src="/mep-service-3d-model.png"
                                        alt="3D model of building structure"
                                        className="w-48 h-auto object-contain -mb-7 opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content with hover effects */}
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl text-center font-bold mb-6 text-gray-900 transform hover:scale-[1.01] transition-transform duration-300 inline-block">
                                MEP Services
                            </h2>

                            <div className="space-y-6 text-gray-700">
                                <p className="leading-relaxed text-lg transition-all duration-500 hover:text-gray-900 p-4 hover:bg-gray-50 rounded-lg">
                                    MEP stands for mechanical, electrical, and plumbing, and MEP services refer to the design, installation, maintenance, and repair of these systems in a building or structure. Mechanical systems include heating, ventilation, and air conditioning (HVAC), as well as refrigeration and plumbing. Electrical systems include the wiring, lighting, and distribution of electricity throughout a building. Plumbing systems include the pipes, fixtures, and appliances that are used to distribute water and remove waste.
                                </p>

                                <p className="leading-relaxed text-lg transition-all duration-500 hover:text-gray-900 p-4 hover:bg-gray-50 rounded-lg">
                                    MEP services are typically provided by specialized contractors who have expertise in one or more of these areas. They may be involved in the construction of new buildings or the renovation or maintenance of existing ones. They may also be responsible for the installation and maintenance of specialized systems, such as fire sprinkler systems, data and communication systems, or renewable energy systems.
                                </p>

                                <p className="leading-relaxed text-lg transition-all duration-500 hover:text-gray-900 p-4 hover:bg-gray-50 rounded-lg">
                                    MEP services are important for ensuring that a building's systems are functioning properly and safely, and are essential for the comfort and safety of the people who use the building.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MEP Cards Section */}
                <div className="w-full flex justify-center items-center p-6 min-h-[400px] md:min-h-[400px]">
                    <div className="flex flex-col md:flex-row max-w-7xl w-full gap-6 md:gap-8 items-center justify-evenly">
                        {/* Mechanical Card */}
                        <div className="w-full md:w-1/3 h-48 md:h-56 rounded-2xl overflow-hidden relative group transition-all duration-500 hover:scale-105">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${domain[0].imageUrl})` }}
                            />
                            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-semibold transform group-hover:scale-110 transition-transform duration-300">
                                    {domain[0].title}
                                </h3>
                            </div>
                        </div>

                        {/* Electrical Card (larger) */}
                        <div className="w-full md:w-1/3 h-60 md:h-64 rounded-2xl overflow-hidden relative group transition-all duration-500 hover:-translate-y-2">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${domain[1].imageUrl})` }}
                            />
                            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                <h3 className="text-white text-2xl font-semibold mb-2 transform group-hover:scale-110 transition-transform duration-300">
                                    {domain[1].title}
                                </h3>
                                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {domain[1].description}
                                </p>
                            </div>
                        </div>

                        {/* Plumbing Card */}
                        <div className="w-full md:w-1/3 h-48 md:h-56 rounded-2xl overflow-hidden relative group transition-all duration-500 hover:scale-105">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${domain[2].imageUrl})` }}
                            />
                            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-semibold transform group-hover:scale-110 transition-transform duration-300">
                                    {domain[2].title}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MepService;
