import React from "react";
import { useAppStore } from "../services/AuthContext";

function Dashboard() {
  const { currentUser, logout } = useAppStore();
  console.log({ currentUser });
  return (
    <div>
      <header
        style={{
          position: "fixed",
          top: 0,
          background: "white",
          color: "black",
          width: "90%",
          margin: "0 auto",
          borderRadius: 10,
          height: 80,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ marginLeft: 20 }}>Dashboard</h4>
        <p style={{ marginRight: 20 }}>
          User: {currentUser ? currentUser?.displayName : "X"}
        </p>
        {currentUser && (
          <h4
            style={{ cursor: "pointer", color: "red", marginRight: 20 }}
            onClick={logout}
          >
            Logout
          </h4>
        )}
      </header>
      <p>Hello world</p>
    </div>
  );
}

export default Dashboard;
