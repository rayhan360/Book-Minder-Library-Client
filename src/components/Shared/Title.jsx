/* eslint-disable react/prop-types */
import titleBanner from '../../assets/banner/banner1.jpg'
const Title = ({ children }) => {
  return (
    <div>
      <div className="relative">
        <img src={titleBanner} className="h-96 w-screen" alt="" />
        <div className="hero h-full absolute left-0 top-0 bg-[#1a2d62] bg-opacity-80">
          <div className="hero-content text-center mb-36">
            <div className="flex flex-col h-[60vh] justify-center">
              <h1
                data-aos="fade-right"
                className="text-2xl md:text-7xl text-white font-bold"
              >
                {children}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
