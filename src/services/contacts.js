import { getData, getParamData } from "./axios";

const getContacts = async () => {
  return await getData("users");
};
const getContactById = async (id) => {
  return await getParamData("users", { id });
};
export { getContacts, getContactById };
