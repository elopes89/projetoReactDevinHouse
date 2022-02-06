import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../services/game-service";

import { Formulario } from "../components/Formulario/Formulario";

export const OneGame = () => {
  const { id } = useParams();

  const [lista, setLista] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      const oneGame = await fetchApi("game?id=" + id);
      console.log(oneGame);

      setLista(oneGame);
    };
    getApi();
  }, []);

  return (
    <>
      <div>
        <Formulario />
        <h1>{lista.title}</h1>
        <p>GÊNERO: {lista.genre}</p>
        <p>PLATAFORMA: {lista.platform}</p>
        <p>LANÇAMENTO: {lista.release_date}</p>
        <div className="screen">
          <h2>Screenshots</h2>
          {lista.screenshots?.map((item) => (
            <img src={item.image} alt={OneGame.title} />
          ))}
        </div>
      </div>
    </>
  );
};
//ex: professora
// game.screenshots.map(item => <img src={item.image}/>)

{
  /* //  Object.keys(pessoas).forEach(function(item)
//   console.log(item + " - " + pessoas[item]); */
}
