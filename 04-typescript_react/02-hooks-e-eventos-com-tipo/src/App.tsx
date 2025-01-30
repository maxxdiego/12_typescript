import "./App.css";
import Counter from "./components/Counter";
import Greetings from "./components/Greetings";
import TextInput from "./components/TextInput";

function App() {
  return (
    <>
      <h1>React com TS</h1>
      {/* 1 - Componente funcional com TS */}
      <Greetings name="Diego" />
      {/* 2 - Hooks com tipo */}
      <Counter />
      {/* 3 - Manipulação de eventos com tipos */}
      <TextInput />
    </>
  );
}

export default App;
