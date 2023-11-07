/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const BorrowedBookCard = ({ borrow }) => {
  const { _id, returnData, borrowDate, image, bookName, category } = borrow;
  // 
  const handleReturnBook = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Return this book?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/api/v1/borrow-book/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteResult.deletedCount > 0) {
              Swal.fire(
                "Return!",
                "You successfully resturn a book",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl my-5">
        <a href="#">
          <img
            className="w-48 h-48 mx-auto mb-4 object-cover"
            src={image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <div className="flex gap-1">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
              {bookName}
            </h5>
            <p className="badge badge-secondary text-black">{category}</p>
          </div>
          <div className="mt-3">
            <p>Borrowed Date: {borrowDate.slice(0, 10)}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[#f6425f]">
              Return Date: {returnData.slice(0, 10)}
            </p>
            <button
              onClick={() => handleReturnBook(_id)}
              href="#"
              className="text-white bg-[#f6425f] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Return Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBookCard;
