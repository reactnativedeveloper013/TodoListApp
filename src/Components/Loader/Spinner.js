/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { colors } from '../../Utils/colors';

const Spinner = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator color={colors.LOADINGGREEN} size="large" />
    </View>
  );
};

export const styles = StyleSheet.create({
  center: {
    width: 90,
    height: 90,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent' //rgba(0, 0, 0, 0.9)',
  },
});

export default Spinner;
