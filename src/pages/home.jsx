import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { servicesData, teamData, contactData, productData } from "@/data";
import { useNavigate } from "react-router-dom";
import ProductCard from "@/widgets/cards/product-card";

export function Home() {

  const [isOpen, setIsOpen] = useState(false); // State to control popup visibility
  const [imgSrc, setImgSrc] = useState(null); // State to control popup visibility
  const [imgAlt, setImgAlt] = useState('booking-img'); // State to control popup visibility

  const scrollToSection = () => {
    const section = document.getElementById("more-info");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to toggle the popup visibility
  const togglePopup = (img) => {
    setImgSrc(img)
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleAllFeature = () => {
    navigate('/all-feature')
  }
  var sequenceDelay = 0;
  var duration = 0;
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/hero.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-gradient-to-r from-blue-900 to-purple-900/70 bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-gradient-to-r from-blue-900/80 to-blue-800/30 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 items-center mt-52 md:mt-5 lg:mt-14">
            <div className="mt-12 text-center md:text-left lg:text-left">
              <Typography
                variant="h1"
                color="white"
                className="mb-3 md:mb-8 lg:mb-10 font-black text-3xl md:text-5xl lg:text-6xl "
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              >
                Twenty Nine Solution
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-sm md:text-xl lg:text-xl px-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  >
                  Era digital menawarkan peluang luar biasa bagi bisnis yang siap untuk beradaptasi. Melalui migrasi digital, kami akan membantu Anda menciptakan website yang efektif, modern, dan siap bersaing di pasar global, membawa bisnis Anda ke level yang lebih tinggi.
              </Typography>
              
              <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start lg:justify-start"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-back"
                  >
                <Button variant="filled" color="blue" className="text-xs md:text-md lg:text-base" onClick={scrollToSection}>
                  Pelajari selengkapnya
                </Button>
              </div>

            </div>
            <div className="mb-30 md:mb-5 lg:mb-0">
              <div className="float-right w-full md:w-4/5 lg:w-4/5">
                <img
                  loading="lazy"
                  src="/img/hero_ilustrator.png "
                  className="h-full w-full animate-floating drop-shadow-lg shadow-slate-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-white px-4 pb-20 pt-4" id="more-info">
        <div className="container mx-auto" >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
            {servicesData.map(({ color, title, icon, description }, index) => (
              index <= 2 ? (
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
              ) : null
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center" 
                data-aos="fade-zoom-in"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-back"
                >
            <Button variant="filled" color="blue" onClick={handleAllFeature}>Lihat layanan selengkapnya</Button>
          </div>

          <div className="mt-10 md:mt-20 lg:mt-20 flex flex-wrap items-center">
            <div className="mx-auto mt-0 w-full md:w-6/12 lg:w-6/12 px-2"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
                >
              {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div> */}
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Tentang Kami
              </Typography>
              <Typography className="mb-8 font-normal text-gray-600 text-justify">
                Kami adalah pembuatan jasa web yang berfokus pada penyediaan layanan pembuatan website yang profesional dan sesuai kebutuhan bisnis Anda. Dengan tim yang berpengalaman dan kreatif, kami berkomitmen untuk menghadirkan solusi digital yang inovatif dan efektif.
                <br />
              </Typography>
              <Typography
                variant="h5"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Mengapa Memilih Kami?
              </Typography>
              <div className="ms-4">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ol className="list-decimal">
                    <li className="font-normal text-gray-600">Experienced Team</li>
                    <div className="text-sm text-gray-500">Kami memiliki tim yang berpengalaman dan ahli di bidangnya, siap membantu Anda mencapai solusi digital yang optimal.</div>
                    <li className="font-normal text-gray-600">Tailored Solutions</li>
                    <div className="text-sm text-gray-500">Setiap website yang kami buat disesuaikan dengan kebutuhan spesifik bisnis Anda, memastikan hasil yang relevan dan efektif.</div>
                    <li className="font-normal text-gray-600">Innovative Approach</li>
                    <div className="text-sm text-gray-500">Kami menyediakan dukungan teknis yang cepat dan responsif, siap membantu Anda kapan pun dibutuhkan.</div>
                  </ol>
                </div>
              </div>
              <br />
            </div>
            <div className="mx-auto mt-8 md:mt-0 lg:mt-0 flex w-full md:w-6/12 lg:w-6/12 justify-end px-0 md:px-4 lg:px-4"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-easing="ease-in-sine"
                >
                <img
                  alt="Card Image"
                  loading="lazy"
                  src="/img/chat_bot.gif"
                  className="h-full w-10/12"
                  
                />
            </div>
          </div>

        </div>
      </section>
      <section className="px-4 pt-20 pb-48 w-full bg-blue-gray-50">
        <div className="container mx-auto">
          <div className="section-title text-center">
            <Typography variant="h3" color="blue-gray" className="mt-6 mb-5">
                Pilihan Produk Yang Tersedia
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 w-full">
          {productData.map(({ img, name, text, url }) => (
              <ProductCard
                key={name}
                img={img}
                name={name}
                text={text}
                url={
                  <a href={url} target="_blank">Lihat Demo...</a>
                }
              />
            ))}
          </div>
        </div>
      </section>
      {/* <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}

      <section className="relative bg-white py-24 px-0">
        <div className="conteiner mx-auto bg-content">
          {/* <PageTitle section="Rekan Kerja" heading="Bangun Sesuatu"> */}
          <div className="relative z-10 mx-2">

            <PageTitle section="" heading="Migrasi Dengan Bisnis Digital">
              "Migrasi ke dunia digital bukan lagi sebuah pilihan, melainkan keharusan untuk tetap bersaing di pasar modern. Kami siap membantu bisnis Anda beralih dengan mulus melalui solusi website yang inovatif, profesional, dan disesuaikan dengan kebutuhan usaha Anda."
            </PageTitle>

            <div className="mx-auto mt-12 mb-40 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
              {contactData.map(({ title, icon, description }) => (
                <Card
                  key={title}
                  color="transparent"
                  shadow={false}
                  className="text-center text-blue-gray-900"
                >
                  <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-800 shadow-lg shadow-500/20">
                    {React.createElement(icon, {
                      className: "w-5 h-5 text-white",
                    })}
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                  </Typography>
                  <Typography className="font-normal text-blue-gray-700" style={{ textShadow: '1px 2px 9px rgba(255, 255, 255, 255.25)' }}>
                    {description}
                  </Typography>
                </Card>
              ))}
            </div>

          </div>
          
        </div>
      </section>
      

      {/* Popup Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={togglePopup} // Close popup when clicking outside
        >
          <div 
            className="bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={togglePopup}
            >
              ✖
            </button>

            {/* Dynamic Content */}
            <div className="text-center p-4">
              {/* <h2 className="text-xl font-bold mb-2">{popupContent.title}</h2>
              <p className="text-gray-600 mb-4">{popupContent.description}</p> */}
              {/* Enlarged Image */}
              <img 
                src={imgSrc} 
                loading="lazy"
                alt={imgAlt}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
