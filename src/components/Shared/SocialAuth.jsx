import { FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialAuth = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const socialMediaSignIn = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
        toast.success("user logged in successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex flex-col items-center space-y-4">
        <button
        onClick={() => socialMediaSignIn(googleSignIn)}
         className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-lg flex items-center space-x-4">
          <FaGoogle className="text-xl" /> <p>Sign in with Google</p>
        </button>
        <button className="bg-gray-900 hover:bg-gray-500 text-white py-2 px-4 rounded-lg flex items-center space-x-4">
          <FaGithub className="text-xl" /> <p>Sign in with GitHub</p>
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;
