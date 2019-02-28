import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

export default class EnterpriseRegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
      
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Cadastro</Text>
          <Input label="nome" marginContainer={15} labelStyle={styles.labelStyle}/>
          <Input label="cnpj" marginContainer={10} labelStyle={styles.labelStyle}/>
          <Input label="endereço" marginContainer={10} labelStyle={styles.labelStyle}/>
          <Input label="descrição" marginContainer={10} labelStyle={styles.labelStyle}/>
          <Input secureTextEntry={true} label="senha" marginContainer={10} labelStyle={styles.labelStyle}/>
          <Input secureTextEntry={true} label="confirmação de senha" marginContainer={10} labelStyle={styles.labelStyle}/>
          <Button
              onPress={this._register.bind(this)}
              underlayColor='#ffffff'
              button={styles.registerButton}
              textStyle={styles.textStyleWhite}
              text="Salvar"
            />
        </ScrollView>
      </View>
    );
  }

  _register() {
    const {navigate} = this.props.navigation;
    navigate('Home');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    textAlign: 'center'
  },
  registerButton: {
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
    fontSize: 25, 
    width: '75%'
  }
});
