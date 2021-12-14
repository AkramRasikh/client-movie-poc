import axios from "axios";

export const getMoviesAPI = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_GATEWAY_BASE_URL}/movies`
  );
  return data;
};
