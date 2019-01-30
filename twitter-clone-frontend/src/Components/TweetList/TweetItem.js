import React from "react";
import { Text, Image, View } from "react-native";

const TweetItem = ({ item }) => {
  const { tweet, iamge, comments, likeCount, _id } = item;
  return (
    <View key={_id}>
      <View>
        <Text>{tweet}</Text>
        {iamge ? <Image /> : null}
        <View>
          <Text>{comments}</Text>
          <Text>{likeCount}</Text>
        </View>
      </View>
    </View>
  );
};

export default TweetItem;
