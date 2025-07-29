import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

function GoogleLogin() {
  const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        console.log("")
      }
    } catch (error) {
      console.error("Error while requesting google code", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });
  return (
    <div>
      <button onClick={googleLogin}> Login With Google</button>
    </div>
  );
}

export default GoogleLogin;
