import { TOGGLE_MODAL, POST_TWEET } from "./actionTypes";
import { postTweetAPI } from "../../../Constants/TweetsAPI/Tweets";
import axios from "axios";

export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL
  };
};

export const postTweet = tweet => {
  let response = fetch(`http://10.0.2.2:4003/api/tweet`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ tweet })
  })
    .then(response => {
      response.json();
    })
    .catch(error => {
      console.log(error);
    });

  // axios
  //   .post(
  //     `http://10.0.2.2:4003/api/tweet`,
  //     { tweet },
  //     {
  //       headers: {
  //         "Content-Type": "application/json;charset=UTF-8",
  //         "Access-Control-Allow-Origin": "*"
  //       }
  //     }
  //   )
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  return {
    type: POST_TWEET,
    payload: response
  };
};
