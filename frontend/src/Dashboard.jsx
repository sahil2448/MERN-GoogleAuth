import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const routeTo = useNavigate();
  useEffect(() => {
    const info = localStorage.getItem("user-info");
    if (info) {
      const user = JSON.parse(info);
      console.log(user);
      setName(user.name);
      setEmail(user.email);
      setImage(user.image);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    routeTo("/login");
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <h3>Email:{email}</h3>
      <img src={image} alt="" />

      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}

export default Dashboard;
