"use client";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div >
      <h1 className="text-3xl font-bold mb-6">Sign in with Google</h1>


      <div
        style={{
          width: "fit-content",
          minWidth: "240px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (credentialResponse.credential) {
              const decoded = jwtDecode(credentialResponse.credential);
              console.log("Decoded user info:", decoded);


              localStorage.setItem("user", JSON.stringify(decoded));
              router.push("/dashboard");
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
}
