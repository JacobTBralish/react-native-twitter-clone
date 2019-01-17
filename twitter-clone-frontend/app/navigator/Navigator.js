import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import NotificationScreen from "../screens/Notifications";
import MessagesScreen from "../screens/Messages";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

HomeStack.navigationOptions = {
  title: "Home",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="Home" />
};

const HomeContainer = createAppContainer(HomeStack);

const SearchStack = createStackNavigator({
  Search: {
    screen: SearchScreen
  }
});

SearchStack.navigationOptions = {
  title: "Search",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="search" />
};

const SearchContainer = createAppContainer(SearchStack);

const NotificationsStack = createStackNavigator({
  Notifications: {
    screen: NotificationScreen
  }
});

SearchStack.navigationOptions = {
  title: "Notifications",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="notifications" />
  )
};

const NotificationsContainer = createAppContainer(NotificationsStack);

const MessagesStack = createStackNavigator({
  Notifications: {
    screen: MessagesScreen
  }
});

MessagesStack.navigationOptions = {
  title: "Messages",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="Message" />
};

const MessagesContainer = createAppContainer(MessagesStack);

const TabContainer = createBottomTabNavigator({
  Home: { screen: HomeContainer },
  Search: { screen: SearchContainer },
  Notifications: { screen: NotificationsContainer },
  Messages: { screen: MessagesContainer }
});

export default createAppContainer(TabContainer);
