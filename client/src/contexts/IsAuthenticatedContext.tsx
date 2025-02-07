import { createContext, useContext, useEffect, useState } from "react";

type IsAuthenticatedType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  userId: number | null;
  setUserId: React.Dispatch<React.SetStateAction<number | null>>;
};

const IsAuthenticatedContext = createContext<IsAuthenticatedType | null>(null);

export const IsAuthenticatedProvider = ({
  children,
}: { children: React.ReactNode }) => {
  // Ce context vérifie, à chaque redémarrage de l'application, s'il y a un utilisateur authentifié et récupère son ID

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/auth/check`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          setIsAuthenticated(true);
          return res.json();
        }
      })
      .then((data) => setUserId(data.id))
      .catch(() => setIsAuthenticated(false));
  }, []);

  return (
    <IsAuthenticatedContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userId, setUserId }}
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
