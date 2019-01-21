import { createSwitchNavigator, createAppContainer } from "react-navigation";

import TabNavigator from "./Navigator";
import AuthContainer from "../AuthNavigation/AuthNavigation";

const MainSwitch = createSwitchNavigator({
  Auth: AuthContainer,
  Main: TabNavigator
});

export default createAppContainer(MainSwitch);
