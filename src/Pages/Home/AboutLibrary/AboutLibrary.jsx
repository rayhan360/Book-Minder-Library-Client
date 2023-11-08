import ebook from "../../../assets/online/ebook.png";
import audiobook from "../../../assets/online/audiobook.png";
import magazine from "../../../assets/online/magazine.png";
import kidsbook from "../../../assets/online/reading.png";

const AboutLibrary = () => {
  return (
    <div className="my-5">
      <div>
        <h1 className="text-3xl font-medium text-center my-3 border-b-2 pb-5">
          Our Other Service In Online
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="card shadow-xl">
          <figure className="px-10 pt-10">
            <img src={ebook} alt="eBook" className="rounded-xl w-32 h-32" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">eBook</h2>
            <p>an electronic version of a printed book that can be read on a computer.</p>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure className="px-10 pt-10">
            <img src={audiobook} alt="audio book" className="rounded-xl w-32 h-32" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Audio Book</h2>
            <p>an audiocassette or CD recording of a reading of a book, typically a novel.</p>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure className="px-10 pt-10">
            <img src={magazine} alt="magazine" className="rounded-xl w-32 h-32" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Magazine</h2>
            <p>a periodical publication containing articles and illustrations information.</p>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure className="px-10 pt-10">
            <img src={kidsbook} alt="kids book" className="rounded-xl w-32 h-32" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kids Book</h2>
            <p>Ignite young minds with tales of magic and discovery. Where young minds embark on journeys to the extraordinary.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLibrary;
