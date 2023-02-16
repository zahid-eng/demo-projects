import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

import useInAppPurchase from '../../lib/custom_hooks/useInAppPurchase';
import Button from '../components/ButtonApp';

const HomeScreen = () => {
  const {isFullAppPurchased, connectionErrorMsg, purchaseFullApp} =
    useInAppPurchase();
  return (
    <View style={styles.container}>
      {isFullAppPurchased ? (
        <Text style={{...styles.msg, color: 'green'}}>
          Full app access available!!!
        </Text>
      ) : null}
      <Button title="Purchase" handlePress={purchaseFullApp} />
      {connectionErrorMsg ? (
        <Text style={{...styles.msg, color: 'red'}}>{connectionErrorMsg}</Text>
      ) : null}
    </View>
  );
};

export default HomeScreen;
