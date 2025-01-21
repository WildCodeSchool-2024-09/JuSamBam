import LoginForm from "../components/LoginForm";
import "./LoginPage.css";
// import { useNavigate } from "react-router-dom";

type LoginDatas = {
  email: string;
  password: string;
};

function LoginPage() {
  // const navigate = useNavigate();

  const defaultLoginDatas: LoginDatas = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h1>Se connecter</h1>
      <LoginForm
        defaultValue={defaultLoginDatas}
        submitted={(userDatas) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userDatas),
          }).then((res) => {
            if (res.status === 200) {
              alert("Connexion réussie !");
              // navigate("/");
            } else {
              alert("Email et/ou mot de passe incorrect");
            }
          });
        }}
      >
        Play
      </LoginForm>
    </div>
  );
}

export default LoginPage;
