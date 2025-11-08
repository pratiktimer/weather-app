import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Canvas, Line, LinearGradient, vec } from "@shopify/react-native-skia";
import { ForecastType } from "../../../models/Weather";
interface ForecastControlProps {
  onPress: (forecastType: ForecastType) => void;
}
const ForecastControl = ({ onPress }: ForecastControlProps) => {
  const [textWidth, setTextWidth] = useState(0);
  const onTextLayout = (event: LayoutChangeEvent) => {
    setTextWidth(event.nativeEvent.layout.width);
  };
  const spacingX = 32;
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: spacingX,
          width: "100%",
        }}
      >
        <TouchableOpacity onPress={() => onPress(ForecastType.Hourly)}>
          <Text onLayout={onTextLayout} style={styles.forecastText}>
            Hourly Forecast
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress(ForecastType.Weekly)}>
          <Text style={styles.forecastText}>Weekly Forecast</Text>
        </TouchableOpacity>
      </View>
      <Canvas style={{ height: 3, width: textWidth, marginLeft: 32 }}>
        <Line p1={vec(0, 0)} p2={vec(textWidth, 0)} strokeWidth={3}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(textWidth, 0)}
            colors={["rgba(255,255,255,0.6)", "rgba(255,255,255,0.1)"]}
          ></LinearGradient>
        </Line>
      </Canvas>
    </>
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
