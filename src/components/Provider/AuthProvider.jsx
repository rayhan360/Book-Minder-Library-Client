/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import auth from "../../config/firebase.config";
import axios from "axios";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google auth
  const googleAuthProvider = new GoogleAuthProvider();

  // google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  // create a accoutn with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user with email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const logOut = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f6425f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out!",
    });
    if (result.isConfirmed) {
      signOut(auth);
      Swal.fire("sign Out", "sign Out Successfully", "success");
    }
  };

  // observe account
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedInUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      // if user exist then issue a token
      if (currentUser) {
        axios
          .post("http://localhost:3000/api/v1/jwt", loggedInUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response authprovider", res.data);
          });
      } else {
        axios
          .post("http://localhost:3000/api/v1/logout", loggedInUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("logout response data", res.data);
          });
      }
    });
    return () => unSubscribe();
  }, [user?.email]);
  const authInfo = {
    user,
    loading,
    createUser,
    googleSignIn,
    login,
    logOut,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
