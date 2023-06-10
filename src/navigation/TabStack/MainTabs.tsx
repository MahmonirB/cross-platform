import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ExploreStackScreen,
  SettingsStackScreen,
  BookCategoryStackScreen,
} from './MainTabStack';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import CPContext from '@app/context';

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  const { t } = useTranslation();
  const data = React.useContext(CPContext);

  const renderHeader = (navigation: any) => (
    <TouchableOpacity
      style={{ marginHorizontal: 24 }}
      onPress={() => navigation.navigate('Contact')}>
      <Image
        source={data?.image as ImageSourcePropType}
        style={{ width: 50, height: 50 }}
      />
    </TouchableOpacity>
  );

  const renderContactHeader = (navigation: any) => (
    <TouchableOpacity
      style={{ marginHorizontal: 24 }}
      onPress={() => navigation.navigate('Contact')}>
      <Icon name="mail" size={24} />
    </TouchableOpacity>
  );

  const renderTabIcon = React.useCallback(
    (icon: string) => <Icon name={icon} size={24} />,
    [],
  );

  return (
    <Tabs.Navigator initialRouteName="Main Page">
      <Tabs.Screen
        name="Main Page"
        component={ExploreStackScreen}
        options={({ navigation }) => ({
          title: `${t('mainPage')}`,
          tabBarLabel: '',
          tabBarIcon: () => renderTabIcon('home'),
          headerRight: () => renderHeader(navigation),
        })}
      />
      <Tabs.Screen
        name="Book Categories"
        component={BookCategoryStackScreen}
        options={({ navigation }) => ({
          title: `${t('bookCategories')}`,
          tabBarLabel: '',
          tabBarIcon: () => renderTabIcon('book'),
          headerRight: () => renderHeader(navigation),
        })}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={({ navigation }) => ({
          title: `${t('settings')}`,
          tabBarLabel: '',
          tabBarIcon: () => renderTabIcon('setting'),
          headerRight: () => renderContactHeader(navigation),
        })}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
