import React from "react";

const AboutPeb = () => {
//   return (
//     <>
//       {/* Hero Section with Background Image */}

//       <div className="relative w-full h-80 md:h-96">
//         {/* Background image with overlay */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/peb-hero.png')", // Replace with your actual image path
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Dark overlay to make text more readable */}
//           <div className="absolute inset-0 bg-black opacity-60"></div>
//         </div>

//         {/* Content container */}
//         <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
//           {/* Main heading */}
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
//             Pre-Engineered Buildings – Redefining Modern Construction
//           </h1>

//           {/* Breadcrumb navigation */}
//           <div className="flex items-center text-lg">
//             <span className="hover:underline">About Us </span>
//             <span className="mx-2">/</span>
//             <span className="text-[#8CB5FF] font-bold text-xl">
//               What is Peb
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main content container */}

//       <div className="relative w-full min-h-screen">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 opacity-6 z-0"
//           style={{
//             backgroundImage: "url('/bg-pattern.jpeg')",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         <div className="w-full max-w-7xl mx-auto bg-white p-4 md:p-8">
//           <div className="text-center mb-10">
//             <h1 className="text-4xl font-bold text-gray-800 mb-8">
//               What is PEB?
//             </h1>
//           </div>

//           <div className="text-gray-600 leading-relaxed">
//             <p className="mb-4 text-lg">
//               <span className="text-blue-500 italic underline hover:underline">
//                 What is PEB? Pre-engineered Building is referred to as PEB.
//               </span>{" "}
//               Pre-engineered Buildings are steel buildings system that was
//               created and manufactured at a factory before being brought to the
//               location for assembly. Because of its affordability, toughness,
//               and adaptability, PEB structures are frequently employed for
//               institutional, commercial, and industrial reasons.
//             </p>

//             <p className="mb-4 text-lg">
//               The ability to be developed and manufactured to satisfy particular
//               demands and specifications is one of the main advantages of PEB
//               construction. This means that PEB (Pre-engineered buildings),
//               whether for a warehouse, manufacturing facility, office building,
//               or other forms of construction, can be specifically tailored to
//               meet the needs of a certain project. PEB buildings are renowned
//               for both their adaptable design and their speedy construction.
//             </p>

//             <p className="mb-4 text-lg">
//               Construction can be finished more quickly than with conventional
//               building techniques because the components are manufactured at a
//               factory and then shipped to the site.
//             </p>

//             <p className="mb-4 text-lg">
//               Due to this, PEB buildings are a desirable option for businesses
//               that must begin operations as soon as possible. Overall, PEB
//               structures are a practical, long-lasting, and flexible alternative
//               for a variety of building tasks.
//             </p>
//           </div>
//         </div>

//         <div className="w-full bg-gray-50 min-h-screen p-4 md:p-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="pr-0 md:pr-4">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-6">
//                   Concept for Pre Engineered
//                   <br />
//                   Buildings (PEB)
//                 </h1>

//                 <ul className="list-disc text-lg pl-6 space-y-6 text-gray-600">
//                   <li>
//                     <span>
//                       PEB (Pre-engineered Building) are a concept for buildings
//                       that have superior conventional fabrication, high
//                       structural strength, and economical design. It lowers the
//                       strain on the foundation, which also lowers the price of
//                       civil construction.
//                     </span>
//                   </li>

//                   <li>
//                     <span>
//                       PEB buildings that are made to order according to the
//                       client's requirements and tapering parts. Effectively
//                       designed pre-engineered buildings (PEBs) can be up to 30%
//                       lighter than conventional steel constructions.
//                     </span>
//                   </li>

//                   <li>
//                     <span>
//                       Blueladder EPC has all the newest & modern technological
//                       equipment. International structural standards form the
//                       basis of the complete design of Columns, Rafters, and
//                       other Accessories, which also has highly technical welding
//                       and high-quality manufacturing.
//                     </span>
//                   </li>

//                   <li>
//                     <span className="text-gray-600 hover:text-blue-500">
//                       These PEB components
//                     </span>{" "}
//                     are essentially created at our factory site, using high
//                     tensile steel after gathering all relevant data about the
//                     shed or building or structure and the clients requirements.
//                   </li>
//                 </ul>
//               </div>

//               <div className="flex items-center justify-center mt-6 md:mt-0">
//                 <div className="w-full max-w-lg">
//                   <img
//                     src="/peb-concept.png"
//                     alt="PEB building diagram"
//                     className="w-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto p-4 md:p-8 relative">
//   {/* Background watermark */}
//   <div className="absolute inset-0 opacity-5 pointer-events-none z-0 overflow-hidden">
//     <img
//       src="/bg-pattern.jpeg"
//       alt=""
//       className="w-full h-full object-cover"
//     />
//   </div>

//   <div className="relative z-10">
//     {/* Heading */}
//     <div className="text-center mb-12">
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">
//         Why Choose Pre Engineered Buildings ?
//       </h1>
//       <h2 className="text-2xl font-semibold text-gray-800">
//         Advantages of PEB Construction
//       </h2>
//     </div>

//     {/* Top section: images + partial text */}
//     <div className="block lg:flex justify-center gap-8 items-center">
//       {/* Left: Image collage */}
//       <div className="space-y-4 h-[400px] lg:w-1/3">
//         <div className="flex  h-1/2 grid-cols-2 gap-4">
//           {/* <div> */}
//             <img
//               src="/peb-left-img.jpg"
//               alt="PEB building front"
//               className="w-full h-full object-cover rounded-sm"
//             />
//           {/* </div> */}
//           <div className="flex h-full flex-col gap-4">
//             <img
//               src="/peb-right-img1.jpg"
//               alt="PEB red panel"
//               className="w-80 h-1/2 object-cover rounded-sm"
//             />
//             <img
//               src="/peb-right-img2.png"
//               alt="PEB structure interior"
//               className="w-full h-1/2 object-cover rounded-sm"
//             />
//           </div>
//         </div>
//         {/* Large bottom image */}
//         <img
//           src="/peb-bottom-img.png"
//           alt="PEB steel frame"
//           className="w-full h-1/2 rounded-sm"
//         />
//       </div>

//       {/* Right: Partial text content */}
//       <div className="space-y-6 lg:w-2/3 pt-10">
//         <p className="text-2xl text-gray-800">
//           Pre-engineered Buildings (PEBs) are a common option for construction projects for a variety of factors.
//         </p>
//         <ul className="list-disc pl-5 space-y-4 text-base text-gray-800">
//           <li className="text-2xl">
//             Cost-effectiveness: Compared to conventional building techniques, PEB construction is typically more affordable. This is due to the fact that the components are manufactured in a factory, allowing for more productive production and lower labor costs.
//           </li>
//           <li className="text-2xl">
//             Durability: PEB structures are renowned for their longevity and durability. They are built to withstand harsh weather conditions and other difficulties using steel of the highest quality.
//           </li>
//           <li className="text-2xl">
//             Versatility: PEB structures can be altered to accommodate a project's unique requirements. This means that they can be applied to a variety of settings, such as warehouses, factories, offices, and more.
//           </li>
//         </ul>
//       </div>
//     </div>

//     {/* Bottom points across full width */}
//     <div className="mt-10 md:mt-14">
//       <ul className="list-disc pl-5 space-y-4 text-base text-gray-800">
//         <li className="text-2xl">
//           Faster construction: PEB construction can be finished more rapidly than with conventional building techniques since the components are manufactured in a factory and then shipped to the site for assembly. This is especially advantageous for businesses that need to launch as soon as feasible.
//         </li>
//         <li className="text-2xl">
//           Sustainable: PEB structures are a type of sustainable building. When a PEB building reaches the end of its useful life, it can be disassembled, recycled, or used again. Steel is a recyclable resource.
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>


//         {/* <div className="max-w-4xl mx-auto p-6 bg-white">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
//                         <div className="col-span-1">
//                             <img
//                                 src="/api/placeholder/400/320"
//                                 alt="Steel building exterior"
//                                 className="w-full h-auto object-cover"
//                             />
//                         </div>
//                         <div className="col-span-1">
//                             <img
//                                 src="/api/placeholder/400/320"
//                                 alt="Steel building with red trim"
//                                 className="w-full h-auto object-cover"
//                             />
//                         </div>
//                         <div className="col-span-1">
//                             <img
//                                 src="/api/placeholder/400/320"
//                                 alt="Blue roof beams structure"
//                                 className="w-full h-auto object-cover"
//                             />
//                         </div>
//                     </div>

//                     <div className="mb-6">
//                         <img
//                             src="/api/placeholder/400/320"
//                             alt="Steel frame construction site"
//                             className="w-full h-auto object-cover"
//                         />
//                     </div>

//                     <div className="text-gray-700 text-lg md:text-base leading-relaxed">
//                         <p className="mb-4 text-lg">
//                             Pre-engineered Buildings (PEBs) are a common option for construction projects for a
//                             variety of factors.
//                         </p>

//                         <ul className="space-y-4 mb-6">
//                             <li className="flex items-start">
//                                 <span className="mr-2 text-lg">•</span>
//                                 <div>
//                                     <span className="font-medium text-lg">Cost-effectiveness:</span> Compared to conventional building techniques, PEB construction
//                                     is typically more affordable. This is due to the fact that the components are
//                                     manufactured in a factory, allowing for more productive production and lower labor
//                                     costs.
//                                 </div>
//                             </li>

//                             <li className="flex items-start">
//                                 <span className="mr-2 text-lg">•</span>
//                                 <div>
//                                     <span className="font-medium text-lg">Durability:</span> PEB structures are renowned for their longevity and durability. They are
//                                     built to withstand harsh weather conditions and other difficulties using steel of the
//                                     highest quality.
//                                 </div>
//                             </li>

//                             <li className="flex items-start">
//                                 <span className="mr-2 text-lg">•</span>
//                                 <div>
//                                     <span className="font-medium text-lg">Versatility:</span> PEB structures can be altered to accommodate a project's unique
//                                     requirements. This means that they can be applied to a variety of settings, such as
//                                     warehouses, factories, offices, and more.
//                                 </div>
//                             </li>
//                         </ul>

//                         <ul className="space-y-4">
//                             <li className="flex items-start">
//                                 <span className="mr-2 text-lg">•</span>
//                                 <div>
//                                     <span className="font-medium text-lg">Faster construction:</span> PEB construction can be finished more rapidly than with conventional building techniques since the components are
//                                     manufactured in a factory and then shipped to the site for assembly. This is especially advantageous for businesses that need to launch as
//                                     soon as feasible.
//                                 </div>
//                             </li>

//                             <li className="flex items-start">
//                                 <span className="mr-2 text-lg">•</span>
//                                 <div>
//                                     <span className="font-medium text-lg">Sustainable:</span> PEB structures are a type of sustainable building. When a PEB building reaches the end of its useful life, it can be
//                                     disassembled, recycled, or used again. Steel is a recyclable resource.
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                 </div> */}
//       </div>

//       <h1 className="text-2xl md:text-3xl font-bold text-center mt-10 mb-10 text-black">
//         Innovation in Construction: Advancing Building Techniques with PEB
//       </h1>
//       <div className="relative w-full max-w-7xl mx-auto px-6 py-10 text-gray-700">
//         {/* Background Image with Overlay */}
//         <div
//           className="absolute inset-0 z-0 opacity-10"
//           style={{
//             backgroundImage: "url(/pre-engg-bg.png)",
//             backgroundSize: "contain",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             opacity: 0.08,
//             transform: "scaleX(-1)",
//           }}
//         />

//         {/* Content */}
//         <div className="relative z-10 ">
//           <ul className="space-y-6">
//             <li className="flex items-start">
//               <span className="text-lg mr-2 mt-0.5">•</span>
//               <div>
//                 Energy Efficiency: Sustainability is being taken into account
//                 heavily when planning construction projects. In this regard, PEB
//                 constructions shine because they make it simple to incorporate
//                 energy-saving measures like insulation, natural lighting, and
//                 ventilation systems. These improvements lower energy use, which
//                 lowers operating expenses and lowers the carbon footprint.
//               </div>
//             </li>

//             <li className="flex items-start">
//               <span className="text-lg mr-2 mt-0.5">•</span>
//               <div>
//                 Expandability and Portability: PEB structures have the benefit
//                 of being expandable in the future. As your business expands, PEB
//                 systems may be readily updated and expanded, whether you need to
//                 add new sections or increase the floor area. Additionally,
//                 because these buildings are modular in design, they can be
//                 disassembled and relocated as needed, making them a desirable
//                 alternative for companies that may need to relocate their
//                 offices in the future.
//               </div>
//             </li>

//             <li className="flex items-start">
//               <span className="text-lg mr-2 mt-0.5">•</span>
//               <div>
//                 Design Flexibility: Contrary to popular belief, PEB structures
//                 are not constrained to simple box-like geometries. These
//                 structures provide an astonishing degree of design versatility,
//                 accommodating many architectural styles and practical needs.
//                 Large clear spans, multi-story structures, or custom
//                 configurations can all be simply added to PEB systems to suit
//                 your unique design requirements.
//               </div>
//             </li>

//             <li className="flex items-start">
//               <span className="text-lg mr-2 mt-0.5">•</span>
//               <div>
//                 Safety and Structural Integrity: These factors are prioritized
//                 while designing PEB structures in order to endure harsh
//                 environmental conditions. These buildings are built to endure
//                 seismic pressures, strong winds, and large snow loads, giving
//                 residents peace of mind and protecting priceless possessions.
//                 High-strength steel, which is what is used in PEBs, guarantees a
//                 sturdy framework that will stand the test of time.
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );

return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 hover:scale-105"
          style={{
            backgroundImage: "url('/peb-hero.png')",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay to make text more readable */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Content container */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          {/* Main heading with fade-in animation */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fadeIn">
            Pre-Engineered Buildings – Redefining Modern Construction
          </h1>

          {/* Breadcrumb navigation */}
          <div className="flex items-center text-lg space-x-2">
            <span className="hover:underline transition-colors duration-300 hover:text-blue-300">About Us</span>
            <span>/</span>
            <span className="text-[#8CB5FF] font-bold text-xl transform hover:scale-105 transition-transform">
              What is Peb
            </span>
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative w-full min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-6 z-0"
          style={{
            backgroundImage: "url('/bg-pattern.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="w-full max-w-7xl mx-auto bg-white p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-500">
          <div className="text-center mb-10 transform hover:-translate-y-1 transition-transform duration-300">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
              What is PEB?
            </h1>
          </div>

          <div className="text-gray-600 leading-relaxed space-y-6">
            <p className="text-lg transform hover:scale-[1.01] transition-transform duration-300">
              <span className="text-blue-500 italic underline hover:underline hover:text-blue-700 transition-colors">
                What is PEB? Pre-engineered Building is referred to as PEB.
              </span>{" "}
              Pre-engineered Buildings are steel buildings system that was
              created and manufactured at a factory before being brought to the
              location for assembly. Because of its affordability, toughness,
              and adaptability, PEB structures are frequently employed for
              institutional, commercial, and industrial reasons.
            </p>

            <p className="text-lg transform hover:scale-[1.01] transition-transform duration-300">
              The ability to be developed and manufactured to satisfy particular
              demands and specifications is one of the main advantages of PEB
              construction. This means that PEB (Pre-engineered buildings),
              whether for a warehouse, manufacturing facility, office building,
              or other forms of construction, can be specifically tailored to
              meet the needs of a certain project. PEB buildings are renowned
              for both their adaptable design and their speedy construction.
            </p>

            <p className="text-lg transform hover:scale-[1.01] transition-transform duration-300">
              Construction can be finished more quickly than with conventional
              building techniques because the components are manufactured at a
              factory and then shipped to the site.
            </p>

            <p className="text-lg transform hover:scale-[1.01] transition-transform duration-300">
              Due to this, PEB buildings are a desirable option for businesses
              that must begin operations as soon as possible. Overall, PEB
              structures are a practical, long-lasting, and flexible alternative
              for a variety of building tasks.
            </p>
          </div>
        </div>

        <div className="w-full bg-gray-50 min-h-screen p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pr-0 md:pr-4 transform hover:-translate-y-1 transition-transform duration-300">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                  Concept for Pre Engineered
                  <br />
                  Buildings (PEB)
                </h1>

                <ul className="list-disc text-lg pl-6 space-y-6 text-gray-600">
                  <li className="transform hover:scale-[1.01] transition-transform duration-300">
                    <span>
                      PEB (Pre-engineered Building) are a concept for buildings
                      that have superior conventional fabrication, high
                      structural strength, and economical design. It lowers the
                      strain on the foundation, which also lowers the price of
                      civil construction.
                    </span>
                  </li>

                  <li className="transform hover:scale-[1.01] transition-transform duration-300">
                    <span>
                      PEB buildings that are made to order according to the
                      client's requirements and tapering parts. Effectively
                      designed pre-engineered buildings (PEBs) can be up to 30%
                      lighter than conventional steel constructions.
                    </span>
                  </li>

                  <li className="transform hover:scale-[1.01] transition-transform duration-300">
                    <span>
                      Blueladder EPC has all the newest & modern technological
                      equipment. International structural standards form the
                      basis of the complete design of Columns, Rafters, and
                      other Accessories, which also has highly technical welding
                      and high-quality manufacturing.
                    </span>
                  </li>

                  <li className="transform hover:scale-[1.01] transition-transform duration-300">
                    <span className="text-gray-600 hover:text-blue-500 transition-colors">
                      These PEB components
                    </span>{" "}
                    are essentially created at our factory site, using high
                    tensile steel after gathering all relevant data about the
                    shed or building or structure and the clients requirements.
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center mt-6 md:mt-0">
                <div className="w-full max-w-lg overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500">
                  <img
                    src="/peb-concept.png"
                    alt="PEB building diagram"
                    className="w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-4 md:p-8 relative">
          {/* Background watermark */}
          <div className="absolute inset-0 opacity-5 pointer-events-none z-0 overflow-hidden">
            <img
              src="/bg-pattern.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10">
            {/* Heading */}
            <div className="text-center mb-12 transform hover:-translate-y-1 transition-transform duration-300">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose Pre Engineered Buildings ?
              </h1>
              <h2 className="text-2xl font-semibold text-gray-800">
                Advantages of PEB Construction
              </h2>
            </div>

            {/* Top section: images + partial text */}
            <div className="block lg:flex justify-center gap-8 items-center">
              {/* Left: Image collage */}
              <div className="space-y-4 h-[400px] lg:w-1/3">
                <div className="flex h-1/2 grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src="/peb-left-img.jpg"
                      alt="PEB building front"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="flex h-full flex-col gap-4">
                    <div className="overflow-hidden rounded-sm">
                      <img
                        src="/peb-right-img1.jpg"
                        alt="PEB red panel"
                        className="w-80 h-1/2 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden rounded-sm">
                      <img
                        src="/peb-right-img2.png"
                        alt="PEB structure interior"
                        className="w-full h-1/2 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                {/* Large bottom image */}
                <div className="overflow-hidden rounded-sm">
                  <img
                    src="/peb-bottom-img.png"
                    alt="PEB steel frame"
                    className="w-full h-1/2 transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Right: Partial text content */}
              <div className="space-y-6 lg:w-2/3 pt-10">
                <p className="text-2xl text-gray-800 transform hover:scale-[1.01] transition-transform duration-300">
                  Pre-engineered Buildings (PEBs) are a common option for construction projects for a variety of factors.
                </p>
                <ul className="list-disc pl-5 space-y-4 text-base text-gray-800">
                  <li className="text-2xl transform hover:scale-[1.01] transition-transform duration-300">
                    Cost-effectiveness: Compared to conventional building techniques, PEB construction is typically more affordable. This is due to the fact that the components are manufactured in a factory, allowing for more productive production and lower labor costs.
                  </li>
                  <li className="text-2xl transform hover:scale-[1.01] transition-transform duration-300">
                    Durability: PEB structures are renowned for their longevity and durability. They are built to withstand harsh weather conditions and other difficulties using steel of the highest quality.
                  </li>
                  <li className="text-2xl transform hover:scale-[1.01] transition-transform duration-300">
                    Versatility: PEB structures can be altered to accommodate a project's unique requirements. This means that they can be applied to a variety of settings, such as warehouses, factories, offices, and more.
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom points across full width */}
            <div className="mt-10 md:mt-14">
              <ul className="list-disc pl-5 space-y-4 text-base text-gray-800">
                <li className="text-2xl transform hover:scale-[1.01] transition-transform duration-300">
                  Faster construction: PEB construction can be finished more rapidly than with conventional building techniques since the components are manufactured in a factory and then shipped to the site for assembly. This is especially advantageous for businesses that need to launch as soon as feasible.
                </li>
                <li className="text-2xl transform hover:scale-[1.01] transition-transform duration-300">
                  Sustainable: PEB structures are a type of sustainable building. When a PEB building reaches the end of its useful life, it can be disassembled, recycled, or used again. Steel is a recyclable resource.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center mt-10 mb-10 text-black transform hover:scale-105 transition-transform duration-500">
          Innovation in Construction: Advancing Building Techniques with PEB
        </h1>
        <div className="relative w-full max-w-7xl mx-auto px-6 py-10 text-gray-700 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: "url(/pre-engg-bg.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.08,
              transform: "scaleX(-1)",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <ul className="space-y-6">
              <li className="flex items-start transform hover:scale-[1.01] transition-transform duration-300">
                <span className="text-lg mr-2 mt-0.5">•</span>
                <div>
                  Energy Efficiency: Sustainability is being taken into account
                  heavily when planning construction projects. In this regard, PEB
                  constructions shine because they make it simple to incorporate
                  energy-saving measures like insulation, natural lighting, and
                  ventilation systems. These improvements lower energy use, which
                  lowers operating expenses and lowers the carbon footprint.
                </div>
              </li>

              <li className="flex items-start transform hover:scale-[1.01] transition-transform duration-300">
                <span className="text-lg mr-2 mt-0.5">•</span>
                <div>
                  Expandability and Portability: PEB structures have the benefit
                  of being expandable in the future. As your business expands, PEB
                  systems may be readily updated and expanded, whether you need to
                  add new sections or increase the floor area. Additionally,
                  because these buildings are modular in design, they can be
                  disassembled and relocated as needed, making them a desirable
                  alternative for companies that may need to relocate their
                  offices in the future.
                </div>
              </li>

              <li className="flex items-start transform hover:scale-[1.01] transition-transform duration-300">
                <span className="text-lg mr-2 mt-0.5">•</span>
                <div>
                  Design Flexibility: Contrary to popular belief, PEB structures
                  are not constrained to simple box-like geometries. These
                  structures provide an astonishing degree of design versatility,
                  accommodating many architectural styles and practical needs.
                  Large clear spans, multi-story structures, or custom
                  configurations can all be simply added to PEB systems to suit
                  your unique design requirements.
                </div>
              </li>

              <li className="flex items-start transform hover:scale-[1.01] transition-transform duration-300">
                <span className="text-lg mr-2 mt-0.5">•</span>
                <div>
                  Safety and Structural Integrity: These factors are prioritized
                  while designing PEB structures in order to endure harsh
                  environmental conditions. These buildings are built to endure
                  seismic pressures, strong winds, and large snow loads, giving
                  residents peace of mind and protecting priceless possessions.
                  High-strength steel, which is what is used in PEBs, guarantees a
                  sturdy framework that will stand the test of time.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add these styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default AboutPeb;
