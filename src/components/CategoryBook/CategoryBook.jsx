/* eslint-disable react-hooks/rules-of-hooks */
import useBook from "../../hooks/useBook/useBook";
import useCategory from "../../hooks/useCategory/useCategory";
import Loading from "../Shared/Loading";
import Title from "../Shared/Title";
import { NavLink, useParams, Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { useEffect } from "react";
import Ratings from "../Shared/Rating";

const CategoryBook = () => {
  const { data: category, isLoading: categoryLoading } = useCategory();
  const { data: books, isLoading: bookLoading } = useBook();
  const { categoryName: nameCategory } = useParams();

  if (categoryLoading || bookLoading) {
    return <Loading />;
  }

  const findCategory = category.find(
    (category) => category.categoryName === nameCategory
  );

  console.log(findCategory?.categoryName);

  const filterBooksByCategory = books.filter(
    (book) => book.category === findCategory?.categoryName
  );

  console.log(filterBooksByCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>
        Category Book
        <div className="text-xl mt-3 flex justify-center gap-3">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <p>&lt;</p>
          <p className="text-[#f6425f]">Category Book</p>
        </div>
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {filterBooksByCategory.map((book) => (
          <div key={book._id}>
            <div className="bg-white shadow-lg rounded-lg p-4 m-4">
              <img
                src={book.image}
                alt={book.name}
                className="w-48 h-48 mx-auto mb-4 object-cover"
              />
              <h2 className="text-xl font-bold">{book.name}</h2>
              <p className="text-gray-600">by {book.author}</p>
              <p className="text-gray-600">Category: {book.category}</p>
              {/* <ReactStars
                count={5}
                value={book.rating}
                size={24}
                activeColor="#ffd700"
                edit={false}
              /> */}
              <Ratings rating={book.rating}></Ratings>

              {/* Details Button */}
              <Link to={`/categoryDetails/${book._id}`}>
                <button className="mt-4 w-full bg-[#f6425f] flex justify-center items-center py-3 text-white">
                  <FaInfoCircle className="mr-2" />
                  <p>Details</p>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBook;
