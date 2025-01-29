import "./SubscriptionForm.css";

type SubscriptionDatas = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface SubsriptionFormProps {
  children: React.ReactNode;
  defaultValue: SubscriptionDatas;
  submitted: (subscription: SubscriptionDatas) => void;
}

function SubscriptionForm({
  children,
  defaultValue,
  submitted,
}: SubsriptionFormProps) {
  return (
    <fieldset id="subscription-fieldset">
      <h1 id="subs">S'inscrire</h1>
      <form
        id="subscription-form"
        onSubmit={(event) => {
          event.preventDefault();

          const subscriptionDatas = new FormData(event.currentTarget);
          const firstname = subscriptionDatas.get("firstname") as string;
          const lastname = subscriptionDatas.get("password") as string;
          const email = subscriptionDatas.get("email") as string;
          const password = subscriptionDatas.get("password") as string;
          const confirmPassword = subscriptionDatas.get(
            "confirm-password",
          ) as string;
          submitted({
            firstname,
            lastname,
            email,
            password,
            confirmPassword,
          });
        }}
      >
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          className="subscription-field"
          name="firstname"
          defaultValue={defaultValue.firstname}
        />
        <label htmlFor="lastname">Nom</label>
        <input
          type="text"
          className="subscription-field"
          name="lastname"
          defaultValue={defaultValue.lastname}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="subscription-field"
          name="email"
          defaultValue={defaultValue.email}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          className="subscription-field"
          name="password"
          defaultValue={defaultValue.password}
        />
        <label htmlFor="password">Confirmer le mot de passe</label>
        <input
          type="password"
          className="subscription-field"
          name="confirm-password"
          defaultValue={defaultValue.confirmPassword}
        />
        <button id="pixel-subs" type="submit">
          {children}
        </button>
      </form>
    </fieldset>
  );
}

export default SubscriptionForm;
