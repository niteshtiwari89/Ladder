import React from 'react';

const SmartAndGreen = () => {
    // return (
    //     <>
    //         {/* Hero Section with Background Image */}
    //         <div className="relative w-full h-80 md:h-96">
    //             {/* Background image with overlay */}
    //             <div
    //                 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    //                 style={{
    //                     backgroundImage: "url('/smartgreen.png')", // Replace with your actual image path
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
    //                     Eco-friendly - Engineering the future of buildings
    //                 </h1>

    //                 {/* Breadcrumb navigation */}
    //                 <div className="flex items-center text-lg">
    //                     <span className="hover:underline">Product & Services </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="text-[#8CB5FF] font-bold text-xl">Smart and green buildings</span>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
    //             <h1 className="text-4xl font-bold text-center mb-10">Smart & Green Buildings</h1>

    //             <div className="flex flex-col md:flex-row gap-8 items-center">
    //                 <div className="w-full md:w-1/2 space-y-4">
    //                     <p className="text-gray-800 text-lg leading-relaxed">
    //                         Green buildings, also known as sustainable or high-performance buildings, are designed and constructed with the goal of minimizing
    //                         their environmental impact and maximizing their efficiency. One way to achieve this is through the use of prefabricated steel buildings,
    //                         also known as Pre-Engineered Buildings (PEB).
    //                         <br />

    //                         Prefabricated steel buildings offer several benefits for green building projects. They are extremely durable, with a lifespan of up to 100
    //                         years or more. This not only reduces the need for frequent repairs or replacements but also helps to reduce the overall environmental
    //                         impact of the building.
    //                     </p>
    //                 </div>

    //                 <div className="w-full md:w-1/2">
    //                     <img
    //                         src="/greenbuilding.png"
    //                         alt="Smart green building diagram showing various eco-friendly features"
    //                         className="w-full h-auto object-contain"
    //                     />
    //                 </div>
    //             </div>

    //             <div className="w-full mt-8 space-y-4">
    //                 <p className="text-gray-800 text-lg leading-relaxed">
    //                     The client does not need to be involved in the day-to-day management of the project and can simply focus on operating and maintaining the completed facility. EPC turnkey solutions are often used in the construction of large infrastructure projects, such as power plants, oil and gas facilities, and industrial complexes. In addition to their durability, prefabricated steel buildings are also highly energy efficient. They can be designed with insulation and energy-efficient windows to minimize heat loss and reduce the need for heating and cooling. This not only saves energy, but also helps to reduce the building’s carbon footprint. Prefabricated steel buildings are also highly customizable, which allows for the incorporation of eco-friendly features such as solar panels, rainwater harvesting systems, and green roofs. These features can help to further reduce the building’s environmental impact and increase its overall sustainability.
    //                 </p>
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
                        backgroundImage: "url('/smartgreen.png')",
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
                        Eco-friendly - Engineering the future of buildings
                    </h1>

                    {/* Breadcrumb navigation with hover effects */}
                    <div className="flex items-center text-lg flex-wrap justify-center">
                        <span className="hover:underline transition-all duration-300 hover:text-blue-200">Product & Services</span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl transform hover:scale-110 transition-transform duration-300">Smart and green buildings</span>
                    </div>
                    {/* Animated scroll indicator */}
                    <div className="absolute bottom-4 animate-bounce">
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
            <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
                {/* Animated Title */}
                <h1 className="text-4xl font-bold text-center mb-10 transform hover:scale-105 transition-transform duration-300 inline-block">
                    Smart & Green Buildings
                </h1>

                {/* Flex Content Row */}
                <div className="flex flex-col md:flex-row gap-8 items-center group">
                    {/* Text Content with hover effects */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <p className="text-gray-800 text-lg leading-relaxed transition-all duration-500 hover:text-gray-900">
                            Green buildings, also known as sustainable or high-performance buildings, are designed and constructed with the goal of minimizing
                            their environmental impact and maximizing their efficiency. One way to achieve this is through the use of prefabricated steel buildings,
                            also known as Pre-Engineered Buildings (PEB).
                            <br /><br />
                            Prefabricated steel buildings offer several benefits for green building projects. They are extremely durable, with a lifespan of up to 100
                            years or more. This not only reduces the need for frequent repairs or replacements but also helps to reduce the overall environmental
                            impact of the building.
                        </p>
                    </div>

                    {/* Image with hover zoom effect */}
                    <div className="w-full md:w-1/2 overflow-hidden rounded-xl transition-all duration-500 hover:shadow-lg">
                        <img
                            src="/greenbuilding.png"
                            alt="Smart green building diagram showing various eco-friendly features"
                            className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Bottom Content with subtle hover effect */}
                <div className="w-full mt-8 space-y-4 p-6 rounded-xl transition-all duration-500 hover:bg-gray-50">
                    <p className="text-gray-800 text-lg leading-relaxed transition-all duration-500 hover:text-gray-900">
                        The client does not need to be involved in the day-to-day management of the project and can simply focus on operating and maintaining the completed facility. EPC turnkey solutions are often used in the construction of large infrastructure projects, such as power plants, oil and gas facilities, and industrial complexes. In addition to their durability, prefabricated steel buildings are also highly energy efficient. They can be designed with insulation and energy-efficient windows to minimize heat loss and reduce the need for heating and cooling. This not only saves energy, but also helps to reduce the building's carbon footprint. Prefabricated steel buildings are also highly customizable, which allows for the incorporation of eco-friendly features such as solar panels, rainwater harvesting systems, and green roofs. These features can help to further reduce the building's environmental impact and increase its overall sustainability.
                    </p>
                </div>
            </div>
        </>
    );
};

export default SmartAndGreen;
