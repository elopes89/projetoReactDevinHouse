// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { News } from "../Rotas/News";
import { Games } from "../Rotas/Games";
import { OneGame } from "../Rotas/OneGame";

const Home = () => {
  const navigate1 = useNavigate();

  return (
    <div
      style={{
        margin: "30px 50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ paddingBottom: "5px", color: "#727272" }}>DEVinMMO</h2>
      <button onClick={()=> navigate1("latest")}>NOTÍCIAS</button>

     
      <Games />
    </div>
  );
};

const Exemplo = () => {
 

  const navigate = useNavigate();

  return (
    <div
      // style={{
      //   margin: "30px 50px",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   flexDirection: "column",
      // }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{ padding: "5px", marginRight: "10px", cursor: "pointer" }}
      >
        JOGOS
      </button>
      <News />
      <div style={{ width: "200px" }}>
        {/* <h2
          style={{ paddingBottom: "5px", color: "#727272" }}
        >{`Exemplo: ${idExemplo}`}</h2> */}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* <button onClick={() => navigate('/')} style={{ padding: '5px', cursor: 'pointer' }}>
            Home
          </button> */}
        </div>
      </div>
    </div>
  );
};

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="latest" element={<Exemplo />} />
    <Route path="jogoExemplo/:id" element={<OneGame/>} />
  </Routes>
);

