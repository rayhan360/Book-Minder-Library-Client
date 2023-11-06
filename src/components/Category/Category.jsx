import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/category").then((res) => {
      setCategory(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="bg-gray-200 p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5 max-w-7xl mx-auto">
        {category.map((cat) => (
          <div key={cat._id}>
            <div className="card shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={cat.categoryImage}
                  alt="Shoes"
                  className="rounded-xl w-32 h-32"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{cat.categoryName}</h2>
                <Link to={`${cat.categoryName}`}>
                  <a
                    className="inline-flex items-center font-medium text-[#f6425f] hover:[#f6425f] dark:text-[#f6425f] dark:hover:text-[#f6325f]"
                  >
                    see all
                    <svg
                      className="w-2.5 h-2.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
