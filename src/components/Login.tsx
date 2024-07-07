import GoogleButton from "./GoogleButton";
import GithubButton from "./GithubButton";
import { useState } from "react";
import { useAuthService } from "../Services/AuhtenticationService";

import { Link, useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Destructure login from useAuthService
  const { login } = useAuthService();

  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    const clientId =
      "73336515376-9bmahr4fmdqldq9qkvisf5a043fcaaje.apps.googleusercontent.com";
    const redirectUri = "http://localhost:5173/callback"; // Your redirect URI
    const responseType = "code";
    const scope = "profile email";
    const state = "random_state_string"; // CSRF protection

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&state=${state} `;

    window.location.assign(authUrl);
  };

  const handleGitHubLogin = () => {
    const clientId = "e18566d3dcfda4252dc8";
    const redirectUri = "http://localhost:5173/callback"; // Your redirect URI
    const scope = "profile email";
    const state = "random_state_string"; // CSRF protection

    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;

    window.location.assign(authUrl);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const response = await login({ email, password });
      console.log("Login successful:", response);
    } catch (error: any) {
      console.error("Login failed:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <div className="  w-[370px] p-4 bg-white border-2 border-grey-100 px-5 py-15 rounded-xl border-1 bordergray mb-3">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center w-full mb-10">
            <img
              src="\download.png"
              alt="Logo"
              className=" flex justify-right items-right  h-[80px] w-[150px] my-auto "
            />
          </div>
          <GoogleButton handleClick={handleGoogleLogin} />

          <GithubButton handleClick={handleGitHubLogin} />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-grey-500 text-black rounded-md mb-4 hover:bg-gray-100 transition-colors duration-20"
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-grey-500 text-black rounded-md mb-4 hover:bg-gray-100 transition-colors duration-20"
            required
          />

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700"
          >
            {" "}
            S'authentifier
          </button>
          <p className="mt-4 text-center">
            Vous n'avez pas de compte ?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              S'inscrire
            </Link>
          </p>
        </form>
  
      </div>
      {error && (
          <div className="flex justify-center text-red-500 mb-4">
            Authentication error , please try again !{" "}
          </div>
        )}
    </div>
  );
};

export default Login;
