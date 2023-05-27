import { useEffect, useState } from "react";



export default function BuscandoDados() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/toDos"
      );
      const resultadoFinal = await resultado.json();
      return resultadoFinal;
    }

    buscarDados().then((res) => setTarefas(res));
  }, []);

  return (
    <div>
      <h1>Buscando dados</h1>
      <ol>
        {tarefas.map((tarefas) => {
          return <li key={tarefas.id}>{tarefas.title}</li>;
        })}
      </ol>
    </div>
  );
}
