import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Modal,
  TextInput,
} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';


export default class VacancyScreen extends React.Component {
  static navigationOptions = {
    header: null,
    cardStack: {
        gesturesEnabled: false,
    }
  };

  constructor(props) {
    super(props);
    this.state = { modalVisible: false, text: '' };
  }

  _openModal = () => {
    this.setState({modalVisible:true});
  }

  _closeModal = () => {
    this.setState({modalVisible:false});
  }

  render() {
    return (
      <View style={styles.container}>

          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={this._closeModal}
              transparent={true}
          >
            <View style={styles.modalContainer}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <Button
                    onPress={this._closeModal}
                    underlayColor='#ffffff'
                    button={styles.closeButton}
                    textStyle={styles.textStyleWhite}
                    text="X"
              />
              <View style={styles.innerContainer}>
                <View style={styles.containerInput}>
                  <Text style={styles.labelStyle}>
                      {'cargo'}
                  </Text>
                  
                  <TextInput
                      style={styles.inputStyle}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                  />  
                </View>
                <View style={styles.containerInput}>
                  <Text style={styles.labelStyle}>
                      {'requisitos'}
                  </Text>
                  
                  <TextInput
                      style={styles.inputStyle}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                  />  
                </View>
                <View style={styles.containerInput}>
                  <Text style={styles.labelStyle}>
                      {'interesses'}
                  </Text>
                  
                  <TextInput
                      style={styles.inputStyle}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                  />  
                </View>
                <View style={styles.containerInput}>
                  <Text style={styles.labelStyle}>
                      {'descrição'}
                  </Text>
                  
                  <TextInput
                      style={styles.inputStyle}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                  />  
                </View>
                
                <View style={styles.containerInput}>
                  <Text style={styles.labelStyle}>
                      {'carga horária'}
                  </Text>
                  
                  <TextInput
                      style={styles.inputStyle}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                  />  
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.labelStyle}>
                      {'tipo da vaga'}
                  </Text>
                  
                  <TextInput
                      style={styles.inputStyle}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                  />  
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.labelStyle}>
                      {'data de início'}
                  </Text>
                  
                  <TextInput
                      style={styles.inputStyle}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                  />  
                </View>
                
                <Button
                    onPress={this._closeModal}
                    underlayColor='#ffffff'
                    button={styles.nextButton}
                    textStyle={styles.textStyleWhite}
                    text="Salvar"
                />
              </View>
              </ScrollView>
            </View>
          </Modal>
      
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Vagas</Text>
          
          <Button
              onPress={this._openModal.bind(this)}
              underlayColor='#ffffff'
              button={styles.addButton}
              textStyle={styles.textStyleWhite}
              text="+"
            />


          <Button
              onPress={this._next.bind(this)}
              underlayColor='#ffffff'
              button={styles.nextButton}
              textStyle={styles.textStyleWhite}
              text="Próximo"
            />
        </ScrollView>
      </View>
    );
  }

  _next() {
    const {navigate} = this.props.navigation;
    navigate('EnterpriseHome');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    flex: 1,
    flexDirection: 'row',
    marginTop: 100,
    textAlign: 'center'
  },
  addButton: {
    margin: 30,
    alignItems: 'center',
    backgroundColor: '#00cc66',
    height: 40,
    width: 50,
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  closeButton: {
    margin: 30,
    alignItems: 'center',
    backgroundColor: '#ff0000',
    height: 40,
    width: 50,
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  nextButton: {
    margin: 30,
    alignItems: 'center',
    backgroundColor: '#0066cc',
    height: 40,
    width: 120,
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  textStyleWhite: {
    fontSize: 30,
    color: '#ffffff'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 0,
    backgroundColor: '#ffffff'
  },
  innerContainer: {
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 25, 
    color: '#000000',
  },
  title: {
    fontSize: 40,
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    textAlign: 'center'
  },
  inputStyle: {
    width: 200,
    height: 50,
    borderColor: '#0066cc',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
}
});
