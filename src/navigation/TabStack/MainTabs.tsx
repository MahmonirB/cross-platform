import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ExploreStackScreen,
  SettingsStackScreen,
  BookCategoryStackScreen,
} from './MainTabStack';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  const { t } = useTranslation();

  return (
    <Tabs.Navigator initialRouteName="Main Page">
      <Tabs.Screen
        name="Main Page"
        component={ExploreStackScreen}
        options={({ navigation }) => ({
          title: `${t('mainPage')}`,
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="home" size={24} />,
          headerRight: () => (
            <TouchableOpacity
              style={{ marginHorizontal: 24 }}
              onPress={() => navigation.navigate('Contact')}>
              <Icon name="mail" size={24} />
            </TouchableOpacity>
          ),
        })}
      />
      <Tabs.Screen
        name="Book Categories"
        component={BookCategoryStackScreen}
        options={{
          title: `${t('bookCategories')}`,
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="book" size={24} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          title: `${t('settings')}`,
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="setting" size={24} />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
