import librarians from "../../../../assets/online/librarians.png";
import active from "../../../../assets/online/active.png";
import borrowed from "../../../../assets/online/borrowed.png";
import total from "../../../../assets/online/total.png";
import line from "../../../../assets/bg.png"
const Experience = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto my-20" >
      <div className=" lg:mt-20" data-aos="fade-up-left">
        <h1 className="text-3xl font-medium text-center lg:mt-20">
          <span className="font-extrabold">22 Years</span> Services In Our
          Library
        </h1>
        <p className="tex-sm mt-8">
          Unlocking the World of Imagination for Over 22 Years, our Library
          Offers a Boundless Realm of Knowledge, Adventures, and Dreams. Join us
          on this Literary Odyssey and Explore the Wonders of Books, Audiobooks,
          Magazines, and Kid&apos;s Reads. We&apos;re Your Passport to Infinite
          Worlds.
        </p>
        <img src={line} className="h-32 w-full" alt="" />
      </div>
      <div className="flex justify-center" data-aos="fade-up-right">
        <div className="flex gap-10">
          <div>
            <div className="card shadow-xl">
              <figure className="px-10 pt-10">
                <img src={total} alt="total book" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-3xl">1000+</h2>
                <p className="text-lg">Total Book</p>
              </div>
            </div>
            <div className="card shadow-xl">
              <figure className="px-10 pt-10">
                <img src={librarians} alt="librarians" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-3xl">5+</h2>
                <p className="text-lg">Total Librarians</p>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="card shadow-xl">
              <figure className="px-10 pt-10">
                <img src={borrowed} alt="active borrowed reader" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-3xl">500+</h2>
                <p className="text-lg">Book Borrowed <br /> by user</p>
              </div>
            </div>
            <div className="card shadow-xl">
              <figure className="px-10 pt-10">
                <img src={active} alt="Active" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-3xl">200+</h2>
                <p className="text-lg">Daily Active <br /> Reader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
