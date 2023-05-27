import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);
  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Contador</h1>
      <h3>O valor do contador é: {contador}</h3>
      {contador > 9 ? (
        <>
          <h1>Valor muito grande, diminua</h1>
        </>
      ) : null}
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
}
