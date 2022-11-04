import axios from "axios";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://coffeeandcode.onrender.com/api/user/login",
      { email, password },
      config
    );

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAILURE",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//logout

export const logout = () => async (dispatch) => {
  dispatch({ type: "USER_LOGOUT" });
};

//register

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_REGISTER_REQUEST",
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post("https://coffeeandcode.onrender.com/api/user/create", { email, password, name }, config);

    dispatch({
      type: "USER_REGISTER_SUCCESS",
    });
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAILURE",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
