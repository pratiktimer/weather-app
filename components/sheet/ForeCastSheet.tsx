import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheet from "@gorhom/bottom-sheet";

const ForeCastSheet = () => {
  const snapPoints = ["38.5%", "83%"];
  return <BottomSheet snapPoints={snapPoints}></BottomSheet>;
};

export default ForeCastSheet;

const styles = StyleSheet.create({});
