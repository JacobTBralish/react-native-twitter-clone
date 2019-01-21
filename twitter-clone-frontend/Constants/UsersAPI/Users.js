import axios from "axios";

export const getAllUsers = async () => {
  try {
    let response = await axios.get(`http://10.0.2.2:4003/api/user`);
    return response.data;
  } catch (error) {
    console.warn(error);
    return [];
  }
};
