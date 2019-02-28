import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
      
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Login</Text>
          <Input label="e-mail" marginContainer={30} labelStyle={styles.labelStyle}/>
          <Input secureTextEntry={true} label="senha" marginContainer={30} labelStyle={styles.labelStyle}/>
          <Button
              onPress={this._openLogin.bind(this)}
              underlayColor='#ffffff'
              button={styles.loginButton}
              textStyle={styles.textStyleWhite}
              text="Entrar"
            />
        </ScrollView>
      </View>
    );
  }

  _login() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 50,
    flex: 1,
    flexDirection: 'row',
    marginTop: 100,
    textAlign: 'center'
  },
  loginButton: {
    margin: 30,
    alignItems: 'center',
    backgroundColor: '#0066cc',
    height: 40,
    width: 90,
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  textStyleWhite: {
    fontSize: 30,
    color: '#ffffff'
  },
  labelStyle: {
    fontSize: 30,
    width: '70%'
  }
});
