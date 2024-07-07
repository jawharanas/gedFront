import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

const Callback: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTokens = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get("code");
      const state = params.get("state");

      if (code && state) {
        try {
          const response = await axios.post(
            "https://oauth2.googleapis.com/token",
            {
              client_id:
                "73336515376-9bmahr4fmdqldq9qkvisf5a043fcaaje.apps.googleusercontent.com",
              client_secret: "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",
              redirect_uri: "http://localhost:5173/callback",
              grant_type: "authorization_code",
              code: code,
            },
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );
          const { access_token, id_token, refresh_token } = response.data;
          // Store tokens and handle authentication
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("id_token", id_token);
          localStorage.setItem("refresh_token", refresh_token);
          // Navigate to a protected route or home page after successful login
          navigate("/");
        } catch (error: any) {
          console.error(
            "Error fetching tokens:",
            error.response ? error.response.data : error.message
          );
        }
      }
    };

    fetchTokens();
  }, [location, navigate]);

  return <LoadingSpinner />;
};

export default Callback;
