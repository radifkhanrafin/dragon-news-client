import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext(null)
const Auth = getAuth(app)


const AuthProvaider = ({ children }) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(Auth, email, password)
   }
   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(Auth, email, password)
   }
   const logOut = () => {
      setLoading(true)
      return signOut(Auth)
   }
   useEffect(() => {

      const unsubscribe = onAuthStateChanged(Auth, loggedUser => {
         console.log(loggedUser);
         setUser(loggedUser);
         setLoading(false);
      })
      return () => {
         unsubscribe()
      };
   }, []);

   const AuthInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
   }
   return (
      <AuthContext.Provider value={AuthInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvaider;