import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import ForecastSheetBackground from "./ForecastSheetBackground";
import useApplicationDimensions from "../../hooks/useApplicationDimensions";
import ForecastControl from "./elements/ForecastControl";
import Seperator from "./elements/Seperator";
import { hourly, weekly } from "../../data/ForecastData";
import ForecastScroll from "../forecast/ForecastScroll";
import { ForecastType } from "../../models/Weather";
import AirQualityWidget from "../forecast/widgets/AirQualityWidget";
import UvIndexWidget from "../forecast/widgets/UvIndexWidget";
import WindWidget from "../forecast/widgets/WindWidget";
import SunriseWidget from "../forecast/widgets/SunriseWidget";
import RainFallWidget from "../forecast/widgets/RainFallWidget";
import FeelsLikeWidget from "../forecast/widgets/FeelsLikeWidget";
import HumidityWidget from "../forecast/widgets/HumidityWidget";
import VisibilityWidget from "../forecast/widgets/VisibilityWidget";
import PressureWidget from "../forecast/widgets/PressureWidget";
import { useAnimatedReaction, useSharedValue } from "react-native-reanimated";
import { useForecastSheetPosition } from "../../context/ForecastSheetContext";

const ForecastSheet = () => {
  const { width, height } = useApplicationDimensions();
  const smalLWidgetSize = width / 2 - 20;
  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const secondSnapPoint = height * (parseFloat(snapPoints[1]) / 100);
  const minY = height - secondSnapPoint;
  const maxY = height - firstSnapPoint;
  const cornRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;
  const [selectedForecastType, setSelectedForecastType] =
    useState<ForecastType>(ForecastType.Hourly);

  const currentPosition = useSharedValue(0);
  const animatedPosition = useForecastSheetPosition();
  const normalizePosition = (position: number) => {
    'worklet';
    return ((position - maxY) / (maxY - minY)) * -1;
  }
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useAnimatedReaction(() => {
    return currentPosition.value
  }, (cv) => {
    animatedPosition.value = (normalizePosition(cv));
  })

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      animatedPosition={currentPosition}
      animateOnMount={false}
      handleIndicatorStyle={{
        width: 48,
        height: 6,
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      backgroundComponent={() => (
        <ForecastSheetBackground
          width={width}
          height={firstSnapPoint}
          cornerRadius={cornRadius}
        />
      )}
    >
      <BottomSheetScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <ForecastControl onPress={(type) => setSelectedForecastType(type)} />
        <Seperator width={width} height={3} />
        <ForecastScroll
          forecasts={selectedForecastType === ForecastType.Hourly ? hourly : weekly}
          capsuleWidth={capsuleWidth}
          capsuleHeight={capsuleHeight}
          capsuleRadius={capsuleRadius}
        />
        <View style={{ paddingTop: 30 }}>
          <AirQualityWidget width={width - 30} height={150} />
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", padding: 15, gap: 10 }}>
            <UvIndexWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <WindWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <SunriseWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <RainFallWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <FeelsLikeWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <HumidityWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <VisibilityWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <PressureWidget width={smalLWidgetSize} height={smalLWidgetSize} />
          </View>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});

export default ForecastSheet;
