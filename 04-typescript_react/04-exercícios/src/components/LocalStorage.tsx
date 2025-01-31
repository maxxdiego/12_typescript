import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorage: React.FC = () => {
  // Usando o Hook useLocalStorage
  const [nome, setNome] = useLocalStorage("nome", "");

  return (
    <>
      {/* Exercício 3: useLocalStorage Hook */}
      <div>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <p>O nome armazenado é: {nome}</p>
      </div>
    </>
  );
};

export default LocalStorage;
