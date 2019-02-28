import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';


import Button from '../components/Button';


export default class KnowledgeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  render() {
    return (
      <View style={styles.container}>
      
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Acrescente tecnologias que você tem interesse em conhecer</Text>
          
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
    navigate('Interest');
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
});
