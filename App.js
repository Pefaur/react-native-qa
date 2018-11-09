/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, CheckBox, Icon } from 'react-native-elements'




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullWidth: {
    width: '100%'
  }
})

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View styles={styles.container}>
        <Button
            styles={styles.fullWidth}
            id="btn" title='BUTTON' />
        <FormInput
            id="input" placeholder='BASIC INPUT'
        />
        <View style={{ flexDirection: 'column'}}>
          <CheckBox />
          <View style={{ flexDirection: 'row' }}>
            <CheckBox
                value={false}
                onValueChange={() => alert('onChange')}
            />
            <Text style={{marginTop: 5}}> this is checkbox</Text>
          </View>
        </View>
      </View>
    );
  }
}


