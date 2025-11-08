import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import ForecastSheetBackground from "./ForecastSheetBackground";
import useApplicationDimensions from "../../hooks/useApplicationDimensions";
import ForecastControl from "./elements/ForecastControl";
import Seperator from "./elements/Seperator";
import ForecastCapsule from "../forecast/ForecastCapsule";
import { weekly } from "../../data/ForecastData";
import ForecastScroll from "../forecast/ForecastScroll";

const ForecastSheet = () => {
  const { width, height } = useApplicationDimensions();
  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const cornRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
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
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
    >
      <BottomSheetView >
        <ForecastControl />
        <Seperator width={width} height={3} />
        <ForecastScroll forecasts={weekly} capsuleWidth={capsuleWidth} capsuleHeight={capsuleHeight} capsuleRadius={capsuleRadius} />
      </BottomSheetView>
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
