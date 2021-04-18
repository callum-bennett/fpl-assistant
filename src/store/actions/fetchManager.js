import apiClient from "../../api/client";
import { FETCH_MANAGER } from "./types";
const { REACT_APP_MANAGER_ID } = process.env;

const fetchManager = () => async (dispatch) => {
  try {
    const res = await apiClient.get(`/entry/${REACT_APP_MANAGER_ID}/`);

    if (res.data) {
      dispatch({
        type: FETCH_MANAGER,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export default fetchManager;
