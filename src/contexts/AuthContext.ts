//
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextProps {
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
  user: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    jobTitle: string | null;
    avatarUrl: string | null;
    bio: string | null;
    role: string;
  } | null;
  setUser: React.Dispatch<
    React.SetStateAction<{
      id: string;
      firstname: string;
      lastname: string;
      email: string;
      jobTitle: string | null;
      avatarUrl: string | null;
      bio: string | null;
      role: string;
    } | null>
  >;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const userInfo = localStorage.getItem("user");
    if (token) {
      setAccessToken(token);
    }
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
    } else {
      localStorage.removeItem("access_token");
    }
  }, [accessToken]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const value = {
    accessToken,
    setAccessToken,
    user,
    setUser,
  };

  if (loading) {
    return React.createElement("div", null, "Loading...");
  }

  return React.createElement(AuthContext.Provider, { value: value }, children);
};

export default AuthContext;
