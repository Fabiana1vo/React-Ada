import { useState,useEffect  } from "react";

const minhaista = [
  { id: "1", value: "Fruta" },
  { id: "2", value: "Legumes" },
  { id: "3", value: "Verdura" },
];

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [produtos, setProdutos] = useState(minhaista);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    if (pesquisa) {
      const novaLista = minhaista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase());
      });
      setProdutos(novaLista);
    } else {
      setProdutos(minhaista);
    }
  }, [pesquisa]);

  return (
    <div>
      <h1>Efeitos colaterais</h1>
      <input
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="pesquise aqui"
        type="text"
      />

      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        );
      })}
    </div>
  );
}
