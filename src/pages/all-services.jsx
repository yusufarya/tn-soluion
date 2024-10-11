import React, { useEffect, useRef, useState } from "react";
import { Footer } from "@/widgets/layout";
import { Button, Card, CardBody, Collapse, Typography } from "@material-tailwind/react";
import { servicesData } from "@/data";
import { useDraggable } from "react-use-draggable-scroll";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { FeatureCard } from "@/widgets/cards";

export function AllServices() {

  const [imgAlt, setImgAlt] = useState('service-img'); // State to control popup visibility

  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      // Check if scrolling down
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  var sequenceDelay = 0;
  var duration = 0;
  
  return (
    <>
      <div className="relative flex h-96 content-center items-center justify-center pt-20 pb-2">
      <div className="absolute top-0 h-full w-full bg-[url('/img/hero.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-gradient-to-r from-blue-900 to-purple-900/70 bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-gradient-to-r from-blue-900/80 to-blue-800/30 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black text-2xl md:text-3xl lg:text-4xl"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"
              >
                Layanan dari Twenty Nine Solution 
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-md"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center">
                Tingkatkan Keuntungan dengan Migrasi Bisnis Anda ke Platform Digital!
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {isVisible && (
        <>
          <div className="flex animate-bounce w-full mt-5 h-10 justify-center">
            {React.createElement(ChevronDoubleDownIcon, { className: 'w-10 h-10 inline-block text-blue-800' })}
          </div>
          <div className="flex w-full mt-0 pt-0 h-10 justify-center text-blue-800 font-medium text-xs">
            <div className="p-0">Scroll</div>
          </div>
        </>
      )}

      <section className="relative bg-white py-10">
        
        <div className="mt-0 md:mt-5 lg:mt-6 flex flex-wrap items-center">
          <div className="mx-auto mt-0 w-full px-4 md:w-6/12"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
            >
            <Typography
              variant="h3"
              className="mb-3 font-bold"
              color="blue-gray"
            >
              Pengembangan Web Aplikasi Kustom
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-600 text-justify">
              Kami menyediakan layanan pengembangan web aplikasi yang sepenuhnya disesuaikan dengan kebutuhan bisnis Anda. Setiap aplikasi yang kami kembangkan dirancang untuk menyelesaikan masalah spesifik dan meningkatkan efisiensi operasional. Kami bekerja sama dengan Anda untuk memahami alur kerja bisnis dan merancang solusi yang tepat guna, modern, dan skalabel.
            </Typography>
            <Typography
              variant="h5"
              className="mb-3 font-bold"
              color="blue-gray"
            >
              Keunggulan : 
            </Typography>
            <ol className="list-decimal text-blue-gray-600 ms-4">
              <li>Aplikasi yang disesuaikan dengan kebutuhan khusus bisnis.</li>
              <li>Teknologi terbaru untuk memastikan keamanan dan kinerja optimal.</li>
              <li>Fleksibilitas untuk menambahkan fitur di masa depan seiring dengan pertumbuhan bisnis</li>
            </ol>
          </div>
          <div 
            className="mx-auto mt-8 flex w-full justify-center p-4 md:w-5/12 lg:mt-0"
            data-aos="fade-in"
            data-aos-delay="200"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            <img 
              src='/img/devices.gif'
              loading="lazy"
              alt={imgAlt}
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
        
          {servicesData.map(({ color, title, icon, description }, index) => (
              <FeatureCard
                key={index}
                sequenceDelay={sequenceDelay+=100}
                duration={duration+=300}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
          ))}
        
        </div>

      </section>
      
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default AllServices;
