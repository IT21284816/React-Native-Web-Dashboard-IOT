// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,  Alert, BackHandler ,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Splash from './components/Splash'; // Import the Splash component
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import Layout from './layout';
import backgroundImage from './assets/background.jpg'; 

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAEzNVVk26Gm5izWVfRaX1gbrbPzvjK8-g",
  authDomain: "iot-project-sliit.firebaseapp.com",
  databaseURL: "https://iot-project-sliit-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-project-sliit",
  storageBucket: "iot-project-sliit.appspot.com",
  messagingSenderId: "639036929970",
  appId: "1:639036929970:web:d55b3a6e56e64fa64ed6ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [steps, setSteps] = useState(null);

  useEffect(() => {
    // Fetch steps data from Firebase
    const stepsRef = ref(database, 'stepCount');
    onValue(stepsRef, (snapshot) => {
      const stepsValue = snapshot.val();
      setSteps(stepsValue);
    });
  }, []);

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Splash onAnimationComplete={handleAnimationComplete} />;
  }

  const handleExit = () => {
    Alert.alert('Exit', 'Are you sure you want to exit?', [
      { text: 'Cancel' },
      { text: 'OK', onPress: () => BackHandler.exitApp() }, // Exit the app
    ]);
  };

  return (
    <Layout onExit={handleExit}>
      <ImageBackground
        source={backgroundImage} // Use the imported image
        style={styles.background}
      >
    <View style={styles.container}>
      <Text style={styles.text}>Steps: {steps ? steps : 'Loading...'}</Text>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
   </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,

  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
