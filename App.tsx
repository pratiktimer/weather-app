import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeBackground from "./components/HomeBackground";
import WeatherTabBar from "./components/tabbar/WeatherTabBar";
import WeatherInfo from "./components/section/WeatherInfo";
import { currentWeather } from "./data/CurrentWeather";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ForecastSheet from "./components/sheet/ForeCastSheet";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    "SF-Thin": require("./assets/fonts/SF-Pro-Display-Thin.otf"),
    "SF-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SF-Bold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  });
  const onLayoutRottView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider style={{ flex: 1 }} onLayout={onLayoutRottView}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <HomeBackground />
        <WeatherInfo weather={currentWeather} />
        <ForecastSheet />
        <WeatherTabBar />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
