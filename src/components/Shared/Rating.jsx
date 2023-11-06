/* eslint-disable react/prop-types */
// import Rating from "react-rating";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Ratings = ({ rating }) => {
  const starIcons = [];
  const roundedRating = Math.floor(rating); // Whole number rating
  const hasHalfStar = rating % 1 !== 0; // Check for a half-star

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      starIcons.push(<FaStar key={i} color="gold" />);
    } else if (hasHalfStar && i === roundedRating + 1) {
      starIcons.push(<FaStarHalf key={i} color="gold" />);
    } else {
      starIcons.push(<FaStar key={i} color="gray" />);
    }
  }
  return (
    <div className="flex">
      <div className="flex text-2xl">{starIcons}</div>
      <div className="badge badge-secondary">{rating}</div>
    </div>
  );
};

export default Ratings;
