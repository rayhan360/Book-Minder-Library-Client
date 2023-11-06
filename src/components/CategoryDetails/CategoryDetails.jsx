/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import useBook from "../../hooks/useBook/useBook";
import Loading from "../Shared/Loading";
import { useParams, NavLink } from "react-router-dom";
import Title from "../Shared/Title";
import { FaBook, FaHandHoldingHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";


const CategoryDetails = () => {
  const { data: bookDetails, isLoading } = useBook();

  const { id } = useParams();

  if (isLoading) {
    return <Loading></Loading>;
  }

  const findBookDetails = bookDetails.find((detail) => detail._id === id);
  const { image, name, quantity, author, category, rating, description } =
    findBookDetails;
  console.log(description);
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
  return (
    <div>
      <Title>
        Book Details
        <div className="text-xl mt-3 flex justify-center gap-3">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <p>&lt;</p>
          <NavLink to={`/category/${category}`}>
            <p>Category Details</p>
          </NavLink>
           
          <p>&lt;</p>

          <p className="text-[#f6425f]">{name}</p>
        </div>
      </Title>

      <div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 rounded-lg flex justify-center overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-80 object-cover"
              />
            </div>

            <div className="w-full md:w-3/5 pl-4">
              <h1 className="text-3xl font-bold mb-2">{name}</h1>

              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Author:</span> {author}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Category:</span> {category}
              </p>

              <p className="text-gray-800 mb-4">{description}</p>

              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <p className="text-gray-600">
                    <span className="font-semibold">Quantity:</span>{" "}
                    {quantity}
                  </p>
                </div>
                <div className="flex-1">
                  <ReactStars
                    count={5}
                    value={rating}
                    size={28}
                    activeColor="#ff5722"
                    edit={false}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center">
                  <FaBook className="mr-2" />
                  Read
                </button>
                <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg flex items-center">
                  <FaHandHoldingHeart className="mr-2" />
                  Borrow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
