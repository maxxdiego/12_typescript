import { useState } from "react";

const FormularioLogin: React.FC = () => {
  const [email, setEmail] = useState<string>(""); // <string> opcional
  const [password, setPassword] = useState<string>(""); // <string> opcional

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Login efetuado! E-mail: ${email} Senha: ${password}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div>
          <input type="submit" value="Entrar" />
        </div>
      </form>
    </div>
  );
};

export default FormularioLogin;
