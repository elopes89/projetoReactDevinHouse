import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";

export const Formulario = () => {
  const { id } = useParams();

  const KEY_LOCALSTORAGE = "COMENTARIOS" + id;
  const idGame = "1234";
  const [comentarioJogo, setComentarioJogo] = useState({});

  //tentando fazer o contador
  const [numero, setNumero] = useState(0);
  function aumentar() {
    setNumero(numero + 1);
  }

  useEffect(() => {
    const comentariosStorage = localStorage.getItem(KEY_LOCALSTORAGE);
    if (comentariosStorage) {
      const items = JSON.parse(comentariosStorage);
      const filter = items.find((item) => item.id === idGame);
      setComentarioJogo(filter);
    }
  }, [idGame]);

  const handleSubmit = (values, { setSubmitting }) => {
    const comentariosStorage = localStorage.getItem(KEY_LOCALSTORAGE);

    const comentario = {
      id: Math.random().toString(16).slice(2),
      ...values,
    };

    const comentariosAtual = comentarioJogo?.comentarios
      ? [...comentarioJogo?.comentarios]
      : [];
    const novaListaComentarios = [
      { id: idGame, comentarios: [...comentariosAtual, comentario] },
    ];

    if (comentariosStorage) {
      const itemsLocalStorage = JSON.parse(comentariosStorage);
      const listaTodosComentariosSemJogoAtual = itemsLocalStorage.filter(
        (item) => item.id !== idGame
      );

      localStorage.setItem(
        "COMENTARIOS" + id,
        JSON.stringify([
          ...listaTodosComentariosSemJogoAtual,
          ...novaListaComentarios,
        ])
      );
    } else {
      localStorage.setItem(
        "COMENTARIOS" + id,
        JSON.stringify(novaListaComentarios)
      );
    }

    setComentarioJogo(...novaListaComentarios);
    setSubmitting(false);
  };

  const schema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().required("Campo obrigatório").email("E-mail inválido"),
    comentario: Yup.string().required("Campo obrigatório"),
  });

  const initialValues = {
    nome: "",
    email: "",
    comentario: "",
  };

  return (
    <>
      <h1>Comentários</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ isSubmitting, resetForm, isValid }) => (
          <Form>
            <Field name="nome" placeholder="Nome" />
            <ErrorMessage
              name="nome"
              style={{ color: "red" }}
              component="span"
            />

            <Field name="email" placeholder="E-mail" />
            <ErrorMessage
              name="email"
              style={{ color: "red" }}
              component="span"
            />

            <Field name="comentario" placeholder="Comentário" />
            <ErrorMessage
              name="comentario"
              style={{ color: "red" }}
              component="span"
            />

            <button type="submit" disabled={isSubmitting || !isValid}>
              Enviar
            </button>

            <button type="button" disabled={isSubmitting} onClick={resetForm}>
              Limpar
            </button>
          </Form>
        )}
      </Formik>

      {comentarioJogo?.comentarios?.map((item) => (
        <>
          <p>NOME: {item.nome}</p>
          <p>{item.comentario}</p>
        </>
      ))}
      
      {/* <p>{numero}</p>
      <button onClick={aumentar}>like</button>
      <button>dislike</button> */}
    </>
  );
};

//  {comentarioJogo?.comentarios?.map((item) => (
//           <>
//         <p>NOME: {item.nome}</p>
//         <p>{item.comentario}</p>
//         <p>{item.likes}</p>
//         <button onClick={()=> item.likes + 1}>like</button>
//         <button>dislike</button>

//         </>
//       ))}
