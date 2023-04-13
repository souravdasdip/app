import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "./firebase";

const AuthContext = React.createContext();

export function useAppStore() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      user &&
        user
          .getIdTokenResult(true)
          .then(function (res) {
            console.log("Token: ", res.token);
          })
          .catch(function (error) {
            console.log(error.message);
          });

      setLoading(false);
    });

    return unsubscribe;
  }, [currentUser]);

  // login function
  async function login(email, password) {
    const auth = getAuth();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(res.user);
      return "Sign in successful";
    } catch (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        return "Wrong password";
      } else if (errorCode === "auth/invalid-email") {
        return "Invalid Email!";
      } else if (errorCode === "auth/network-request-failed") {
        return "You're offline. Check your connection.!";
      } else {
        return errorMessage;
      }
    }
  }

  //login by google popup
  function loginpopup() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // console.log({ token });
        // The signed-in user info.
        // const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...
        if (errorCode === "auth/network-request-failed") {
          return "You're offline. Check your connection.!";
        } else {
          return errorMessage;
        }
      });
  }

  // logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  //reset password
  async function sendPasswordReset(email) {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      return "Password reset email sent!";
    } catch (error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(error.message);
      if (errorCode === "auth/invalid-email") {
        return "Invalid email!";
      }
      if (errorCode === "auth/user-not-found") {
        return "User not found!";
      }
    }
  }

  //email verification after sign in
  async function sendEmailToVerify() {
    const auth = getAuth();
    try {
      await sendEmailVerification(auth.currentUser);
      return "Verfication email is sent!";
    } catch (error) {
      return error.message;
    }
  }
  const value = {
    currentUser,
    login,
    loginpopup,
    logout,
    sendPasswordReset,
    sendEmailToVerify,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
