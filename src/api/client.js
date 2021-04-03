import axios from "axios";

const { REACT_APP_CORS_ANYWHERE } = process.env;
const FPL_API_ROOT = "https://fantasy.premierleague.com/api/bootstrap-static";

const apiClient = axios.create({
  baseURL: `${REACT_APP_CORS_ANYWHERE}/${FPL_API_ROOT}`,
  timeout: 5000,
});

apiClient.interceptors.request.use((req) => {
  req.headers.common["X-Requested-With"] = "XMLHttpRequest";

  return req;
});

export default apiClient;
