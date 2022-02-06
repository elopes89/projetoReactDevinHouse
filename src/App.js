import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";

// import { News, Games, OneGame } from "./Rotas/News";

function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>

    // <Games/>
    // <News/>
    // <OneGame/>
  );
}

export default App;
