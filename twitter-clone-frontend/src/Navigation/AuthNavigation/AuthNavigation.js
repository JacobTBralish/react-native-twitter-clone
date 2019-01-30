import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../../screens/Login";
import RegisterScreen from "../../screens/Register";
import InitializingScreen from "../../screens/Initializing";

export default (AuthContainer = createAppContainer(
  createStackNavigator(
    {
      Initializing: {
        screen: InitializingScreen
      },
      Login: {
        screen: LoginScreen
      },
      Register: {
        screen: RegisterScreen
      }
    },
    {
      initialRoundteName: "Initializing",
      headerMode: "none",
      navigationOptions: {
        visable: false
      }
    }
  )
));
