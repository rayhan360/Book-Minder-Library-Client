import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner4 from '../../../assets/banner/banner4.jpg'
const Banner = () => {
  const setting = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <>
      <Swiper {...setting} navigation={true}>
        <SwiperSlide>
          <div className="relative">
            <img src={banner1} className="h-screen w-screen" alt="" />
            <div className="hero h-full absolute left-0 top-0 bg-black bg-opacity-60">
              <div className="hero-content text-center mb-36">
                <div className="flex flex-col h-[60vh] justify-center">
                  <h1
                    data-aos="fade-right"
                    className="text-2xl md:text-5xl text-white font-bold"
                  >
                    Read, Learn, Grow
                  </h1>
                  <div className="mt-10">
                    <p data-aos="fade-left" className=" text-gray-200">
                    Welcome to Book Minder Libraray, your online destination for discovering, <br /> borrowing, and exploring a wide range of books and resources
                    </p>
                  </div>
                  <div className="mt-7">
                    <a href="#about"><button className="bg-[#f6425f] text-white px-5 py-2 rounded-md ml-3">About us</button></a>
                    <a href="#newsLatter"><button className="border text-white border-[#f6425f] px-5 py-2 rounded-md ml-2">NewsLatter Subs</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={banner2} className="h-screen w-screen" alt="" />
            <div className="hero h-full absolute left-0 top-0 bg-black bg-opacity-60">
              <div className="hero-content text-center mb-36">
                <div className="flex flex-col h-[60vh] justify-center">
                  <h1
                    data-aos="fade-right"
                    className="text-2xl md:text-5xl text-white font-bold"
                  >
                    Discover Your Next Read
                  </h1>
                  <div className="mt-10">
                    <p className=" text-gray-200">
                    Discover a world of knowledge at your fingertips with Book Minder Library. Browse our extensive catalog,  <br /> borrow books, and embark on a journey of learning and discovery.
                    </p>
                  </div>
                  <div className="mt-7">
                  <a href="#about"><button className="bg-[#f6425f] text-white px-5 py-2 rounded-md ml-3">About us</button></a>
                  <a href="#newsLatter"><button className="border text-white border-[#f6425f] px-5 py-2 rounded-md ml-2">NewsLatter Subs</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={banner4} className="h-screen w-screen" alt="" />
            <div className="hero h-full absolute left-0 top-0 bg-black bg-opacity-60">
              <div className="hero-content text-center mb-36">
                <div className="flex flex-col h-[60vh] justify-center">
                  <h1
                    data-aos="fade-right"
                    className="text-2xl md:text-5xl text-white font-bold"
                  >
                   Your Gateway to Knowledge
                  </h1>
                  <div className="mt-10">
                    <p className=" text-gray-200">
                    Find, borrow, and enjoy books from the comfort of your home with Book Minder Library. Join our community of readers today.
                    </p>
                  </div>
                  <div className="mt-7">
                  <a href="#about"><button className="bg-[#f6425f] text-white px-5 py-2 rounded-md ml-3">About us</button></a>
                    <a href="#newsLatter"><button className="border text-white border-[#f6425f] px-5 py-2 rounded-md ml-2">NewsLatter Subs</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
