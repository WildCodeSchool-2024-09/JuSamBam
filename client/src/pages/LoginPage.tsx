import LoginForm from "../components/LoginForm";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

type LoginDatas = {
  username: string;
  password: string;
};

function LoginPage() {
  const navigate = useNavigate();

  const defaultLoginDatas: LoginDatas = {
    username: "",
    password: "",
  };

  return (
    <div>
      <h1>Se connecter</h1>
      <LoginForm
        defaultValue={defaultLoginDatas}
        submitted={(userDatas) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userDatas),
          }).then((res) => {
            if (res.status === 200) {
              navigate("/");
            } else {
              alert("Email ou mot de passe incorrect");
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
