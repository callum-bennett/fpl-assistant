import apiClient from "../../api/client";
import { FETCH_ALL } from "./types";

const fetchAll = () => async (dispatch) => {
  try {
    const res = await apiClient.get("/");

    if (res.data) {
      dispatch({
        type: FETCH_ALL,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export default fetchAll;
