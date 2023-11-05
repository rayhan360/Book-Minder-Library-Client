import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a2d62] p-8 text-white">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="w-32" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
              href="#"
              className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              NewsLatter
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              All Books
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
        © 2023 All Right to Reserve || Book Minder Library
      </p>
    </footer>
  );
};

export default Footer;
