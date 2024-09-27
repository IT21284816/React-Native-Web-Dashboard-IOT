// components/CircularProgress.js
import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

const CircularProgress = ({ steps }) => {
  const radius = 50; // Radius of the circle
  const strokeWidth = 10; // Width of the circle stroke
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = (steps / 10000) * circumference; // Assuming 10,000 is the max step count

  return (
    <View>
      <Svg height={radius * 2} width={radius * 2}>
        <Circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <Circle
          stroke="#3498db" // Change to your desired color
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={`${progress} ${circumference}`}
          strokeDashoffset={circumference}
          rotation="90"
          originX={radius}
          originY={radius}
        />
        <SvgText
          fill="black"
          fontSize="20"
          x={radius}
          y={radius}
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {steps || 0}
        </SvgText>
      </Svg>
    </View>
  );
};

export default CircularProgress;
