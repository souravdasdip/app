import React from "react";
import { useAppStore } from "../services/AuthContext";

function Login() {
  const { loginpopup, currentUser, login, sendPasswordReset } = useAppStore();

  const handleLoginWIthGoogle = () => {
    loginpopup();
  };
  return (
    <div>
      <button
        style={{ display: "flex", alignItems: "center", gap: 12 }}
        onClick={handleLoginWIthGoogle}
      >
        <img
          style={{ width: 30 }}
          src={
            "https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg"
          }
          alt="google"
        />
        <p>Login with Google</p>
      </button>
    </div>
  );
}

export default Login;
