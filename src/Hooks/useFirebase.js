import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState("false");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  /*-------------------------------------------------------------------------------*\
  /////////////////////////// SIGN IN WITH GOOGLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  //After redirect_uri
  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  /*-------------------------------------------------------------------------------*\
  /////////////////////////////// FORM HANDLER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  const nameBlurHandler = (e) => {
    setName(e.target.value);
  };
  const emailBlurHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordBlurHandler = (e) => {
    setPassword(e.target.value);
  };
  /*-------------------------------------------------------------------------------*\
  /////////////////////////// SIGN IN Email/Password \\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  const processLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  /*-------------------------------------------------------------------------------*\
  ///////////////////// CREATE NEW USER Email/Password \\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  const registerNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  /*-------------------------------------------------------------------------------*\
  ///////////////////////////////// OBSERVER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  /*-------------------------------------------------------------------------------*\
  //////////////////////////////// Admin Verification \\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/

  useEffect(() => {
    fetch(`https://morning-badlands-81993.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  /*-------------------------------------------------------------------------------*\
  ////////////////////////////////// LOG OUT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  /*-------------------------------------------------------------------------------*\
  ////////////////////////////////// RETURN \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  return {
    user,
    name,
    email,
    password,
    error,
    isLoading,
    setUserName,
    setError,
    setUser,
    passwordBlurHandler,
    emailBlurHandler,
    nameBlurHandler,
    signInWithGoogle,
    registerNewUser,
    processLogin,
    setIsLoading,
    logOut,
    admin,
  };
};

export default useFirebase;
