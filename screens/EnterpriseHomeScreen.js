import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { WebBrowser } from 'expo';
import Button from '../components/Button';

export default class EnterpriseHomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.breakLine}></View>
        <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}} activeOpacity={0.5} onPress={this._exit}>
                <Image
                    source={require('../assets/images/exit-to-app.png')}
                    style={styles.exitIcon}
                />
        </TouchableOpacity>
        <View style={styles.breakLine}></View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity activeOpacity={0.5} onPress={this._openData}>
                <Image
                    source={require('../assets/images/account-circle.png')}
                    style={styles.ImageIconStyle}
                />
                <Text style={styles.TextStyle}> Dados </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={this._openVacancy}>
                <Image
                    source={require('../assets/images/book-open-outline.png')}
                    style={styles.ImageIconStyle}
                />
                <Text style={styles.TextStyle}> Vagas </Text>
            </TouchableOpacity>
        </View>
        
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity activeOpacity={0.5} onPress={this._openPersons}>
                <Image
                    source={require('../assets/images/account-supervisor-circle.png')}
                    style={styles.ImageIconStyle}
                />
                <Text style={styles.TextStyle}> Pessoas </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={this._openSuggestions}>
                <Image
                    source={require('../assets/images/home-city.png')}
                    style={styles.ImageIconStyle}
                />
                <Text style={styles.TextStyle}> Moradia </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    );
  }

  _openData = () => {
    const {navigate} = this.props.navigation;
    navigate('EnterpriseRegister');
  };
  
  _openVacancy = () => {
    const {navigate} = this.props.navigation;
    navigate('Vacancy');
  };
  
  _openPersons = () => {
    const {navigate} = this.props.navigation;
    navigate('Persons');
  };

  _openSuggestions = () => {
    const {navigate} = this.props.navigation;
    navigate('HomeSuggestions');
  };

  _exit = () => {
    const {navigate} = this.props.navigation;
    navigate('Home');    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ImageIconStyle: {
    height: 100,
    width: 100,
    resizeMode: 'stretch',
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30,
  },
  TextStyle: {
    color: '#000000',
    fontSize: 15,
    justifyContent: 'center',
    textAlign: 'center'
  },
  breakLine: {
    height: 50,
  },
  exitIcon: {
    height: 50,
    width: 50,
  }
});
