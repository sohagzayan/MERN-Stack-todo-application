import { startFetching, successFetching, getError } from "../type/type";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import getTaskReducer from "./../reducer/getTaskReducer";
import cookie from "js-cookie";

const getTask = (query) => {
  return async (dispatch) => {
    try {
      console.log("query", query);
      const token = cookie.get("AuthToken");
      dispatch({ type: startFetching });
      // http://localhost:3000/api/getactiveuserdetails/62dbda0101ad3ec1698cee17
      const { data } = await axios.get(`/api/task/?statusType=${query}`, {
        headers: {
          Authorization: `Bearar ${token}`,
        },
      });
      console.log("data", data);
      dispatch({
        type: successFetching,
        payload: { data: data, query: "New" },
      });
    } catch (error) {
      dispatch({ type: getError, payload: { error: error.message } });
    }
  };
};

export default getTask;
