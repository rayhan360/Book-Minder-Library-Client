import { NavLink } from "react-router-dom";
import Title from "../../components/Shared/Title";
import useBook from "../../hooks/useBook/useBook";
import Loading from "../../components/Shared/Loading";

const AllBook = () => {
  const { data, isLoading } = useBook();

  if (isLoading) {
    return <Loading></Loading>;
  }

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

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 max-w-[1500] mx-auto my-10">
        {data.map((book) => (
          <div className="" key={book._id}>
            <div className="card card-side bg-base-100 shadow-xl h-44">
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
                    <span className="font-medium">Rating</span>: {book.rating}
                  </p>
                  <button className="bg-[#f6425f] text-white px-5 py-2 rounded-md">Update book</button>
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
