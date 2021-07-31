import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { ThemeProvider as StyledProvider } from "styled-components";

import { lightTheme, darkTheme } from "./configs/theme";
import { useSelector } from "./hooks/useRedux";
import { selectIsDark } from "./slices/appSlice";
import TabStack from "./stacks/TabStack";
import { navigationRef, isReadyRef } from "./nav";
import { store } from "./store";

enableScreens();
const AppStack = createNativeStackNavigator<TAppStackParams>();

const Navigation = () => {
  const isDark = useSelector(selectIsDark);
  let theme = isDark ? darkTheme : lightTheme;

  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  const handleReady = React.useCallback(() => {
    isReadyRef.current = true;
  }, []);

  return (
    <StyledProvider theme={theme}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar style={isDark ? "light" : "dark"} />
          <NavigationContainer
            ref={navigationRef}
            theme={theme}
            onReady={handleReady}
          >
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
              <AppStack.Screen name="TabStack" component={TabStack} />
            </AppStack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </StyledProvider>
  );
};

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
