import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

const MySwal = withReactContent(Swal);

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  MySwal.fire({
    title: <p>Realizando pago</p>,
    didOpen: () => {
      MySwal.showLoading();
    },
    timer: 2000,
  }).then(() => {
    MySwal.fire({
      title: <p>Pago realizado correctamente.!</p>,
      icon: "success",
    });
    return dispatch({ type: FETCH_USER, payload: res.data });
  });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const sendMail = await MySwal.fire({
    title: "¿Enviar correo?",
    icon: "question",
    showCancelButton: true,
  });
  if (sendMail.isConfirmed) {
    const res = await axios.post("/api/surveys", values);
    MySwal.fire({
      title: "Enviando encuesta y redireccionando a tus encuestas",
      icon: "info",
      didOpen: () => {
        MySwal.showLoading();
      },
      timer: 2000,
    }).then(() => {
      history.push("/surveys");

      return dispatch({ type: FETCH_USER, payload: res.data });
    });
  }
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
export const deleteSurvey = (surveyId) => async (dispatch) => {
  const deleteUser = await MySwal.fire({
    title: "Eliminar Encuesta",
    inputLabel: "¿Seguro que quieres eliminar esta encuesta?",
    icon: "question",
    showCancelButton: true,
  });
  if (deleteUser.isConfirmed) {
    const res = await axios.delete("/api/surveys/delete/" + surveyId);
    MySwal.fire({
      title: "Eliminando encuesta",
      icon: "info",
      didOpen: () => {
        MySwal.showLoading();
      },
      timer: 2000,
    }).then(() => {
      return dispatch({ type: FETCH_SURVEYS, payload: res.data });
    });
  }
};
