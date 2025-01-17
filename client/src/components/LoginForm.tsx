type LoginDatas = {
  username: string;
  password: string;
};

interface LoginFormProps {
  children: React.ReactNode;
  defaultValue: LoginDatas;
  submitted: (login: LoginDatas) => void;
}

function LoginForm({ children, defaultValue, submitted }: LoginFormProps) {
  return (
    <>
      <form
        id="login-form"
        onSubmit={(event) => {
          event.preventDefault();

          const loginDatas = new FormData(event.currentTarget);
          const username = loginDatas.get("username") as string;
          const password = loginDatas.get("password") as string;

          submitted({
            username,
            password,
          });
        }}
      >
        <label htmlFor="username">Pseudo</label>
        <input
          type="text"
          className="login-field"
          name="username"
          defaultValue={defaultValue.username}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="text"
          className="login-field"
          name="password"
          defaultValue={defaultValue.password}
        />
        <button className="pixel" type="submit">
          {children}
        </button>
      </form>
    </>
  );
}

export default LoginForm;
