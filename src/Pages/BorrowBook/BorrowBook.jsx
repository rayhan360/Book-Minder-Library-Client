import Title from "../../components/Shared/Title";
import { NavLink } from "react-router-dom";

const BorrowBook = () => {
    
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
    </div>
  );
};

export default BorrowBook;
