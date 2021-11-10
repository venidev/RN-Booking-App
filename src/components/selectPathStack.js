import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SelectFlightCard from "./selectFlightCard";

const SelectPathStack = () => {
  return (
    <View style={style.mainViewStyle}>
      <SelectFlightCard
        iconName="flight-takeoff"
        title="From"
        location="Boston, MA"
        disable={false}
      />
      <SelectFlightCard
        iconName="flight-land"
        title="To"
        location="New York, NY"
        disable={true}
      />
    </View>
  );
};

const style = StyleSheet.create({
  mainViewStyle: {
    marginTop: 20,
  },
});

export default SelectPathStack;
