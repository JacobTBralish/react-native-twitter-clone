import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../../screens/Login";

export default (AuthContainer = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: LoginScreen
      }
    },
    {
      headerMode: "none",
      navigationOptions: {
        visable: false
      }
    }
  )
));
