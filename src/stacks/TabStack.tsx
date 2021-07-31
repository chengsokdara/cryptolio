import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { useTranslation } from "react-i18next";

import locale from "src/configs/locale";
import HomeScreen from "src/screens/home/HomeScreen";
import PortfolioScreen from "src/screens/portfolio/PortfolioScreen";
import ProfileScreen from "src/screens/profile/ProfileScreen";

const Stack = createMaterialBottomTabNavigator<TTabStackParams>();

const TabStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: t(locale.screen.home),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-modern"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-arc" color={color} size={26} />
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default TabStack;
