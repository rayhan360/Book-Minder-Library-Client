import { NavLink, Link } from "react-router-dom";
import Title from "../../components/Shared/Title";
import useBook from "../../hooks/useBook/useBook";
import Loading from "../../components/Shared/Loading";
import Ratings from "../../components/Shared/Rating";
import { useState } from "react";

const AllBook = () => {
  const { data, isLoading } = useBook();
  const [filterBook, setFilterBook] = useState("all")

  if (isLoading) {
    return <Loading></Loading>;
  }

  const filteredBooks = filterBook === "available"  ? data.filter(book => book.quantity > 0) : data;

  return (
    <div>
      <Title>
        See All Books
        <div className="text-xl mt-3 flex justify-center gap-3">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <p>&lt;</p>
          <p className="text-[#f6425f]"> All Book</p>
        </div>
      </Title>
      <div className="flex justify-end">
        <select 
        onChange={(e) => setFilterBook(e.target.value)}
        className="select select-bordered w-full max-w-xs mr-5 mt-5">
          <option disabled selected>
           Filter
          </option>
          <option value={"available"}>Available Book</option>
          <option value={"all"}>All Book</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 max-w-[1500] mx-auto my-10">
        {filteredBooks.map((book) => (
          <div className="" key={book._id}>
            <div className="card lg:card-side bg-base-100 shadow-xl h-80 lg:h-44">
              <figure>
                <img src={book.image} className="w-32" alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{book.name}</h2>
                <div className="flex">
                  <p>
                    <span className="font-medium">Author</span>: {book.author}
                  </p>
                  <p>
                    <span className="font-medium">Category</span>:{" "}
                    {book.category}
                  </p>
                </div>
                <div className="flex items-center">
                  <p>
                    <Ratings rating={book.rating}></Ratings>
                  </p>
                  <Link to={`/update-book/${book._id}`}>
                    <button className="bg-[#f6425f] text-white px-5 py-2 rounded-md">
                      Update book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBook;
