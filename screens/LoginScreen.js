import React from 'react';
import {
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

import Input from '../components/Input';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
      
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Login</Text>
          <Input label="e-mail"/>
          <Input secureTextEntry={true} label="senha"/>
          <Button
            onPress={this._login}
            title="Login"
            color="#841584"
            style={styles.button}
          />
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _login() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: '#fff',
  },
  button: {
    alignSelf: 'flex-end'
  },
  title: {
    fontSize: 50,
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    textAlign: 'center'
  }
});
