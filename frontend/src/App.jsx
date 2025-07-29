import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin.jsx";
import Dashboard from "./Dashboard.jsx";
import NotFound from "./NotFound.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="769125494594-mqme6bengbn2si89tg1fbv7d2clhjtfj.apps.googleusercontent.com">
        <GoogleLogin></GoogleLogin>
      </GoogleOAuthProvider>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
