import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

const RadialGauge = ({ steps }) => {
  const radius = 100; // Radius of the circle
  const strokeWidth = 20; // Stroke width of the gauge
  const maxSteps = 100; // Maximum goal for steps
  const circumference = 2 * Math.PI * radius;
  const presentage = Math.round((steps / maxSteps) * 100);

  // Calculate progress based on steps
  const progress = Math.min(steps, maxSteps) / maxSteps * circumference;
  
  return (
    <View style={styles.container}>
      <Svg width="250" height="250">
        {/* Background Circle */}
        <Circle
          stroke="#e6e6e6"
          fill="none"
          r={radius}
          cx="125"
          cy="125"
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <Circle
          stroke="#03ff0d"
          fill="none"
          r={radius}
          cx="125"
          cy="125"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - progress} // Offset for the progress
          strokeLinecap="round"
          rotation="-90" // Rotate to start from the top
          origin="125, 125" // Rotate around the center
        />
        {/* Center Text */}
        <SvgText
          x="125"
          y="125"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="30"
          fill="#fff" // White text color
          fontWeight="bold"
        >
        {presentage}%
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black transparent background
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default RadialGauge;
