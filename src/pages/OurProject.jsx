import React from 'react'

const OurProject = () => {


    const projects = [
        {
            id: 1,
            title: 'Metro Rails Stations',
            image: '/metro.png',
            description: 'We provide our Pre Engineered Building services to organizations dealing with metro construction. We have successfully delivered numerous metro station projects.'
        },
        {
            id: 2,
            title: 'Logistics Park',
            image: '/logistic.png',
            description: 'Logistics parks have made significant contributions not only to the freight industry, but also to urban development and social benefits.'
        },
        {
            id: 3,
            title: 'Industrial Shed',
            image: '/industry.png',
            description: 'Pre Fabricated Industrial Sheds are the most promising option for Industrial Buildings due to its dynamic use cases & numerous advantages. We deliver Pre Fab industrial sheds not only as a service but as a solution.'
        },
        {
            id: 4,
            title: 'Warehouse',
            image: '/warehouse.png',
            description: 'Warehouse construction require an intelligent work process. We understand that it is important to to utilise space efficiently and there should not be any compromise in technical detailing while warehouse construction.'
        },
        {
            id: 5,
            title: 'Dal & Rice Mill',
            image: '/dal-mill.png',
            description: 'Mill Owners often don\'t have time to engage in construction nor the risk appetite to bare delays and errors. We at Blue Ladder Solutions are committed to delivering Dal Mill & Rice Mill projects with proper timeline & customer satisfaction.'
        },
        {
            id: 6,
            title: 'Logistics Park',
            image: '/park.png',
            description: 'Logistics parks have made significant contributions not only to the freight industry, but also to urban development and social benefits.'
        }
    ];

return (
  <>
    {/* Hero Section with Enhanced Effects */}
    <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: "url('/our-project-hero.png')",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 opacity-90 transition-opacity duration-500 hover:opacity-80"></div>
      </div>

      {/* Content container with animation */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 animate-fadeIn">
        {/* Main heading with text shadow and hover effect */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center tracking-tight leading-tight drop-shadow-lg transform transition-all duration-500 hover:scale-105">
          Strong. Reliable. <span className="text-[#8CB5FF]">Engineered</span> for Excellence.
        </h1>

        {/* Breadcrumb navigation with interactive arrows */}
        <div className="flex items-center text-lg space-x-2 mt-6">
          <a 
            href="/" 
            className="hover:text-[#8CB5FF] transition-colors duration-300 flex items-center group"
          >
            <span>About Us</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <span className="text-gray-300">/</span>
          <span className="text-[#8CB5FF] font-bold text-xl hover:text-white transition-colors duration-300">
            Why Us ?
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

    {/* Featured Project Section with Hover Zoom */}
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="relative overflow-hidden rounded-xl shadow-2xl group">
        {/* Main image with parallax hover effect */}
        <img
          src="/ourproject.png"
          alt="Modern architectural building"
          className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Overlay with project info that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div className="text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            <h2 className="text-3xl font-bold mb-2">Signature Project</h2>
            <p className="text-lg mb-4">Innovative design meets structural excellence</p>
          </div>
        </div>
      </div>
    </div>

    {/* Projects Grid with Enhanced Card Effects */}
    <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          <span className="relative z-10">Our Portfolio</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-[#8CB5FF]/30 -z-1 transform translate-y-1"></span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our diverse range of successfully completed projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl"
          >
            {/* Image with grayscale hover effect */}
            <div className="relative overflow-hidden h-64">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
              />
              
              {/* Category badge */}
              <div className="absolute top-4 right-4 bg-[#8CB5FF] text-white px-3 py-1 rounded-full text-sm font-medium transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {project.category}
              </div>
            </div>

            {/* Content that slides up on hover */}
            <div className="p-6 bg-white transform transition-all duration-500 group-hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#8CB5FF] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              {/* Hidden details that appear on hover */}
              {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="w-full mt-4 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-[#8CB5FF] hover:text-white transition-colors duration-300 flex items-center justify-center">
                  View Details
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
)
}

export default OurProject
