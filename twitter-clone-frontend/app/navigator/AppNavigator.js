import { createSwitchNavigator, createAppContainer } from "react-navigation";

import TabNavigator from "./Navigator";

const MainSwitch = createSwitchNavigator({
  Main: TabNavigator
});

export default createAppContainer(MainSwitch);
