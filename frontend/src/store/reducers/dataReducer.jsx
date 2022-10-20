export const jobsListReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case "JOBS_LIST_REQUEST": {
      return { loading: true, ...state };
    }
    case "JOBS_LIST_SUCCESS": {
      return { loading: false, jobs: action.payload };
    }
    case "JOBS_LIST_FAILURE": {
      return { loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

//post job

export const createJobReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_JOB_REQUEST": {
      return { loading: true };
    }
    case "CREATE_JOB_SUCCESS": {
      return { loading: false, success: true };
    }
    case "CREATE_JOB_FAILURE": {
      return { loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

//delete jobs

export const jobDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case "JOB_DELETE_REQUEST": {
      return { loading: true };
    }
    case "JOB_DELETE_SUCCESS": {
      return { loading: false, success: true };
    }
    case "JOB_DELETE_FAILURE": {
      return { loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
