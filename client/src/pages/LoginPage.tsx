import type React from "react";
import LoginForm from "../components/LoginForm";
import "./LoginPage.css";

type LoginDatas = {
  username: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const handleLoginSubmit = async (_users: LoginDatas) => {
    // try {
    //   const response = await fetch(`${import.meta.env.VITA_API_URL}/api/users`, {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(users),
    //   });
    //   if (response.ok) {
    //     const data = await response.json();
    //     console.info("Réponse API:", data);
    //   } else {
    //     alert("Erreur de connexion. Vérifiez vos identifiants.");
    //   }
    // } catch (error) {
    //   console.error("Erreur:", error);
    //   alert("Erreur de connexion au serveur.");
    // }
  };

  const defaultLoginDatas: LoginDatas = {
    username: "",
    password: "",
  };

  return (
    <div>
      <h1>Ce connecter</h1>
      <LoginForm defaultValue={defaultLoginDatas} submitted={handleLoginSubmit}>
        Play
      </LoginForm>
    </div>
  );
};

export default LoginPage;
