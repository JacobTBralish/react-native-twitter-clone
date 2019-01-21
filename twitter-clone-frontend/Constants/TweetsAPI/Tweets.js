import axios from "axios";

export const getAllTweets = async () => {
  // you need a try/catch as the await function can throw
  try {
    let response = await axios.get(`http://10.0.2.2:4003/api/tweet`);
    //   console.log("response: ", response);
    return response.data;
  } catch (error) {
    console.warn(error);
    return [];
  }
};

export const postTweetAPI = async () => {
  try {
    let response = await axios.post(`http://10.0.2.2:4003/api/tweet`);
    return response.data;
  } catch (error) {
    console.warn("error: ", error);
    return "";
  }
};
