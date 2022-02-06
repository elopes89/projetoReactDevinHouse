import { useEffect, useRef, useState } from 'react';
import { filtrarListaPorPagina, filtrarListaPorTermoDeBusca } from '../../helper/Games';
import { fetchGames } from '../../services/game-service';
import { GameContext } from './GameContext';

export const GameProvider = ({ children }) => {
  const [termoBusca, setTermoBusca] = useState('');
  const [gamesFiltrados, setGamesFiltrados] = useState([]);
  const [pagina, setPagina] = useState(1);
  const games = useRef([]);

  useEffect(() => {
    (async () => {
      const lista = await fetchGames();
      games.current = lista;
      setGamesFiltrados(filtrarListaPorPagina(games.current, pagina));
    })();
   
  }, []);

  useEffect(() => {
    setGamesFiltrados(filtrarListaPorTermoDeBusca(games.current, termoBusca));
  }, [termoBusca]);

  useEffect(() => {
    setGamesFiltrados(filtrarListaPorPagina(games.current, pagina));
  }, [pagina]);

  return (
    <GameContext.Provider value={{ setTermoBusca, games, gamesFiltrados, pagina, setPagina }}>
      {children}
    </GameContext.Provider>
  );
};
