import React from "react";
import { Image, View, Text } from "react-native";

import HandsomeDude from "../../Images/HandsomeDude.jpg";

const UserImage = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        width: "50%",
        height: "100%"
      }}
    >
      <Image
        source={HandsomeDude}
        style={{
          marginLeft: 15,
          marginRight: 15,
          width: 35,
          height: 35,
          borderRadius: 35
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{props.title}</Text>
    </View>
  );
};

export default UserImage;
