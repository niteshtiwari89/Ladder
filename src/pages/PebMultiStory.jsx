import React from 'react'
import { Check } from 'lucide-react'

const PebMultiStory = () => {

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
    //                     backgroundImage: "url('/peb-multistory-hero.png')", // Replace with your actual image path
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
    //                     PEB Multi Storey Building
    //                 </h1>

    //                 {/* Breadcrumb navigation */}
    //                 <div className="flex items-center text-lg">
    //                     <span className="hover:underline">Product & Services </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="hover:underline">Pre Engineered Steel Structures </span>
    //                     <span className="mx-2">/</span>
    //                     <span className="text-[#8CB5FF] font-bold text-xl"> PEB Multi Storey Building</span>
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
    //                             src="/peb-multistory-img1.png"
    //                             alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
    //                             className="w-full h-[440px] rounded-4xl object-contain"
    //                         />

    //                         <p className='leading-base mt-6'>
    //                             Pre-engineered multi-story buildings are buildings that are constructed using prefabricated components that are manufactured in a factory and assembled on site. These buildings are typically multi-storied, with two or more floors, and can be used for a variety of purposes such as offices, apartments, hotels, and more. PEB buildings can also be designed to be multi-storey, with additional floors added as needed.

    //                             These buildings are typically more cost-effective and energy-efficient than traditional buildings, as they use a standardized design and prefabricated components. One of the main advantages of pre-engineered multi-story buildings is that they can be designed and constructed quickly, as the prefabricated components are already manufactured and just need to be assembled on site.
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>



    //             <div className="container mx-auto p-4 md:p-8 bg-white">
    //                 <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
    //                     Unveiling the Advantages of PEB Multi-Storey Buildings
    //                 </h2>

    //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //                     {/* Speedy Construction */}
    //                     <div className="flex flex-col">
    //                         <h3 className="text-center text-lg md:text-xl font-semibold mb-4">
    //                             Speedy Construction
    //                         </h3>
    //                         <div className="bg-blue-50 rounded-xl p-10 flex-grow">
    //                             <p className="text-gray-700 text-sm md:text-base">
    //                                 Time is of the essence, and with our PEB technology, your multi-storey
    //                                 building can be erected in record time. The modular components are
    //                                 pre-fabricated off-site, ensuring quicker assembly and reduced on-site
    //                                 disruptions.
    //                             </p>
    //                         </div>
    //                     </div>

    //                     {/* Flexible Design */}
    //                     <div className="flex flex-col">
    //                         <h3 className="text-center text-lg md:text-xl font-semibold mb-4">
    //                             Flexible Design
    //                         </h3>
    //                         <div className="bg-blue-50 rounded-xl p-10 flex-grow">
    //                             <p className="text-gray-700 text-sm md:text-base">
    //                                 Blueladder PEB Manufacturing empowers you with endless design
    //                                 possibilities. Whether it's commercial complexes, office spaces,
    //                                 residential apartments, or mixed-use developments, our PEB multi-
    //                                 storey buildings can be customized to meet your unique requirements.
    //                             </p>
    //                         </div>
    //                     </div>

    //                     {/* Structural Integrity */}
    //                     <div className="flex flex-col">
    //                         <h3 className="text-center text-lg md:text-xl font-semibold mb-4">
    //                             Structural Integrity
    //                         </h3>
    //                         <div className="bg-blue-50 rounded-xl p-10 flex-grow">
    //                             <p className="text-gray-700 text-sm md:text-base">
    //                                 Safety is paramount, and our PEB multi-storey buildings are
    //                                 engineered to withstand the test of time. The advanced design ensures
    //                                 optimal load distribution, seismic resistance, and durability, ensuring
    //                                 your investment remains solid for years to come.
    //                             </p>
    //                         </div>
    //                     </div>

    //                     {/* Space Utilization */}
    //                     <div className="flex flex-col">
    //                         <h3 className="text-center text-lg md:text-xl font-semibold mb-4">
    //                             Space Utilization
    //                         </h3>
    //                         <div className="bg-blue-50 rounded-xl p-10 flex-grow">
    //                             <p className="text-gray-700 text-sm md:text-base">
    //                                 Maximizing available space is crucial, and our PEB multi-storey
    //                                 buildings excel in this aspect. Intelligent design and layout planning
    //                                 allow for efficient space utilization, creating functional and aesthetically
    //                                 pleasing interiors.
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 {/* Customization Options (Full Width) */}
    //                 <div className="mt-6">
    //                     <h3 className="text-center text-lg md:text-xl font-semibold mb-4">
    //                         Customization Options
    //                     </h3>
    //                     <div className="bg-blue-50 rounded-xl p-10 mx-auto max-w-3xl">
    //                         <p className="text-gray-700 text-sm md:text-base text-center">
    //                             Blueladder PEB Manufacturing believes in turning your visions into
    //                             reality. Our team works closely with you to understand your needs and
    //                             preferences, ensuring every detail of your PEB multi-storey building is
    //                             tailored to perfection.
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>





    //             <div className="relative w-full container mx-auto p-4 md:p-8 overflow-hidden font-sans">
    //                 {/* Background Images - two faded building sketches/blueprints */}
    //                 <div className="absolute inset-0 z-0">

    //                     {/* Bottom right corner background image */}
    //                     <div className="absolute right-0 bottom-0">
    //                         <img
    //                             src="/peb-multistory-bg-img2.png"
    //                             alt="Building blueprint background bottom right"
    //                             className="object-contain opacity-20"
    //                         />
    //                     </div>
    //                 </div>

    //                 {/* Main Content */}
    //                 <div className="relative z-10">
    //                     {/* Header Text */}
    //                     <div className="text-center mb-10">
    //                         <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
    //                             At Blueladder PEB Manufacturing, we take pride in being a leading provider of Pre-Engineered Building (PEB) solutions, offering top-notch design, engineering, and manufacturing services. Our expertise extends to crafting efficient and durable PEB multi-storey buildings that stand as a testament to innovation and quality.
    //                         </p>
    //                     </div>

    //                     {/* Section Title */}
    //                     <h2 className="text-xl md:text-2xl font-semibold text-left mb-8 text-gray-800">
    //                         Why Choose Blueladder PEB Manufacturing ?
    //                     </h2>

    //                     {/* Features List */}
    //                     <div className="space-y-6">
    //                         {/* Feature 1 */}
    //                         <div className="flex items-start">
    //                             <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
    //                                 <Check size={20} className="text-blue-600" />
    //                             </div>
    //                             <div>
    //                                 <h3 className="font-semibold text-gray-800">Expertise:</h3>
    //                                 <p className="text-gray-700">
    //                                     With years of industry experience, we possess a deep understanding of PEB technology and its applications, making us your reliable partner for multi-storey building solutions.
    //                                 </p>
    //                             </div>
    //                         </div>

    //                         {/* Feature 2 */}
    //                         <div className="flex items-start">
    //                             <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
    //                                 <Check size={20} className="text-blue-600" />
    //                             </div>
    //                             <div>
    //                                 <h3 className="font-semibold text-gray-800">Quality Assurance:</h3>
    //                                 <p className="text-gray-700">
    //                                     Our commitment to excellence drives us to adhere to stringent quality control measures throughout the manufacturing process, ensuring you receive a PEB multi-storey building that exceeds expectations.
    //                                 </p>
    //                             </div>
    //                         </div>

    //                         {/* Feature 3 */}
    //                         <div className="flex items-start">
    //                             <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
    //                                 <Check size={20} className="text-blue-600" />
    //                             </div>
    //                             <div>
    //                                 <h3 className="font-semibold text-gray-800">Timely Delivery:</h3>
    //                                 <p className="text-gray-700">
    //                                     We value your time and aim to deliver projects within the stipulated timeline, backed by our efficient manufacturing processes and dedicated project management.
    //                                 </p>
    //                             </div>
    //                         </div>

    //                         {/* Feature 4 */}
    //                         <div className="flex items-start">
    //                             <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
    //                                 <Check size={20} className="text-blue-600" />
    //                             </div>
    //                             <div>
    //                                 <h3 className="font-semibold text-gray-800">Client-Centric Approach:</h3>
    //                                 <p className="text-gray-700">
    //                                     Your satisfaction is at the heart of everything we do. We foster open communication and collaboration, ensuring that your input is integrated at every stage of the project.
    //                                 </p>
    //                             </div>
    //                         </div>

    //                         {/* Feature 5 */}
    //                         <div className="flex items-start">
    //                             <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
    //                                 <Check size={20} className="text-blue-600" />
    //                             </div>
    //                             <div>
    //                                 <h3 className="font-semibold text-gray-800">Industry Standards:</h3>
    //                                 <p className="text-gray-700">
    //                                     Blueladder PEB Manufacturing operates in accordance with international building codes and standards, guaranteeing that your PEB multi-storey building complies with safety and regulatory requirements.
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>

    //                     {/* Call to Action */}
    //                     <div className="text-center mt-10">
    //                         <p className="text-base md:text-lg text-[#024965] font-medium">
    //                             Contact us today to embark on a journey towards an efficient, and aesthetically appealing PEB multi-storey building solution.
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>



    //         </div>

    //     </>
    // )

    return (
    <>
        {/* Hero Section with Background Image - Added parallax effect */}
        <div className="relative w-full h-80 md:h-96 overflow-hidden">
            {/* Background image with overlay and parallax effect */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: "url('/peb-multistory-hero.png')",
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            </div>

            {/* Content container with fade-in animation */}
            <div className="relative h-full flex flex-col items-center justify-center text-white px-4 animate-fade-in">
                {/* Main heading with text shadow and slight zoom effect */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center transform transition duration-500 hover:scale-105">
                    <span className="text-shadow-lg">PEB Multi Storey Building</span>
                    
                </h1>

                {/* Breadcrumb navigation with hover effects */}
                <div className="flex flex-wrap items-center justify-center text-lg space-x-2">
                    <a href="#" className="hover:underline hover:text-blue-300 transition-colors duration-300">Product & Services</a>
                    <span>/</span>
                    <a href="#" className="hover:underline hover:text-blue-300 transition-colors duration-300">Pre Engineered Steel Structures</a>
                    <span>/</span>
                    <span className="text-[#8CB5FF] font-bold text-xl hover:text-blue-200 transition-colors duration-300">PEB Multi Storey Building</span>
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
                {/* Top Section with Card and Image - Added staggered animations */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    {/* Services Card with hover elevation */}
                    <div className="bg-white rounded-4xl shadow-md p-6 md:w-1/3 transform transition duration-500 hover:shadow-xl hover:-translate-y-1">
                        <h2 className="text-xl font-bold mb-6 text-gray-800">Pre Engineered Steel Structures</h2>

                        <div className="space-y-6">
                            {services.map((service) => (
                                <div key={service.id} className="border-b pb-4 group">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                            <span className="text-blue-600 text-sm group-hover:text-white transition-colors duration-300">✓</span>
                                        </div>
                                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{service.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Construction Image with floating animation */}
                    <div className="md:w-2/3 relative">
                        <div className="animate-float">
                            <img
                                src="/peb-multistory-img1.png"
                                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                className="w-full h-[440px] rounded-4xl object-contain shadow-lg"
                            />
                        </div>

                        <p className='leading-base mt-6 text-gray-700 transition-all duration-500 hover:text-gray-900'>
                            Pre-engineered multi-story buildings are buildings that are constructed using prefabricated components that are manufactured in a factory and assembled on site. These buildings are typically multi-storied, with two or more floors, and can be used for a variety of purposes such as offices, apartments, hotels, and more. PEB buildings can also be designed to be multi-storey, with additional floors added as needed.
                        </p>
                    </div>
                </div>
            </div>

            {/* Advantages Section with staggered animations */}
            <div className="container mx-auto p-4 md:p-8 bg-white transform transition duration-500 hover:shadow-inner">
                <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 animate-slide-up">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                        Unveiling the Advantages of PEB Multi-Storey Buildings
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Speedy Construction */}
                    <div className="flex flex-col animate-slide-up delay-100">
                        <h3 className="text-center text-lg md:text-xl font-semibold mb-4 text-gray-800">
                            <span className="inline-block transform transition duration-500 hover:scale-110">
                                ⚡ Speedy Construction
                            </span>
                        </h3>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-10 flex-grow transform transition duration-500 hover:shadow-lg">
                            <p className="text-gray-700 text-sm md:text-base">
                                Time is of the essence, and with our PEB technology, your multi-storey
                                building can be erected in record time. The modular components are
                                pre-fabricated off-site, ensuring quicker assembly and reduced on-site
                                disruptions.
                            </p>
                        </div>
                    </div>

                    {/* Flexible Design */}
                    <div className="flex flex-col animate-slide-up delay-200">
                        <h3 className="text-center text-lg md:text-xl font-semibold mb-4 text-gray-800">
                            <span className="inline-block transform transition duration-500 hover:scale-110">
                                🎨 Flexible Design
                            </span>
                        </h3>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-10 flex-grow transform transition duration-500 hover:shadow-lg">
                            <p className="text-gray-700 text-sm md:text-base">
                                Blueladder PEB Manufacturing empowers you with endless design
                                possibilities. Whether it's commercial complexes, office spaces,
                                residential apartments, or mixed-use developments, our PEB multi-
                                storey buildings can be customized to meet your unique requirements.
                            </p>
                        </div>
                    </div>

                    {/* Structural Integrity */}
                    <div className="flex flex-col animate-slide-up delay-300">
                        <h3 className="text-center text-lg md:text-xl font-semibold mb-4 text-gray-800">
                            <span className="inline-block transform transition duration-500 hover:scale-110">
                                🏗️ Structural Integrity
                            </span>
                        </h3>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-10 flex-grow transform transition duration-500 hover:shadow-lg">
                            <p className="text-gray-700 text-sm md:text-base">
                                Safety is paramount, and our PEB multi-storey buildings are
                                engineered to withstand the test of time. The advanced design ensures
                                optimal load distribution, seismic resistance, and durability, ensuring
                                your investment remains solid for years to come.
                            </p>
                        </div>
                    </div>

                    {/* Space Utilization */}
                    <div className="flex flex-col animate-slide-up delay-400">
                        <h3 className="text-center text-lg md:text-xl font-semibold mb-4 text-gray-800">
                            <span className="inline-block transform transition duration-500 hover:scale-110">
                                📐 Space Utilization
                            </span>
                        </h3>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-10 flex-grow transform transition duration-500 hover:shadow-lg">
                            <p className="text-gray-700 text-sm md:text-base">
                                Maximizing available space is crucial, and our PEB multi-storey
                                buildings excel in this aspect. Intelligent design and layout planning
                                allow for efficient space utilization, creating functional and aesthetically
                                pleasing interiors.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Customization Options (Full Width) */}
                <div className="mt-6 animate-slide-up delay-500">
                    <h3 className="text-center text-lg md:text-xl font-semibold mb-4 text-gray-800">
                        <span className="inline-block transform transition duration-500 hover:scale-110">
                            ✨ Customization Options
                        </span>
                    </h3>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-10 mx-auto max-w-3xl transform transition duration-500 hover:shadow-lg">
                        <p className="text-gray-700 text-sm md:text-base text-center">
                            Blueladder PEB Manufacturing believes in turning your visions into
                            reality. Our team works closely with you to understand your needs and
                            preferences, ensuring every detail of your PEB multi-storey building is
                            tailored to perfection.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="relative w-full container mx-auto p-4 md:p-8 overflow-hidden font-sans mt-12">
                {/* Background Images - two faded building sketches/blueprints */}
                <div className="absolute inset-0 z-0">
                    {/* Bottom right corner background image */}
                    <div className="absolute right-0 bottom-0 opacity-20 animate-pulse-slow">
                        <img
                            src="/peb-multistory-bg-img2.png"
                            alt="Building blueprint background bottom right"
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10">
                    {/* Header Text */}
                    <div className="text-center mb-10">
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto transform transition duration-500 hover:scale-[1.01]">
                            At Blueladder PEB Manufacturing, we take pride in being a leading provider of Pre-Engineered Building (PEB) solutions, offering top-notch design, engineering, and manufacturing services. Our expertise extends to crafting efficient and durable PEB multi-storey buildings that stand as a testament to innovation and quality.
                        </p>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-xl md:text-2xl font-semibold text-left mb-8 text-gray-800 animate-slide-right">
                        <span className="border-l-4 border-blue-500 pl-4">Why Choose Blueladder PEB Manufacturing?</span>
                    </h2>

                    {/* Features List with staggered animations */}
                    <div className="space-y-6">
                        {/* Feature 1 */}
                        <div className="flex items-start animate-slide-right delay-100">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 transform transition duration-500 hover:bg-blue-600 hover:scale-110">
                                <Check size={20} className="text-blue-600 transition duration-500 hover:text-white" />
                            </div>
                            <div className="transform transition duration-500 hover:translate-x-2">
                                <h3 className="font-semibold text-gray-800">Expertise:</h3>
                                <p className="text-gray-700">
                                    With years of industry experience, we possess a deep understanding of PEB technology and its applications, making us your reliable partner for multi-storey building solutions.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start animate-slide-right delay-200">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 transform transition duration-500 hover:bg-blue-600 hover:scale-110">
                                <Check size={20} className="text-blue-600 transition duration-500 hover:text-white" />
                            </div>
                            <div className="transform transition duration-500 hover:translate-x-2">
                                <h3 className="font-semibold text-gray-800">Quality Assurance:</h3>
                                <p className="text-gray-700">
                                    Our commitment to excellence drives us to adhere to stringent quality control measures throughout the manufacturing process, ensuring you receive a PEB multi-storey building that exceeds expectations.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start animate-slide-right delay-300">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 transform transition duration-500 hover:bg-blue-600 hover:scale-110">
                                <Check size={20} className="text-blue-600 transition duration-500 hover:text-white" />
                            </div>
                            <div className="transform transition duration-500 hover:translate-x-2">
                                <h3 className="font-semibold text-gray-800">Timely Delivery:</h3>
                                <p className="text-gray-700">
                                    We value your time and aim to deliver projects within the stipulated timeline, backed by our efficient manufacturing processes and dedicated project management.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-start animate-slide-right delay-400">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 transform transition duration-500 hover:bg-blue-600 hover:scale-110">
                                <Check size={20} className="text-blue-600 transition duration-500 hover:text-white" />
                            </div>
                            <div className="transform transition duration-500 hover:translate-x-2">
                                <h3 className="font-semibold text-gray-800">Client-Centric Approach:</h3>
                                <p className="text-gray-700">
                                    Your satisfaction is at the heart of everything we do. We foster open communication and collaboration, ensuring that your input is integrated at every stage of the project.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5 */}
                        <div className="flex items-start animate-slide-right delay-500">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 transform transition duration-500 hover:bg-blue-600 hover:scale-110">
                                <Check size={20} className="text-blue-600 transition duration-500 hover:text-white" />
                            </div>
                            <div className="transform transition duration-500 hover:translate-x-2">
                                <h3 className="font-semibold text-gray-800">Industry Standards:</h3>
                                <p className="text-gray-700">
                                    Blueladder PEB Manufacturing operates in accordance with international building codes and standards, guaranteeing that your PEB multi-storey building complies with safety and regulatory requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action with pulse animation */}
                    <div className="text-center mt-10 animate-pulse-slow">
                        <p className="text-base md:text-lg text-[#024965] font-medium transform transition duration-500 hover:scale-105">
                            Contact us today to embark on a journey towards an efficient, and aesthetically appealing PEB multi-storey building solution.
                        </p>
                        <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-xl">
                            Get a Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Add these styles in your global CSS or style tag */}
        <style jsx>{`
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            @keyframes slideUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes slideRight {
                from { transform: translateX(-20px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes pulseSlow {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.8; }
            }
            .animate-fade-in {
                animation: fadeIn 1s ease-out;
            }
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
            .animate-slide-up {
                animation: slideUp 0.8s ease-out forwards;
            }
            .animate-slide-right {
                animation: slideRight 0.8s ease-out forwards;
            }
            .animate-pulse-slow {
                animation: pulseSlow 4s ease-in-out infinite;
            }
            .delay-100 {
                animation-delay: 100ms;
            }
            .delay-200 {
                animation-delay: 200ms;
            }
            .delay-300 {
                animation-delay: 300ms;
            }
            .delay-400 {
                animation-delay: 400ms;
            }
            .delay-500 {
                animation-delay: 500ms;
            }
            .text-shadow-lg {
                text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
            }
        `}</style>
    </>
)
}

export default PebMultiStory
