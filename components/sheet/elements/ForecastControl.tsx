import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ForecastControl = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        width: "100%",
      }}
    >
      <Text style={styles.forecastText}>Hourly Forecast</Text>
      <Text style={styles.forecastText}>Weekly Forecast</Text>
    </View>
  );
};

export default ForecastControl;

const styles = StyleSheet.create({
  forecastText: {
    fontFamily: "SF-Semibold",
    color: "rgba(235,235,245,0.6)",
    fontSize: 15,
    lineHeight: 20,
  },
});
