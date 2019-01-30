import {
  createDrawerNavigator,
  TabNavigator,
  createAppContainer
} from "react-navigation";
import { TouchableOpacity } from "react-native";
import ProfileScreen from "../../screens/Profile";

export const DrawerNav = createDrawerNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      drawerLabel: "Profile"
    }
  }
});

export default DrawerNav;
