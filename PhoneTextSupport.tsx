import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View } from '../components/Themed';
import * as Linking from 'expo-linking';
import { Button } from 'react-native';
import {useState} from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import SendSMS from 'react-native-sms';

export default function PhoneTextSupportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phone and Text Support</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.body}>Our 24/7, free, anonymous hotline, 
      allows help to be just a phone call or text away for anyone 
      needing support as they care for children.</Text>
      <Button title="Text Someone Now" color="#205BB5"  onPress= {SendText}/>
      <Button title="Call Stress Line" color="#205BB5"  onPress= {()=> Linking.openURL('tel:+18006328188')}  accessibilityLabel="1-800-632-8188"/>
      <Text style={styles.header}>Stress Line FAQ</Text>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.body}>
        Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?
        A: [desc] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        </Text>
      </ScrollView>
    </SafeAreaView>

      <EditScreenInfo path="/screens/PhoneTextSupport.js" />
    </View>
  );
}


const SendText = () => {
  const [mobileNumber, setMobileNumber] = useState('9999999999');
  const [bodySMS, setBodySMS] = useState(
    'This is the body of the text pepepopo',
  );

  const initiateSMS = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length != 10) {
      alert('18006328188');
      return;
    }

    SendSMS.send(
      {
        // Message body
        body: bodySMS,
        // Recipients Number
        recipients: [mobileNumber],
        // An array of types 
        // "completed" response when using android
        // successTypes: ['sent', 'queued'],
      },
      (completed: any, cancelled: any, error: any) => {
        if (completed) {
          console.log('SMS Sent Completed');
        } else if (cancelled) {
          console.log('SMS Sent Cancelled');
        } else if (error) {
          console.log('Some error occured');
        }
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.titleText}>
          This is some sample text to send to our textline
        </Text>
        <Text style={styles.titleTextsmall}>
          Enter Your Mobile Number Here
        </Text>
        <TextInput
          value={mobileNumber}
          onChangeText={
            (mobileNumber) => setMobileNumber(mobileNumber)
          }
          placeholder={'Enter Contact Number to Call'}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <Text style={styles.titleTextsmall}>
          Enter SMS body
        </Text>
        <TextInput
          value={bodySMS}
          onChangeText={(bodySMS) => setBodySMS(bodySMS)}
          placeholder={'Enter SMS body'}
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={initiateSMS}>
          <Text style={styles.buttonTextStyle}>
            Send Message
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text_container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'normal',
  },
  titleTextsmall: {
     marginVertical: 8,
     fontSize: 14,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#00000',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#205bb5",
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: "Raleway",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: "Raleway",
    fontWeight: "300",
    color: "#000000",
  },
  header: {
    color: "#77a22f",
    fontSize: 28,
  }
});
