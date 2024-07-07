import React, { useState } from "react";
import GoogleButton from "./GoogleButton";
import GithubButton from "./GithubButton";
import { useAuthService } from "../Services/AuhtenticationService";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [error, setError] = useState<string>("");
  // Destructure register from useAuthService
  const { register } = useAuthService();

  const handleGoogleRegister = () => {
    const clientId =
      "73336515376-9bmahr4fmdqldq9qkvisf5a043fcaaje.apps.googleusercontent.com";
    const redirectUri = "http://localhost:5173/callback";
    const responseType = "code";
    const scope = "profile email";
    const state = "random_state_string";

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&state=${state}`;

    window.location.assign(authUrl);
  };

  const handleGitHubRegister = () => {
    const clientId = "e18566d3dcfda4252dc8";
    const redirectUri = "http://localhost:5173/callback";
    const scope = "profile email";
    const state = "random_state_string";

    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;

    window.location.assign(authUrl);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      // Use the register method from useAuthService
      const response = await register({ email, password, department });
      console.log("Registration successful:", response);
      window.location.href = "http://localhost:5173/Homepage";
    } catch (error: any) {
      console.error("Registration failed:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        className="w-[370px] p-4 bg-white border-2 border-grey-100 px-5 py-15 rounded-3xl border-1 bordergray mb-3"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center w-full mb-10">
          <img
            src="\download.png"
            alt="Logo"
            className=" flex justify-right items-right  h-[80px] w-[150px] my-auto "
          />
        </div>
        <GoogleButton handleClick={handleGoogleRegister} />
        <GithubButton handleClick={handleGitHubRegister} />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 bg-grey-500 text-black rounded-md mb-4 hover:bg-gray-300 transition-colors duration-20"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 bg-grey-500 text-black rounded-md mb-4 hover:bg-gray-200 transition-colors duration-20"
          required
        />
        <input
          type="password"
          placeholder="Confirmer votre mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 bg-grey-500 text-black rounded-md mb-4 hover:bg-gray-200 transition-colors duration-20"
          required
        />
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full p-2 bg-grey-500 text-black rounded-md mb-4 hover:bg-gray-200 transition-colors duration-20"
          required
        >
          <option value="" disabled>
            Sélectionner votre département
          </option>
          <option value="INFORMATIQUE">INFORMATIQUE</option>
          <option value="MARKETING">MARKETING</option>
          <option value="FINANCE">FINANCE</option>
          <option value="RH">RH</option>
        </select>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700"
        >
          S'inscrire
        </button>
        <p className="mt-4 text-center">
          Vous avez déja un compte ?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Se connecter
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
