import axios from "axios";

export const findAll = async () => {
  try {
    const response = await axios.get("http://localhost:8080/users");
    return response.data;
  } catch (error) {
    console.log(error);
  }

  return [];
};
