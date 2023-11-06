import Lottie from "lottie-react";
import loading from '../../assets/animate.json'

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center bg-[#1a2d62] justify-center">
      <div className="max-w-[250px]">
        <Lottie animationData={loading}></Lottie>
      </div>
    </div>
  );
};

export default Loading;
