import { useEffect, useState } from "react";
// import { } from "../context/UserContext";
import UserForm from "../components/UserForm";
import "../pages/userPage.css";
import { useNavigate, useParams } from "react-router-dom";
import AddImageForm from "../components/AddImageForm";
const API_URL = import.meta.env.VITE_API_URL;

interface UserData {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  img_profile?: string;
  infos?: string;
}

const UserPage = () => {
  // const { token } = useUser();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();
  // Récupération des données de l'utilisateurs grâce à son ID qui est récupéré soit lors du login, soit lors du chargement de l'application

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        setUserData(data);
      })
      .catch(() => {
        throw new Error("Une erreur est survenue");
      });
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (updatedUserData: UserData) => {
    fetch(`${API_URL}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUserData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(
              data.message || "Erreur lors de la soumission des données",
            );
          });
        }
        return updatedUserData;
      })
      .then((data) => {
        setUserData(data);
        setIsEditing(false);
      })
      .catch((error) => console.error(error));
  };

  // Affichage des données récupérées
  return (
    <div>
      {userData &&
        (isEditing ? (
          <UserForm userData={userData} setUserData={handleSubmit} />
        ) : (
          <div id="UserPage">
            <h2 id="profil-title">Profil de l'utilisateur</h2>
            <div id="user-card">
              <div id="avatar-container">
                {userData.img_profile ? (
                  <img
                    id="img-avatar"
                    src={`${API_URL}/assets/images/${userData.img_profile}`}
                    alt="Avatar"
                  />
                ) : (
                  <img
                    id="img-avatar"
                    src="/assets/images/avatar.png"
                    alt="Avatar"
                  />
                )}
              </div>
              <ul id="ul-card">
                <li>Nom : {userData.lastname}</li>
                <li>Prénom : {userData.firstname}</li>
                <li>Email : {userData.email}</li>
                {userData.infos && <li>Infos : {userData.infos}</li>}
              </ul>

              <button id="button-modif" type="button" onClick={handleEdit}>
                Modifier les infos
              </button>
              {userData.img_profile ? (
                ""
              ) : (
                <AddImageForm
                  submitted={(image) => {
                    fetch(`${API_URL}/api/users/${id}`, {
                      method: "put",
                      credentials: "include",
                      headers: {
                        enctype: "multipart/form-data",
                      },
                      body: image,
                    }).then((res) => {
                      if (res.status === 200) {
                        alert("Image ajoutée");
                        navigate("/user");
                      }
                    });
                  }}
                >
                  Submit
                </AddImageForm>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserPage;
