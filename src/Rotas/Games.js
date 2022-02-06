import {useNavigate} from "react-router-dom";

import React, { useState, useEffect } from "react";
import { fetchApi } from "../services/game-service";

export const Games = () => {
  const [initialRepos, setInitialRepos] = useState([]);
  const [repos, setRepos] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    const getApi = async () => {
      const games = await fetchApi("games");
      // console.log(games);

      setInitialRepos(games);
      setRepos(games);
    };
    getApi();
  }, []);

  const handleChange = ({ target }) => {
    if (!target.value) {
      setRepos(initialRepos);
      return;
    }

    const filterRepos = repos.filter(({ title }) =>
      title.includes(target.value)
    );

    setRepos(filterRepos);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="BUSQUE UM JOGO"
      ></input>
      

      {repos.map((item) => (
        <>
          <p>{item.title} </p> <img src={item.thumbnail} alt={Games.title} />
          <p>{item.short_description}</p>
          <button onClick={()=> navigate("jogoExemplo/"+item.id)}>DETALHES</button>


         
        

        </>
      ))}
      {/* <Link to="jogoExemplo">VER DETALHES</Link> */}
    </>
  );
};

// export const Games = () => {
//     const [lista, setLista] = useState([]);

//     useEffect(() => {
//       const getApi = async () => {
//         const games = await fetchApi("games");
//         console.log(games);

//         setLista(games);
//       };
//       getApi();
//     }, []);
//     return (
//       <>
//         {<input placeholder="Digite sua busca"></input>}
//         {lista.map((item) => (
//           <>
//             <p>{item.title} </p> <img src={item.thumbnail} alt={Games.title} />
//             <p>{item.short_description}</p>
//           </>
//         ))}
//       </>
//     );
//   };
