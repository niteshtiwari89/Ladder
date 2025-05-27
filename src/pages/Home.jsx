import React, { useState, useEffect, useRef } from "react";
import { Paperclip } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const rotateY = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const CarouselSlide = ({ slide, isActive }) => (
  <motion.div
    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
      isActive ? "opacity-100" : "opacity-0"
    }`}
    initial={{ opacity: 0 }}
    animate={{ opacity: isActive ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
    <img
      src={slide.image}
      alt={slide.alt}
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-greu-50 bg-opacity-90 flex items-center">
      <motion.div 
        className="container mx-auto px-4 md:px-16 text-white"
        initial={{ y: 50, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
          {slide.title}
        </h2>
      </motion.div>
    </div>
  </motion.div>
);

const DotButton = ({ active, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`h-3 w-3 rounded-full transition-all ${
      active ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
    }`}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  />
);

const ArrowButton = ({ direction, onClick }) => (
  <motion.button
    className={`absolute top-1/2 ${direction === 'left' ? 'left-4' : 'right-4'} -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none hidden md:block`}
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === 'left' ? "M15.75 19.5L8.25 12l7.5-7.5" : "M8.25 4.5l7.5 7.5-7.5 7.5"}
      />
    </svg>
  </motion.button>
);

const ContactButton = () => (
  <motion.div 
    className="fixed right-0 top-1/2 -translate-y-1/2 z-100"
    initial={{ x: 100 }}
    animate={{ x: 0 }}
    transition={{ delay: 1, type: "spring" }}
  >
    <motion.button 
      className="bg-white text-blue-900 font-bold py-4 px-4 rounded-l-lg shadow-lg transform rotate-90 origin-right translate-x-8 hover:bg-blue-100 transition-colors"
      whileHover={{ 
        backgroundColor: "#93c5fd",
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      CONTACT US
    </motion.button>
  </motion.div>
);

const StatCard = ({ value, label }) => (
  <motion.div 
    className="p-8 border-b border-r border-gray-200"
    variants={fadeInUp}
    whileHover={{ 
      backgroundColor: "#f8fafc",
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
  >
    <h3 className="text-4xl font-bold text-[#345CA5]">
      {value}<span className="text-[#345CA5]">+</span>
    </h3>
    <p className="text-gray-500 mt-2">{label}</p>
  </motion.div>
);

const ServiceCard = ({ service }) => (
  <motion.div 
    className="rounded-lg overflow-hidden shadow-md"
    variants={fadeIn}
    whileHover={{ 
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }}
  >
    <motion.div 
      className="w-full h-60 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    </motion.div>
    <div className="p-4 flex items-center">
      <div className="text-[#345CA5] mr-2">{service.icon}</div>
      <p className="text-gray-800">{service.title}</p>
    </div>
  </motion.div>
);

const TestimonialCard = ({ testimonial, active }) => (
  <motion.div
    className="testimonial-card bg-white rounded-lg shadow-lg p-6 mb-8"
    initial="hidden"
    animate={active ? "visible" : "hidden"}
    variants={scaleUp}
    whileHover={{ scale: 1.02 }}
  >
    <div className="testimonial-content flex flex-col md:flex-row items-center md:items-start gap-6">
      <motion.div 
        className="avatar-wrapper w-24 h-24 flex-shrink-0"
        whileHover={{ rotate: 5 }}
      >
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="client-avatar w-full h-full rounded-full object-cover"
        />
      </motion.div>
      <div className="testimonial-text flex-1">
        <h3 className="client-name text-xl font-medium text-gray-800 mb-2">
          {testimonial.name}
        </h3>
        <p className="client-feedback text-gray-700 mb-4">
          {testimonial.text}
        </p>
        <p className="feedback-date text-sm text-gray-500">
          {testimonial.date}
        </p>
      </div>
    </div>
  </motion.div>
);


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/carousel-img1.jpeg",
      title: "Our Vision shows what we are striving for.",
      alt: "Modern city buildings with blue sky",
    },
    {
      id: 2,
      image: "/carousel-img2.png",
      title: "Innovation drives our future growth.",
      alt: "Corporate office interior",
    },
    {
      id: 3,
      image: "/carousel-img3.png",
      title: "Building sustainable solutions together.",
      alt: "Green building with solar panels",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const services = [
    {
      image: "/home-service-img1.png",
      title: "Pre Engineered Steel Structures",
      icon: <Paperclip size={24} />,
    },
    {
      image: "/home-service-img2.png",
      title: "Smart and Green Buildings",
      icon: <Paperclip size={24} />,
    },
    {
      image: "/home-service-img3.png",
      title: "Engineering & Technical Advisory Services",
      icon: <Paperclip size={24} />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    {
      name: "Flipkart",
      logo: "/flipkart.png",
      color: "text-blue-500",
    },
    {
      name: "Delhivery",
      logo: "/delhivery.png",
      color: "text-red-500",
    },
    {
      name: "Amazon",
      logo: "/amazon.png",
      color: "text-orange-500",
    },
    {
      name: "Nykaa",
      logo: "/nykaa.png",
      color: "text-pink-500",
    },
    {
      name: "Flipkart",
      logo: "/flipkart.png",
      color: "text-blue-500",
    },
    {
      name: "Delhivery",
      logo: "/delhivery.png",
      color: "text-red-500",
    },
    {
      name: "Amazon",
      logo: "/amazon.png",
      color: "text-orange-500",
    },
    {
      name: "Nykaa",
      logo: "/nykaa.png",
      color: "text-pink-500",
    },
  ];

  const getVisibleCount = () => {
    // In a real implementation, this could use window width
    // Here we'll return all items for simplicity in the demo
    return clients.length;
  };

  // Automatic carousel functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === clients.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [clients.length]);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const timerRef = useRef(null);

  const feedbackItems = [
    {
      id: 1,
      name: "Kasturi Rathod",
      text: "Excellent website! Easy to navigate, professional design, and detailed information about pre-engineered building solutions. Great user experience!",
      date: "May 6, 2020",
      image: "/api/placeholder/100/100",
    },
    {
      id: 2,
      name: "John Smith",
      text: "Their team was incredibly responsive and the quality of work exceeded our expectations. Highly recommend for any construction project.",
      date: "June 15, 2020",
      image: "/api/placeholder/100/100",
    },
    {
      id: 3,
      name: "Priya Sharma",
      text: "Working with this company was a breeze. They understood our requirements perfectly and delivered on time and within budget.",
      date: "July 22, 2020",
      image: "/api/placeholder/100/100",
    },
    {
      id: 4,
      name: "David Wilson",
      text: "The attention to detail was outstanding. From planning to execution, everything was handled professionally.",
      date: "August 10, 2020",
      image: "/api/placeholder/100/100",
    },
    {
      id: 5,
      name: "Anita Desai",
      text: "We've received numerous compliments on our new building. The design is modern and functional, exactly what we needed.",
      date: "September 5, 2020",
      image: "/api/placeholder/100/100",
    },
    {
      id: 6,
      name: "Robert Chen",
      text: "Five stars for customer service alone. The team was always available to answer questions and address concerns promptly.",
      date: "October 18, 2020",
      image: "/api/placeholder/100/100",
    },
  ];

  // Start autorotation on component mount
  useEffect(() => {
    beginAutoRotation();

    // Clean up timer on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const beginAutoRotation = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Set new timer that advances slide every 2 seconds
    timerRef.current = setInterval(() => {
      setActiveSlideIndex((prevIndex) =>
        prevIndex === feedbackItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
  };

  const stopAutoRotation = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const goToNextSlide = () => {
    stopAutoRotation();
    setActiveSlideIndex((prevIndex) =>
      prevIndex === feedbackItems.length - 1 ? 0 : prevIndex + 1
    );
    beginAutoRotation();
  };

  const goToPrevSlide = () => {
    stopAutoRotation();
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? feedbackItems.length - 1 : prevIndex - 1
    );
    beginAutoRotation();
  };

  const jumpToSlide = (index) => {
    stopAutoRotation();
    setActiveSlideIndex(index);
    beginAutoRotation();
  };

//   return (
//     <>
//       {/* Carousel */}

//       <div className="relative w-full h-screen overflow-hidden">
//         {/* Carousel slides */}
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={slide.image}
//               alt={slide.alt}
//               className="object-cover w-full h-full"
//             />
//             <div className="absolute inset-0 bg-greu-50 bg-opacity-90 flex items-center">
//               <div className="container mx-auto px-4 md:px-16 text-white">
//                 <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
//                   {slide.title}
//                 </h2>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Navigation dots */}
//         <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`h-3 w-3 rounded-full transition-all ${
//                 index === currentSlide
//                   ? "bg-white scale-125"
//                   : "bg-white/50 hover:bg-white/80"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Navigation arrows */}
//         <button
//           className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none hidden md:block"
//           onClick={prevSlide}
//           aria-label="Previous slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 19.5L8.25 12l7.5-7.5"
//             />
//           </svg>
//         </button>

//         <button
//           className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none hidden md:block"
//           onClick={nextSlide}
//           aria-label="Next slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 4.5l7.5 7.5-7.5 7.5"
//             />
//           </svg>
//         </button>

//         {/* Fixed contact button */}
//         <div className="fixed right-0 top-1/2 -translate-y-1/2 z-100">
//           <button className="bg-white text-blue-900 font-bold py-4 px-4 rounded-l-lg shadow-lg transform rotate-90 origin-right translate-x-8 hover:bg-blue-100 transition-colors">
//             CONTACT US
//           </button>
//         </div>
//       </div>

//       {/* Main content */}

//       <div className="min-h-screen w-full bg-gray-50 relative">
//         {/* Background image for the entire page */}
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-6  z-0"
//           style={{
//             backgroundImage: "url('/bg-pattern.jpeg')",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//           }}
//           aria-hidden="true"
//         />

//         <div className="container mx-auto px-4 md:px-8 py-8 relative z-10">
//           {/* Header Section */}
//           <header className="mb-8">
//             <h1 className="text-xl text-center md:text-2xl font-bold mb-6">
//               Pre-Engineered Building Solutions and Manufacturers
//             </h1>

//             <div className="flex flex-col md:flex-col gap-8 items-start">
//               <div className="p-4 md:w-full ">
//                 <p className="text-lg leading-relaxed font-[Inter] text-center text-gray-700 mb-6">
//                   Blueladder EPC Solutions Private Limited is the Engineered
//                   Building supplier and Manufacturers was established in the
//                   year 2015, as a Pre-Engineered Manufacturer in Nagpur. We
//                   cater to the Pre Engineered Building sector in Nagpur, Pune,
//                   Mumbai, Ahmedabad, Hyderabad, Bangalore, Satara and
//                   Maharashtra and Central India.
//                 </p>
//               </div>
//               <div className="flex w-full items-center mb-4">
//                 <p className="text-lg md:w-5/8 font-[Inter] leading-relaxed text-gray-700 mb-6">
//                   The Blueladder's headquarter is situated in Nagpur, with its
//                   regional operational offices. We are proud to have completed
//                   PEB successful PEB projects for various clients across India.
//                   We are known to have one of the best qualified team of
//                   professionals and specialists. Besides Pre Engineered Steel
//                   Buildings, Blueladder provides excellent Engineering,
//                   Procurement & Construction turnkey solutions, and technical
//                   and advisory services.
//                 </p>
//               <div className="md:w-3/8 flex justify-center">
//                 <img src="/logo.png" alt="Logo" />
//               </div>
//               </div>

//             </div>
//           </header>

//           {/* Main Section */}
//           <section className="mb-12">
//             <h2 className="text-xl text-center md:text-2xl font-bold text-gray-800 mb-4">
//               Leading Pre-Designed Structure PEB Construction Company
//             </h2>

//             <p className="text-lg leading-relaxed font-[Inter] text-center mb-6">
//               We are one of the leading and dedicated manufacturers of
//               Pre-Engineered buildings and all kinds of Roofing Products and
//               accessories. The Pre-engineered buildings constructed by us are
//               best suited for industrial structures like warehouses, factory
//               buildings, sheds, commercial buildings, airport terminal
//               buildings, aircraft hangars, metro stations, poultry farms,
//               multi-story buildings, parking sheds and a wide range of other
//               building solutions.
//             </p>
//           </section>

//           {/* Philosophy Section */}

//           <div className="container mx-auto h-full relative z-10 flex items-center">
//             <div className="w-full justify-evenly flex flex-col md:flex-row items-center">
//               {/* Left side - Philosophy title */}
//               <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
//                 <h2 className="text-3xl md:text-4xl font-[Inter] text-center ">
//                   Our <br /> PHILOSOPHY
//                 </h2>
//               </div>

//               {/* Right side - Vision, Mission, Values */}
//               <div className="md:w-2/3 relative">
//                 <div className="flex flex-col gap-5 max-w-md">
//                   {/* Vision */}
//                   <div className="bg-[#DDCCA6] px-4 py-3 rounded text-white">
//                     <p>Our Vision shows what we are striving for.</p>
//                   </div>

//                   {/* Mission */}
//                   <div className="bg-[#6A9AB0] px-4 py-3 rounded text-white">
//                     <p>Our Mission highlights how we want to achieve it.</p>
//                   </div>

//                   {/* Core Values */}
//                   <div className="bg-[#3A6D8C] px-4 py-3 rounded text-white">
//                     <p>Our core values demonstrate how we will achieve them.</p>
//                   </div>
//                 </div>

//                 {/* Person walking */}
//                 <div className="absolute right-0 bottom-0 transform translate-y-12 md:translate-y-0">
//                   <img
//                     src="/person.png"
//                     alt="Person walking"
//                     className="h-54"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Values Cards */}
//           <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Vision Card */}
//             <div className="bg-white rounded-lg shadow-md py-10 text-center">
//               <div className="bg-blue-600 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4">
//                 <img src="/vision.png" alt="" />
//               </div>

//               <h3 className="text-lg font-bold text-gray-800 mb-3">Vision</h3>

//               <p className="text-lg text-gray-600 mb-4">
//                 We at BlueLadder EPC Solutions <br />
//                 started the company with a vision <br />
//                 to provide fast, easy and unique <br />
//                 pre-engineered structures of steel.
//               </p>

//               <a
//                 href="#"
//                 className="text-blue-600 text-xs font-semibold hover:underline"
//               >
//                 READ MORE →
//               </a>
//             </div>

//             {/* Mission Card */}
//             <div className="bg-white rounded-lg shadow-md py-10 text-center">
//               <div className="bg-blue-600 rounded-full h-24 w-24  flex items-center justify-center mx-auto mb-4">
//                 <img src="/mission.png" alt="" />
//               </div>

//               <h3 className="text-lg font-bold text-gray-800 mb-3">Mission</h3>

//               <p className="text-lg text-gray-600 mb-4">
//                 We envisage becoming central <br />
//                 India’s leading modern PEB <br />
//                 company by replacing <br />
//                 conventional structures.
//               </p>

//               <a
//                 href="#"
//                 className="text-blue-600 text-xs font-semibold hover:underline"
//               >
//                 READ MORE →
//               </a>
//             </div>

//             {/* Core Value Card */}
//             <div className="bg-white rounded-lg shadow-md py-10 text-center">
//               <div className="bg-blue-600 rounded-full h-24 w-24  flex items-center justify-center mx-auto mb-4">
//                 <img src="/core.png" alt="" />
//               </div>

//               <h3 className="text-lg font-bold text-gray-800 mb-3">
//                 Core Value
//               </h3>

//               <p className="text-lg text-gray-600 mb-4">
//                 We at Blueladder EPC Solutions <br />
//                 offer innovative & creative building <br />
//                 designs to provide best, easy and <br />
//                 value pre-engineered structures of steel.
//               </p>

//               <a
//                 href="#"
//                 className="text-blue-600 text-xs font-semibold hover:underline"
//               >
//                 READ MORE →
//               </a>
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* VideoShowcaseSection  */}

//       <div className="bg-gray-100 py-12 px-4">
//         <div className="container mx-auto max-w-5xl">
//           {/* Header */}
//           <h2 className="text-2xl md:text-3xl font-medium text-[#345CA5] text-center mb-6">
//             Pre Engineered Building (PEB)Manufacturing and Assembling
//           </h2>

//           {/* Subheading/Description */}
//           <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto text-lg">
//             View this video to learn about Blue Ladder EPC Solutions Pvt Ltd's
//             working style with Pre Engineered Buildings across India with the
//             highest manufacturing standards. Some glimpses of our works have
//             been exhibited and showcased.
//           </p>

//           {/* Video Card */}
//           <div className="bg-white rounded-3xl shadow-lg p-8 mb-10 flex flex-col md:flex-row">
//             {/* Left content */}
//             <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
//               <div className="flex items-center mb-4">
//                 <img src="/logo.png" alt="Blue Ladder Logo" className="h-12" />
//               </div>

//               <p className="text-blue-800 font-medium text-lg mb-6">
//                 Click here to view our state of <br />
//                 the art PEB manufacturing <br />
//                 facility
//               </p>

//               <p className="text-gray-500 text-lg mb-4">
//                 contact@blueladderspc.com
//               </p>

//               <p className="text-gray-500 text-lg">Blue Ladder EPC Solutions</p>
//             </div>

//             {/* Right content (Video thumbnail) */}
//             <div className="md:w-1/2 relative">
//               <div className="rounded-xl overflow-hidden bg-gray-200 h-64 relative">
//                 <img
//                   src="/api/placeholder/600/400"
//                   alt="PEB Structure"
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Play button overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="bg-white bg-opacity-70 rounded-full p-4 shadow-md">
//                     <div className="w-10 h-10 flex items-center justify-center">
//                       <svg
//                         viewBox="0 0 24 24"
//                         className="w-6 h-6 text-blue-600 fill-current"
//                       >
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer text */}
//           <p className="text-gray-700 text-center text-lg max-w-4xl mx-auto">
//             BlueLadder EPC is a global enterprise that specializes in providing
//             solutions for Pre-engineered Buildings and Steel Structures.
//           </p>
//         </div>
//       </div>

//       {/* Benifits */}

//       <div className="bg-gradient-to-b from-white to-gray-100 py-8 sm:py-12 px-4">
//         <h2 className="text-[#345CA5] text-xl sm:text-2xl md:text-3xl font-medium text-center mb-8 sm:mb-16">
//           Benefits of Pre Engineered Steel Structures:
//         </h2>

//         {/* Desktop Layout (Circle with positioned cards) - Hidden on small screens */}
//         <div className="relative max-w-4xl mx-auto h-[500px] hidden md:block">
//           {/* Circle Background */}
//           {/* <div className="absolute w-[70%] h-[70%] border-4 border-gray-300 rounded-full opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}

//           {/* Top Left Card */}
//           <div className="absolute top-20 left-30 transform -translate-x-1/2 -translate-y-1/2 left w-[220px] bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
//             <p className="text-sm lg:text-base leading-relaxed">
//               Pre-engineered building structures have lightweight construction
//               and speedy installation.
//             </p>
//           </div>

//           {/* Top Right Card */}
//           <div className="absolute top-20 right-20 transform -translate-x-1/2 -translate-y-1/2 left w-[220px] bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
//             <p className="text-sm lg:text-base leading-relaxed">
//               The building's insulated walls and facets enhance weatherproofing
//               and energy efficiency.
//             </p>
//           </div>

//           {/* Middle Card */}
//           <div className="absolute bottom-20 -right-40 transform -translate-x-1/2 -translate-y-1/2 left w-[220px] bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
//             <p className="text-sm lg:text-base leading-relaxed">
//               PEB structures require low maintenance due to high-quality
//               materials and precise manufacturing.
//             </p>
//           </div>

//           {/* Middle Card */}
//           <div className="absolute bottom-20 left-90 transform -translate-x-1/2 -translate-y-1/2 w-[220px] bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
//             <p className="text-sm lg:text-base leading-relaxed">
//               PEB structures require low maintenance due to high-quality
//               materials and precise manufacturing.
//             </p>
//           </div>
//         </div>

//         {/* Mobile and Tablet Layout (Stacked cards) - Shown only on small and medium screens */}
//         <div className="md:hidden space-y-4 max-w-md mx-auto">
//           {/* Card 1 */}
//           <div className="bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
//             <p className="text-sm sm:text-base leading-relaxed">
//               Pre-engineered building structures have lightweight construction
//               and speedy installation.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
//             <p className="text-sm sm:text-base leading-relaxed">
//               The building's insulated walls and facets enhance weatherproofing
//               and energy efficiency.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
//             <p className="text-sm sm:text-base leading-relaxed">
//               PEB structures require low maintenance due to high-quality
//               materials and precise manufacturing.
//             </p>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
//             <p className="text-sm sm:text-base leading-relaxed">
//               Pre-engineered steel buildings offer cost-effectiveness through
//               reduced construction time and labor costs.
//             </p>
//           </div>

//           {/* Card 5 */}
//           <div className="bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
//             <p className="text-sm sm:text-base leading-relaxed">
//               Pre-engineered buildings have a variety of finishing options that
//               add aesthetic appeal.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* WhyChooseUsSection */}

//       <div className="container mx-auto px-4 py-12 max-w-7xl">
//         <h2 className="text-center text-3xl md:text-4xl font-medium text-[#345CA5] mb-6">
//           Why Choose us
//         </h2>

//         <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
//           Our team excels in delivering cutting-edge solutions for
//           Pre-Engineered Building systems. With a state-of-the-art manufacturing
//           facility, we provide high-quality PEB structures and comprehensive
//           turnkey engineering services.
//         </p>

//         <div className="flex flex-col md:flex-row">
//           {/* Left side - Stats */}
//           <div className="md:w-1/2">
//             <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-r md:border-r-0 border-gray-200">
//               {/* Stat 1 */}
//               <div className="p-8 border-b border-r border-gray-200">
//                 <h3 className="text-4xl font-bold text-[#345CA5]">
//                   700<span className="text-[#345CA5]">+</span>
//                 </h3>
//                 <p className="text-gray-500 mt-2">Total Projects</p>
//               </div>

//               {/* Stat 2 */}
//               <div className="p-8 border-b border-gray-200">
//                 <h3 className="text-4xl font-bold text-[#345CA5]">
//                   300<span className="text-[#345CA5]">+</span>
//                 </h3>
//                 <p className="text-gray-500 mt-2">Professional Team Member</p>
//               </div>

//               {/* Stat 3 */}
//               <div className="p-8 border-b md:border-b-0 border-r border-gray-200">
//                 <h3 className="text-4xl font-bold text-[#345CA5]">
//                   1300000<span className="text-[#345CA5]">sq ft</span>
//                 </h3>
//                 <p className="text-gray-500 mt-2">Quantum Delivered</p>
//               </div>

//               {/* Stat 4 */}
//               <div className="p-8 border-b md:border-b-0 border-gray-200">
//                 <h3 className="text-4xl font-bold text-[#345CA5]">
//                   9<span className="text-[#345CA5]">+</span>
//                 </h3>
//                 <p className="text-gray-500 mt-2">Regional Office</p>
//               </div>
//             </div>

//             <div className="mt-8 px-4">
//               <p className="text-gray-600 mb-6">
//                 We Work Together With Our Clients To Design And Construct Homes
//                 And Surroundings That Match Their Values And Way Of Life.
//               </p>

//               <button
//                 className="bg-[#345CA5] text-white font-bold uppercase tracking-wider py-5 px-14 text-sm relative"
//                 style={{
//                   clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)",
//                   borderRadius: "10px 10px 40px 10px",
//                 }}
//               >
//                 EXPLORE MORE
//               </button>
//             </div>
//           </div>

//           {/* Right side - Images */}
//           <div className="md:w-1/2 mt-8 md:mt-0 flex gap-2 h-full">
//             {/* Left full-height image */}
//             <div className="w-1/2 h-auto">
//               <img
//                 src="/whychoose-left.jpg"
//                 alt="Modern building exterior"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Right side with two half-height images */}
//             <div className="w-1/2 flex flex-col gap-2">
//               <div className="h-1/4">
//                 <img
//                   src="whychoose-right1.png"
//                   alt="Glass building architecture"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="h-full">
//                 <img
//                   src="whychoose-right2.jpg"
//                   alt="City skyscrapers"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Services */}

//       <div className="max-w-6xl mx-auto p-4 bg-white">
//         <h1 className="text-3xl font-medium text-[#345CA5] mb-8">
//           Our Products & Services
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="rounded-lg overflow-hidden shadow-md">
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-4 flex items-center">
//                 <div className="text-[#345CA5] mr-2">{service.icon}</div>
//                 <p className="text-gray-800">{service.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Our client */}

//       <div className="max-w-6xl mx-auto p-4 bg-white">
//         <h1 className="text-3xl font-medium text-[#345CA5] text-center mb-12">
//           Who we've Worked With
//         </h1>

//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${
//                 currentIndex * (100 / getVisibleCount())
//               }%)`,
//             }}
//           >
//             {clients.map((client, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-full md:w-1/4 px-4 flex justify-center"
//               >
//                 <div className="w-64 h-32 flex items-center justify-center">
//                   <img
//                     src={client.logo}
//                     alt={`${client.name} logo`}
//                     className="max-w-full max-h-full object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Our channel partner */}

//       <div className="container mx-auto px-4 py-12">
//         <h2 className="text-3xl md:text-4xl text-center font-medium text-[#345CA5] mb-10">
//           Our Channel Partners
//         </h2>

//         <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-16 lg:gap-24">
//           {/* Tata Steel Logo */}
//           <div className="w-48 md:w-40 lg:w-48">
//             <img
//               src="/tata.png"
//               alt="Tata Steel Logo"
//               className="w-full h-auto"
//             />
//           </div>

//           {/* JSW Steel Logo */}
//           <div className="w-48 md:w-40 lg:w-48">
//             <img
//               src="/jsw.png"
//               alt="JSW Steel Logo"
//               className="w-full h-auto"
//             />
//           </div>

//           {/* Tata BlueScope Steel Logo */}
//           <div className="w-48 md:w-40 lg:w-48">
//             <img
//               src="/tata1.png"
//               alt="Tata BlueScope Steel Logo"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Feedbacks */}

//       <div className="testimonial-wrapper mx-auto px-5 py-14">
//         <h2 className="slider-heading text-3xl md:text-4xl text-center font-medium text-[#345CA5] mb-12">
//           Here is what our Clients are saying About us
//         </h2>

//         <div className="slider-container max-w-3xl mx-auto">
//           {/* Testimonial Card */}
//           <div
//             className="testimonial-card bg-white rounded-lg shadow-lg p-6 mb-8"
//             onMouseEnter={stopAutoRotation}
//             onMouseLeave={beginAutoRotation}
//           >
//             <div className="testimonial-content flex flex-col md:flex-row items-center md:items-start gap-6">
//               {/* Image */}
//               <div className="avatar-wrapper w-24 h-24 flex-shrink-0">
//                 <img
//                   src={feedbackItems[activeSlideIndex].image}
//                   alt={feedbackItems[activeSlideIndex].name}
//                   className="client-avatar w-full h-full rounded-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="testimonial-text flex-1">
//                 <h3 className="client-name text-xl font-medium text-gray-800 mb-2">
//                   {feedbackItems[activeSlideIndex].name}
//                 </h3>
//                 <p className="client-feedback text-gray-700 mb-4">
//                   {feedbackItems[activeSlideIndex].text}
//                 </p>
//                 <p className="feedback-date text-sm text-gray-500">
//                   {feedbackItems[activeSlideIndex].date}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Navigation */}
//           <div
//             className="slider-controls flex justify-center items-center gap-4"
//             onMouseEnter={stopAutoRotation}
//             onMouseLeave={beginAutoRotation}
//           >
//             {/* Previous Button */}
//             <button
//               onClick={goToPrevSlide}
//               className="prev-btn text-[#345CA5] text-3xl hover:text-blue-800 focus:outline-none"
//               aria-label="Previous testimonial"
//             >
//               &#10094;
//             </button>

//             {/* Indicators */}
//             <div className="slide-indicators flex gap-2">
//               {feedbackItems.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => jumpToSlide(index)}
//                   className={`indicator-dot w-3 h-3 rounded-full ${
//                     index === activeSlideIndex ? "bg-blue-600" : "bg-blue-200"
//                   }`}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                 />
//               ))}
//             </div>

//             {/* Next Button */}
//             <button
//               onClick={goToNextSlide}
//               className="next-btn text-[#345CA5] text-3xl hover:text-blue-800 focus:outline-none"
//               aria-label="Next testimonial"
//             >
//               &#10095;
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


return (
    <>
      {/* Carousel */}
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <CarouselSlide 
            key={slide.id} 
            slide={slide} 
            isActive={index === currentSlide} 
          />
        ))}

        {/* Navigation dots */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <DotButton 
              key={index}
              active={index === currentSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <ArrowButton direction="left" onClick={prevSlide} />
        <ArrowButton direction="right" onClick={nextSlide} />

        <ContactButton />
      </div>

      {/* Main content */}
      <div className="min-h-screen w-full bg-gray-50 relative">
        {/* Background image for the entire page */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-6  z-0"
          style={{
            backgroundImage: "url('/bg-pattern.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 md:px-8 py-8 relative z-10">
          {/* Header Section */}
          <header className="mb-8">
            <h1 className="text-xl text-center md:text-2xl font-bold mb-6">
              Pre-Engineered Building Solutions and Manufacturers
            </h1>

            <div className="flex flex-col md:flex-col gap-8 items-start">
              <div className="p-4 md:w-full ">
                <p className="text-lg leading-relaxed font-[Inter] text-center text-gray-700 mb-6">
                  Blueladder EPC Solutions Private Limited is the Engineered
                  Building supplier and Manufacturers was established in the
                  year 2015, as a Pre-Engineered Manufacturer in Nagpur. We
                  cater to the Pre Engineered Building sector in Nagpur, Pune,
                  Mumbai, Ahmedabad, Hyderabad, Bangalore, Satara and
                  Maharashtra and Central India.
                </p>
              </div>
              <div className="flex w-full items-center mb-4">
                <p className="text-lg md:w-5/8 font-[Inter] leading-relaxed text-gray-700 mb-6">
                  The Blueladder's headquarter is situated in Nagpur, with its
                  regional operational offices. We are proud to have completed
                  PEB successful PEB projects for various clients across India.
                  We are known to have one of the best qualified team of
                  professionals and specialists. Besides Pre Engineered Steel
                  Buildings, Blueladder provides excellent Engineering,
                  Procurement & Construction turnkey solutions, and technical
                  and advisory services.
                </p>
              <div className="md:w-3/8 flex justify-center">
                <img src="/logo.png" alt="Logo" />
              </div>
              </div>

            </div>
          </header>

          {/* Main Section */}
          <section className="mb-12">
            <h2 className="text-xl text-center md:text-2xl font-bold text-gray-800 mb-4">
              Leading Pre-Designed Structure PEB Construction Company
            </h2>

            <p className="text-lg leading-relaxed font-[Inter] text-center mb-6">
              We are one of the leading and dedicated manufacturers of
              Pre-Engineered buildings and all kinds of Roofing Products and
              accessories. The Pre-engineered buildings constructed by us are
              best suited for industrial structures like warehouses, factory
              buildings, sheds, commercial buildings, airport terminal
              buildings, aircraft hangars, metro stations, poultry farms,
              multi-story buildings, parking sheds and a wide range of other
              building solutions.
            </p>
          </section>

          {/* Philosophy Section */}

          <div className="container mx-auto h-full relative z-10 flex items-center">
            <div className="w-full justify-evenly flex flex-col md:flex-row items-center">
              {/* Left side - Philosophy title */}
              <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-[Inter] text-center ">
                  Our <br /> PHILOSOPHY
                </h2>
              </div>

              {/* Right side - Vision, Mission, Values */}
              <div className="md:w-2/3 relative">
                <div className="flex flex-col gap-5 max-w-md">
                  {/* Vision */}
                  <div className="bg-[#DDCCA6] px-4 py-3 rounded text-white">
                    <p>Our Vision shows what we are striving for.</p>
                  </div>

                  {/* Mission */}
                  <div className="bg-[#6A9AB0] px-4 py-3 rounded text-white">
                    <p>Our Mission highlights how we want to achieve it.</p>
                  </div>

                  {/* Core Values */}
                  <div className="bg-[#3A6D8C] px-4 py-3 rounded text-white">
                    <p>Our core values demonstrate how we will achieve them.</p>
                  </div>
                </div>

                {/* Person walking */}
                <div className="absolute right-0 bottom-0 transform translate-y-12 md:translate-y-0">
                  <img
                    src="/person.png"
                    alt="Person walking"
                    className="h-54"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision Card */}
            <div className="bg-white rounded-lg shadow-md py-10 text-center">
              <div className="bg-blue-600 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4">
                <img src="/vision.png" alt="" />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-3">Vision</h3>

              <p className="text-lg text-gray-600 mb-4">
                We at BlueLadder EPC Solutions <br />
                started the company with a vision <br />
                to provide fast, easy and unique <br />
                pre-engineered structures of steel.
              </p>

              <a
                href="#"
                className="text-blue-600 text-xs font-semibold hover:underline"
              >
                READ MORE →
              </a>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-lg shadow-md py-10 text-center">
              <div className="bg-blue-600 rounded-full h-24 w-24  flex items-center justify-center mx-auto mb-4">
                <img src="/mission.png" alt="" />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-3">Mission</h3>

              <p className="text-lg text-gray-600 mb-4">
                We envisage becoming central <br />
                India’s leading modern PEB <br />
                company by replacing <br />
                conventional structures.
              </p>

              <a
                href="#"
                className="text-blue-600 text-xs font-semibold hover:underline"
              >
                READ MORE →
              </a>
            </div>

            {/* Core Value Card */}
            <div className="bg-white rounded-lg shadow-md py-10 text-center">
              <div className="bg-blue-600 rounded-full h-24 w-24  flex items-center justify-center mx-auto mb-4">
                <img src="/core.png" alt="" />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Core Value
              </h3>

              <p className="text-lg text-gray-600 mb-4">
                We at Blueladder EPC Solutions <br />
                offer innovative & creative building <br />
                designs to provide best, easy and <br />
                value pre-engineered structures of steel.
              </p>

              <a
                href="#"
                className="text-blue-600 text-xs font-semibold hover:underline"
              >
                READ MORE →
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* VideoShowcaseSection */}
      <motion.div 
        className="bg-gray-100 py-12 px-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="text-2xl md:text-3xl font-medium text-[#345CA5] text-center mb-6"
            variants={fadeInUp}
          >
            Pre Engineered Building (PEB)Manufacturing and Assembling
          </motion.h2>

          <motion.p 
            className="text-gray-700 text-center mb-10 max-w-3xl mx-auto text-lg"
            variants={fadeInUp}
          >
            View this video to learn about Blue Ladder EPC Solutions Pvt Ltd's
            working style with Pre Engineered Buildings across India...
          </motion.p>

          <motion.div 
            className="bg-white rounded-3xl shadow-lg p-8 mb-10 flex flex-col md:flex-row"
            variants={scaleUp}
            whileHover={{ scale: 1.01 }}
          >
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <motion.img 
                  src="/logo.png" 
                  alt="Blue Ladder Logo" 
                  className="h-12"
                  whileHover={{ rotate: 5 }}
                />
              </div>

              <p className="text-blue-800 font-medium text-lg mb-6">
                Click here to view our state of <br />
                the art PEB manufacturing <br />
                facility
              </p>

              <p className="text-gray-500 text-lg mb-4">
                contact@blueladderspc.com
              </p>

              <p className="text-gray-500 text-lg">Blue Ladder EPC Solutions</p>
            </div>

            <div className="md:w-1/2 relative">
              <motion.div 
                className="rounded-xl overflow-hidden bg-gray-200 h-64 relative"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/api/placeholder/600/400"
                  alt="PEB Structure"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="bg-white bg-opacity-70 rounded-full p-4 shadow-md"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-blue-600 fill-current"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.p 
            className="text-gray-700 text-center text-lg max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            BlueLadder EPC is a global enterprise that specializes in providing
            solutions for Pre-engineered Buildings and Steel Structures.
          </motion.p>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div 
        className="bg-gradient-to-b from-white to-gray-100 py-8 sm:py-12 px-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2 
          className="text-[#345CA5] text-xl sm:text-2xl md:text-3xl font-medium text-center mb-8 sm:mb-16"
          variants={fadeInUp}
        >
          Benefits of Pre Engineered Steel Structures:
        </motion.h2>

        {/* Desktop Layout */}
        <div className="relative max-w-4xl mx-auto h-[500px] hidden md:block">
          {[
            {
              text: "Pre-engineered building structures have lightweight construction and speedy installation.",
              position: "top-20 left-30"
            },
            {
              text: "The building's insulated walls and facets enhance weatherproofing and energy efficiency.",
              position: "top-20 right-20"
            },
            {
              text: "PEB structures require low maintenance due to high-quality materials and precise manufacturing.",
              position: "bottom-20 -right-40"
            },
            {
              text: "PEB structures require low maintenance due to high-quality materials and precise manufacturing.",
              position: "bottom-20 left-90"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className={`absolute ${benefit.position} transform -translate-x-1/2 -translate-y-1/2 w-[220px] bg-[#345CA5] text-white p-5 rounded-md shadow text-center`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm lg:text-base leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout */}
        <motion.div 
          className="md:hidden space-y-4 max-w-md mx-auto"
          variants={staggerContainer}
        >
          {[
            "Pre-engineered building structures have lightweight construction and speedy installation.",
            "The building's insulated walls and facets enhance weatherproofing and energy efficiency.",
            "PEB structures require low maintenance due to high-quality materials and precise manufacturing.",
            "Pre-engineered steel buildings offer cost-effectiveness through reduced construction time and labor costs.",
            "Pre-engineered buildings have a variety of finishing options that add aesthetic appeal."
          ].map((text, index) => (
            <motion.div
              key={index}
              className="bg-[#345CA5] text-white p-5 rounded-md shadow text-center"
              variants={fadeInUp}
              whileHover={{ x: 5 }}
            >
              <p className="text-sm sm:text-base leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div 
        className="container mx-auto px-4 py-12 max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2 
          className="text-center text-3xl md:text-4xl font-medium text-[#345CA5] mb-6"
          variants={fadeInUp}
        >
          Why Choose us
        </motion.h2>

        <motion.p 
          className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
          variants={fadeInUp}
        >
          Our team excels in delivering cutting-edge solutions for
          Pre-Engineered Building systems...
        </motion.p>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-r md:border-r-0 border-gray-200">
              <StatCard value="700" label="Total Projects" />
              <StatCard value="300" label="Professional Team Member" />
              <StatCard value="1300000" label="Quantum Delivered" />
              <StatCard value="9" label="Regional Office" />
            </div>

            <div className="mt-8 px-4">
              <motion.p 
                className="text-gray-600 mb-6"
                variants={fadeInUp}
              >
                We Work Together With Our Clients To Design And Construct Homes
                And Surroundings That Match Their Values And Way Of Life.
              </motion.p>

              <motion.button
                className="bg-[#345CA5] text-white font-bold uppercase tracking-wider py-5 px-14 text-sm relative"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)",
                  borderRadius: "10px 10px 40px 10px",
                }}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#1e40af"
                }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORE MORE
              </motion.button>
            </div>
          </div>

          <motion.div 
            className="md:w-1/2 mt-8 md:mt-0 flex gap-2 h-full"
            variants={rotateY}
          >
            <div className="w-1/2 h-auto">
              <motion.img
                src="/whychoose-left.jpg"
                alt="Modern building exterior"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
              />
            </div>

            <div className="w-1/2 flex flex-col gap-2">
              <div className="h-1/4">
                <motion.img
                  src="whychoose-right1.png"
                  alt="Glass building architecture"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="h-full">
                <motion.img
                  src="whychoose-right2.jpg"
                  alt="City skyscrapers"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        className="max-w-6xl mx-auto p-4 bg-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1 
          className="text-3xl font-medium text-[#345CA5] mb-8"
          variants={fadeInUp}
        >
          Our Products & Services
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </motion.div>

      {/* Clients Section */}
      <motion.div 
        className="max-w-6xl mx-auto p-4 bg-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1 
          className="text-3xl font-medium text-[#345CA5] text-center mb-12"
          variants={fadeInUp}
        >
          Who we've Worked With
        </motion.h1>

        <motion.div 
          className="overflow-hidden"
          variants={fadeIn}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / getVisibleCount())
              }%)`,
            }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full md:w-1/4 px-4 flex justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-64 h-32 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Partners Section */}
      <motion.div 
        className="container mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2 
          className="text-3xl md:text-4xl text-center font-medium text-[#345CA5] mb-10"
          variants={fadeInUp}
        >
          Our Channel Partners
        </motion.h2>

        <motion.div 
          className="flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-16 lg:gap-24"
          variants={staggerContainer}
        >
          {[
            { src: "/tata.png", alt: "Tata Steel Logo" },
            { src: "/jsw.png", alt: "JSW Steel Logo" },
            { src: "/tata1.png", alt: "Tata BlueScope Steel Logo" }
          ].map((partner, index) => (
            <motion.div 
              key={index}
              className="w-48 md:w-40 lg:w-48"
              variants={fadeIn}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        className="testimonial-wrapper mx-auto px-5 py-14"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2 
          className="slider-heading text-3xl md:text-4xl text-center font-medium text-[#345CA5] mb-12"
          variants={fadeInUp}
        >
          Here is what our Clients are saying About us
        </motion.h2>

        <motion.div 
          className="slider-container max-w-3xl mx-auto"
          variants={fadeIn}
        >
          <TestimonialCard 
            testimonial={feedbackItems[activeSlideIndex]} 
            active={true}
          />

          <div className="slider-controls flex justify-center items-center gap-4">
            <button
              onClick={goToPrevSlide}
              className="prev-btn text-[#345CA5] text-3xl hover:text-blue-800 focus:outline-none"
            >
              &#10094;
            </button>

            <div className="slide-indicators flex gap-2">
              {feedbackItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => jumpToSlide(index)}
                  className={`indicator-dot w-3 h-3 rounded-full ${
                    index === activeSlideIndex ? "bg-blue-600" : "bg-blue-200"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNextSlide}
              className="next-btn text-[#345CA5] text-3xl hover:text-blue-800 focus:outline-none"
            >
              &#10095;
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
