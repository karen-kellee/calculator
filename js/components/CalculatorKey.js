import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { dynamicFontSize } from "../utils/helpers";

export class CalculatorKey extends Component {
  render() {
    const {
      color,
      isDirty,
      text,
      textDirty,
      type,
      style,
      handlePress,
      orientation
    } = this.props;

    return (
      <TouchableHighlight
        style={[styles.container, style, { backgroundColor: color }]}
        onPress={() => handlePress(text, type)}
      >
        <Text style={[styles.key, dynamicFontSize(orientation, 35)]}>
          {isDirty ? textDirty : text}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 1,
    borderRadius: 50,
    margin: 5
  },
  key: {
    fontSize: 40,
    color: "#fff"
  }
});
