// Layout.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Layout = ({ children, onExit }) => {
  return (
    <View style={styles.container}>
        
      <View style={styles.header}>
        <Text style={styles.headerText}>Step Count</Text>
        <TouchableOpacity onPress={onExit} style={styles.exitButton}>
          <Icon name="times" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginTop:20,
  },
  header: {
    backgroundColor: '#002147',
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row', 
    alignItems: 'center', // Vertically center items
    justifyContent: 'space-between', // Space items to the ends
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 0,
  },
  exitButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Layout;
