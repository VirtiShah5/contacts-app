import axios from "axios";
axios.defaults.baseURL = "https://reqres.in/api/";

async function getData(endpoint) {
  const response = await axios({
    method: "get",
    url: `${endpoint}`,
  });
  const result = response.data;
  return result;
}

async function getParamData(endpoint, params) {
  const response = await axios({
    method: "get",
    url: `${endpoint}`,
    params,
  });
  const result = response.data;
  return result;
}
export { getData, getParamData };
