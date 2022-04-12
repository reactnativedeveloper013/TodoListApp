import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Spinner from './Spinner';

const Loader = (props, ref) => {
  const [loading, setLoading] = useState(0);

  useImperativeHandle(ref, () => ({
    start: () => {
      const loadingCount = loading + 1;
      setLoading(loadingCount);
    },
    stop: () => {
      const loadingCount = loading > 0 ? loading - 1 : 0;
      setLoading(loadingCount);
    },
    isLoading: () => loading >= 1,
  }));

  if (!loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000060',
    zIndex: 999,
    elevation: 999,
  },
});

export default forwardRef(Loader);
