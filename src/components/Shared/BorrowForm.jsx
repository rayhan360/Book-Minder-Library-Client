/* eslint-disable react/prop-types */
import { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const BorrowForm = ({ findBookDetails, user, refetch }) => {
  console.log(user);
  const [returnData, setReturnDate] = useState(new Date());
  const [borrowDate, setBorrowDate] = useState(new Date());

  const {
    image,
    name: bookName,
    quantity,
    author,
    category,
    rating,
    description,
  } = findBookDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: user.displayName,
      email: user.email,
      returnData,
      borrowDate,
      image,
      bookName,
      quantity,
      category,
      author,
      rating,
      description,
    };
    console.log(data);
    axios
      .post("http://localhost:3000/api/v1/borrow", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.borrowResult.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Borrow Book Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          refetch();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "This book is already borrowed by the user.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 p-5 rounded-xl bg-clip-border">
          <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-[#f6425f] bg-clip-border shadow-[#f6425f]/40">
            <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
              Borrow a Book
            </h3>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f6425f] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                defaultValue={user?.displayName}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f6425f] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f6425f] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f6425f] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Name
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f6425f] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                defaultValue={user?.email}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f6425f] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f6425f] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f6425f] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <div className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f6425f] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                <DatePicker
                  selected={returnData}
                  onChange={(date) => setReturnDate(date)}
                />
              </div>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f6425f] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f6425f] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f6425f] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Return Date
              </label>
            </div>
            <div className="hidden">
              <DatePicker
                selected={borrowDate}
                onChange={(date) => setBorrowDate(date)}
              />
            </div>
          </div>
          <div className="p-6 pt-0">
            <button
              className="block w-full select-none rounded-lg bg-[#f6425f] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#f6425f]/20 transition-all hover:shadow-lg hover:shadow-[#f6425f]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Submit Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BorrowForm;
