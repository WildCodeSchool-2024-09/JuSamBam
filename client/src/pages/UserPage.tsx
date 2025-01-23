import { useEffect, useState } from "react";
// import { } from "../context/UserContext";
import UserForm from "../components/UserForm";
const API_URL = import.meta.env.VITE_API_URL;

interface UserData {
  id: number;
  name: string;
  firstName: string;
  email: string;
  image: string;
}

const UserPage = () => {
  // const { token } = useUser();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    fetchUserData(setUserData, setLoading);
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = async (updatedUserData: UserData) => {
    const response = await fetch(`${API_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(updatedUserData),
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(
        data.message || "Erreur lors de la soumission des données",
      );
    }
    setUserData(updatedUserData);
    setIsEditing(false);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading &&
        !error &&
        userData &&
        (isEditing ? (
          <UserForm userData={userData} setUserData={handleSubmit} />
        ) : (
          <div>
            <h2>Profil de l'utilisateur</h2>
            <p>Nom : {userData.name}</p>
            <p>Prénom : {userData.firstName}</p>
            <p>Email : {userData.email}</p>
            <img src="src\assets\images\avatar.png" alt="Avatar" />
            <button type="button" onClick={handleEdit}>
              Modifier les infos
            </button>
          </div>
        ))}
    </div>
  );
};

const fetchUserData = async (
  setUserData: (data: UserData) => void,
  setLoading: (loading: boolean) => void,
) => {
  setLoading(true);
  const response = await fetch(`${API_URL}/api/users`, {
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  });
  if (response.ok) {
    const data = await response.json();
    setUserData(data);
  } else {
    const data = await response.json();
    throw new Error(data.message || "Erreur lors du chargement des données");
  }
  setLoading(false);
};

export default UserPage;
