import { createContext, useContext, useState } from "react";

type userDatas = {
  token: string;
  email: string;
};

type AuthenticationType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  userInfos: userDatas[];
  setUserInfos: React.Dispatch<React.SetStateAction<never[]>>;
};

const AuthenticationContext = createContext<AuthenticationType | null>(null);

export function AuthenticationProvider({
  children,
}: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userInfos, setUserInfos] = useState([]);
  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userInfos, setUserInfos }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthenticationContext() {
  const value = useContext(AuthenticationContext);
  if (value === null) {
    throw new Error("useContext has to be used in an AuthenticationProvider");
  }

  return value;
}
