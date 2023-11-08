import { useState } from "react";
import Title from "../../components/Shared/Title";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import { useEffect } from "react";
import axios from "axios";
import BorrowedBookCard from "./BorrowedBookCard";
import { Helmet } from "react-helmet";

const BorrowBook = () => {
  const { user } = useAuth();
  const [borrowBook, setBorrowBook] = useState([]);

  const url = `https://book-minder-library-server.vercel.app/api/v1/borrow-book?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBorrowBook(res.data);
    });
  }, [url]);

  return (
    <div>
      <Title>
        See Your Borrowed Books
        <div className="text-xl mt-3 flex justify-center gap-3">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <p>&lt;</p>
          <p className="text-[#f6425f]">Borrow Book</p>
        </div>
      </Title>
      <Helmet>
        <title>Borrowed Book</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto">
        {borrowBook.map((borrow) => (
            <BorrowedBookCard key={borrow._id} borrow={borrow} borrowBook={borrowBook} setBorrowBook={setBorrowBook}>
            </BorrowedBookCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowBook;
