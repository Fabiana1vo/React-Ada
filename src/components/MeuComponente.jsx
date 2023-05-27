import { useState } from "react";
import styles from "../button.module.css";

export default function Contador() {
  const [contador, setContador] = useState(0);
  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div className="container">
      <h1>Contador</h1>
      <h3>O valor do contador é: {contador}</h3>
      {contador > 9 ? (
        <>
          <h1>Valor muito grande, diminua</h1>
        </>
      ) : null}
      <button className={styles.myButton} onClick={aumentar}>
        Aumentar
      </button>
    </div>
  );
}
