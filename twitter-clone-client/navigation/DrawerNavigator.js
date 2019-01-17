import React from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator, DrawerNavigator } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen';
import { Icon } from 'expo';

const DrawerNav = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            drawerLabel: 'Profile',
            drawerIcon: () => <Icon name='user' size={17} />
        }
    },
    // Lists: ListsScreen,
    // Bookmarks: BookmarksScreen,
    // Moments: MomentsScreen,
    // Settings: SettingsScreen,
    // HelpCenter: HelpCenterScreen
})

export default DrawerNavigator({
    DrawerNav
  }
);