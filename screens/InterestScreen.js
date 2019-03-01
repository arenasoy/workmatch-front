import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';


import Button from '../components/Button';


export default class KnowledgeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
      
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Acrescente tecnologias que você tem interesse em conhecer</Text>
        
          <TextInput
                  style={styles.input}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
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
    navigate('Feed');
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
  input: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor:'#0066cc',
    borderRadius: 5,
    height: 50,
    width: 200,
    marginLeft: 15,
  },
});
