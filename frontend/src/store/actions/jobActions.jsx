import axios from "axios";

export const listJobs = () => async (dispatch) => {
  try {
    dispatch({ type: "JOBS_LIST_REQUEST" });
    const { data } = await axios.get("https://coffeeandcode.onrender.com/api/jobs");

    dispatch({ type: "JOBS_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "JOBS_LIST_FAILURE",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//post job

export const postingJob =
  (position, company, salary, batch, location, apply, image) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "CREATE_JOB_REQUEST",
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "https://coffeeandcode.onrender.com/api/jobs/post",
        { position, company, salary, batch, location, apply, image },
        config
      );

      dispatch({
        type: "CREATE_JOB_SUCCESS",
      });
    } catch (error) {
      dispatch({
        type: "CREATE_JOB_FAILURE",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//delete jobs

//delete product

export const deleteJob = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "JOB_DELETE_REQUEST" });

    await axios.delete(`https://coffeeandcode.onrender.com/api/jobs/${id}`);

    dispatch({ type: "JOB_DELETE_SUCCESS" });
  } catch (error) {
    dispatch({
      type: "JOB_DELETE_FAILURE",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
