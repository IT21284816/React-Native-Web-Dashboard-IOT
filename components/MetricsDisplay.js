// components/MetricsDisplay.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MetricsDisplay = ({ steps }) => {
  const strideLength = 0.762; // Average stride length in meters
  const caloriesPerStep = 0.05; // Calories burned per step

  // Calculate distance and calories burned
  const distance = (steps * strideLength).toFixed(2); // Distance in meters
  const caloriesBurned = (steps * caloriesPerStep).toFixed(2); // Calories burned

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.metricText}>Distance : {distance} m</Text>
        <Text style={styles.metricText}>Calories Burned : {caloriesBurned} kcal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  box: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Light grey background
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  metricText: {
    fontSize: 24,
    marginVertical: 5,
    fontFamily: 'poppins', // Use the custom font if loaded
    fontWeight: 'light', // Make text bold
    color: 'white', // Darker text color
  },
});

export default MetricsDisplay;
