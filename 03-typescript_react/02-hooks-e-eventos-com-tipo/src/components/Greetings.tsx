type GreetingsProps = {
    name: string;
}

const Greetings = ({ name }: GreetingsProps) => {
  return (
    <div>Olá, {name}</div>
  )
}

export default Greetings