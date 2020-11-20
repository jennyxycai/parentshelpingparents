import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Image, TouchableOpacity, Button} from 'react-native';
import * as Linking from 'expo-linking';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      /* Call stress Line button which will open your phone app and show the number on it */
      <Button title="Call Stress Line" color="#205BB5"  onPress= {()=> Linking.openURL('tel:+18006328188')}  accessibilityLabel="Call the 24/7 stressline from your phone"/>
      /* Donate button which link to the donate page, stlye is in styles */
      <TouchableOpacity onPress= {()=> Linking.openURL('https://www.networkforgood.org/donation/ExpressDonation.aspx?ORGID2=042657321&vlrStratCode=eRlCiRtNcKXhjfkf6kZ0AeNSNP%2bPrhKg0As6iIOlzYE4GxFLiqnY4fCEM2ylS0av')} style={styles.donateButton}>
        <Text style={styles.donateButtonText}>Donate/Support US</Text>
      </TouchableOpacity>
      /*News button which link to the news page, stlye is in styles , not sure how to subscribe(not shown on website)*/
      <TouchableOpacity onPress= {()=> Linking.openURL('https://www.parentshelpingparents.org/new-info')} style={styles.newsButton}>
        <Text style={styles.newsButtonText}>Sign up for our newsletter</Text>
      </TouchableOpacity>
      <EditScreenInfo path="/screens/TabOneScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  donateButton: {
    margin: 1,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    padding : 20,
  },
  donateButtonText: {
    fontSize: 24,
    color: '#205BB5',
    fontWeight: 'bold',
  }, 
  newsButton: {
    margin: 1,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
  },
 newsButtonText: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    backgroundColor: "white",
    color: '#000000',
    fontSize: 20,
  }, 
});
