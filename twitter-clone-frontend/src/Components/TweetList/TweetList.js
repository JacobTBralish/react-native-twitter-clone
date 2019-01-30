import React from "react";
import { FlatList } from "react-native";
import TweetItem from "./TweetItem";

const TweetList = props => {
  return (
    <FlatList
      data={props.data}
      renderItem={props => <TweetItem key={props._id} {...props} />}
    />
  );
};

export default TweetList;
