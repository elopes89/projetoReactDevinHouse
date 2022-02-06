
import React, { useState, useEffect } from "react";
import { fetchApi } from "../services/game-service";


export const News = () => {
  const [initialRepos, setInitialRepos] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const news = await fetchApi("latestnews");
      // console.log(games);

      setInitialRepos(news);
      setRepos(news)
    };
    getApi();
  }, []);

  const handleChange = ({ target }) => {
    if (!target.value) {
      setRepos(initialRepos);
      return;
    }

    const filterRepos = repos.filter(({ title }) => title.includes(target.value)
    );

    setRepos(filterRepos);
  };
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="BUSQUE UMA NOTÍCIA"
      ></input>
      {repos.map((item) => ( 
        <>
          <p>{item.title} </p> <img src={item.thumbnail} alt={News.title} />
          <p>{item.short_description}</p>
          <button><a href={item.article_url} target="_blank">READ MORE</a></button>

        </>
      ))}
    </>
  );
};




// export const News = () => {
//   const [lista, setLista] = useState([]);

//   useEffect(() => {
//     const getApi = async () => {
//       const news = await fetchApi("latestnews");

//       setLista(news);
//     };
//     getApi();
//   }, []);
//   return (
//     <>
//       {<input placeholder="Digite sua busca"></input>}
//       {lista.map((item) => (
//         <>
//           <p>{item.title} </p> <img src={item.thumbnail} alt={News.title}/>
//           <p>{item.short_description}</p>{" "}
//         </>
//       ))}
//     </>
//   );
// }

