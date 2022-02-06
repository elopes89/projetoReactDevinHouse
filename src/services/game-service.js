

export const fetchApi = async (props) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/${props}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_HOST,
        "x-rapidapi-key": process.env.REACT_APP_KEY,
      },
    });
    const listaGame = await response.json();
    return listaGame;
  } catch (erro) {
    console.error(erro.message);
  }
};


