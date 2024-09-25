// Splash.js
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const Splash = ({ onAnimationComplete }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    // Start the animation
    Animated.timing(fadeAnim, {
      toValue: 1, // Fade in to opacity: 1
      duration: 3000, // Duration of the fade
      useNativeDriver: true,
    }).start(() => {
      // Call the function when the animation is complete
      onAnimationComplete();
    });
  }, [fadeAnim, onAnimationComplete]);

  return (
    <View style={styles.splashContainer}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.splashText}>Welcome to My App!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Splash;
