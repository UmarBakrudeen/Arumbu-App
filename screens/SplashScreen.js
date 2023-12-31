import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/ChanaDal.jpg')}
        style={styles.splashImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
