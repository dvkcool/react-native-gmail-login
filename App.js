import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class App extends Component<Props> {
  startsign(){
    GoogleSignin.configure({
      iosClientId: '461479342368-c94ujm9k0vs6l598emggfcnrganhtk26.apps.googleusercontent.com',
    })
    .then(() => {
      GoogleSignin.signIn()
      .then((user) => {
        Alert.alert("Welcome", "Hey there!, Welcome "+user.givenName+", you are successfully logged in");
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.startsign.bind(this)}>
          <View style={styles.bt}>
            <Text style={styles.btext}> Google signin</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bt: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    padding:10,
    borderRadius:10,
  },
  btext: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});
