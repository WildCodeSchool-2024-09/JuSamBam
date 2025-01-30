import { createContext, useContext, useEffect, useState } from "react";

type IsAuthenticatedType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const IsAuthenticatedContext = createContext<IsAuthenticatedType | null>(null);

export const IsAuthenticatedProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/auth/check`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          setIsAuthenticated(true);
        }
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  return (
    <IsAuthenticatedContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </IsAuthenticatedContext.Provider>
  );
};

export function useIsAuthenticatedContext() {
  const value = useContext(IsAuthenticatedContext);

  if (value === null) {
    throw new Error(
      "useIsAuthenticatedContext must be used within an IsAuthenticatedProvider",
    );
  }

  return value;
}
