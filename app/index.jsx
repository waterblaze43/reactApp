
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Link } from "expo-router";
import {icons} from "../constants";

import "../global.css";


export default function App() {
  
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <Link href="/home" style={{color:"blue"}}>Go to Home</Link>
      <StatusBar style="auto" />
    </View>
  );
}

