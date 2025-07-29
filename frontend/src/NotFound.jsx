import React from "react";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const routeTo = useNavigate();
  return (
    <div>
      <div> Page not found 404</div>
      <button onClick={() => routeTo("/login")}>Login</button>
    </div>
  );
}

export default NotFound;
