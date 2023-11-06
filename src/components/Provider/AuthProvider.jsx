/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import auth from "../../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create a accoutn with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user with email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password);
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
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
