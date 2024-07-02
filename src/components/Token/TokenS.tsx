import React, { useEffect, useState } from 'react';

type User = {
  // Define your user model here
  id?: number;
  name?: string;
  email?: string;
};

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

const TokenS: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem(TOKEN_KEY);
    const storedUser = sessionStorage.getItem(USER_KEY);
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const saveToken = (token: string) => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
    console.log("save token");
  };

  const getToken = (): string | null => {
    const token = sessionStorage.getItem(TOKEN_KEY);
    console.log("get token");
    return token!= null? token : null;
  };

  const saveUser = (user: User) => {
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    console.log("save user");
  };

  const getUser = (): User | null => {
    const userString = sessionStorage.getItem(USER_KEY);
    if (userString!= null) {
      return JSON.parse(userString);
      console.log("get user");
    }
    return null;
  };

  const signOut = () => {
    sessionStorage.clear();
    setToken(null);
    setUser(null);
  };

  return (
    <div>
      {/* Render UI elements or use these functions as needed */}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default TokenS;