import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Input from '../components/Button';

export default class FeedScreen extends React.Component {
  
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
      
        <ScrollView style={styles.container}>
          <View style={styles.breakLine}></View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={{alignItems: 'flex-start'}} activeOpacity={0.5} onPress={this._exit}>
              <Image
                  source={require('../assets/images/logo.jpg')}
                  style={styles.icon}
              />
            </TouchableOpacity>

            <TextInput
                  style={styles.textInputStyle}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
            /> 

            <TouchableOpacity style={{alignItems: 'flex-end'}} activeOpacity={0.5} onPress={this._openMenu}>
              <Image
                  source={require('../assets/images/dots-vertical.png')}
                  style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.breakLine}></View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <TouchableOpacity style={{borderWidth: 1, borderColor: '#0066cc'}} activeOpacity={0.5} onPress={this._openMonitora}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                    source={require('../assets/images/monitora.jpg')}
                    style={styles.image}
                />
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text style={styles.name}>
                    Monitora
                  </Text>
                  <Text style={styles.description}>
                    Vaga de estágio para desenvolvedor web/mobile
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.description}>
                  Localizada em São Carlos - SP
                </Text>
                <Text style={styles.description}>
                  Necessário: conhecimento em React
                </Text>
                <Text style={styles.description}>
                  Diferencial: ter interesse em React Native
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth: 1, borderColor: '#0066cc'}} activeOpacity={0.5} onPress={this._exit}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                    source={require('../assets/images/onovolab.jpg')}
                    style={styles.image}
                />
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text style={styles.name}>
                    Onovolab
                  </Text>
                  <Text style={styles.description}>
                  Vaga para desenvolvedor Java pleno
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.description}>
                  Localizada em São Carlos - SP
                </Text>
                <Text style={styles.description}>
                  Necessário: conhecimento em Java e Hibernate
                </Text>
                <Text style={styles.description}>
                  Diferencial: ter interesse em PHP e SQL
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth: 1, borderColor: '#0066cc'}} activeOpacity={0.5} onPress={this._exit}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                    source={require('../assets/images/serasa.jpg')}
                    style={styles.image}
                />
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text style={styles.name}>
                    Serasa Experian
                  </Text>
                  <Text style={styles.description}>
                  Vaga para desenvolvedor Cobol pleno
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.description}>
                  Localizada em São Carlos - SP
                </Text>
                <Text style={styles.description}>
                  Necessário: ter conhecimento em Cobol
                </Text>
                <Text style={styles.description}>
                  Diferencial: ter interesse em Java
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth: 1, borderColor: '#0066cc'}} activeOpacity={0.5} onPress={this._exit}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                    source={require('../assets/images/imax.jpg')}
                    style={styles.image}
                />
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text style={styles.name}>
                    iMax
                  </Text>
                  <Text style={styles.description}>
                  Vaga para estagiário em desenvolvimento
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.description}>
                  Localizada em São Carlos - SP
                </Text>
                <Text style={styles.description}>
                  Necessário: ter conhecimento em C#
                </Text>
                <Text style={styles.description}>
                  Diferencial: ter interesse em Unity
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        
        </ScrollView>
      </View>
    );
  }
 
_openMonitora = () => {
  const {navigate} = this.props.navigation;
  navigate('Enterprise');
}

_openMenu = () => {
  const {navigate} = this.props.navigation;
  navigate('Register');
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
  icon: {
    height: 50,
    width: 50,
  },
  image: {
    height: 80,
    width: 80,
  },
  name: {
    fontSize: 20,
    margin: 5,
  },
  breakLine: {
    height: 50,
  },
  description: {
    fontSize: 15,
    margin: 5,
  },
  textInputStyle: {
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor:'#0066cc',
    borderRadius: 5,
    height: 50,
    width: 200,
    marginLeft: 15,
  }
 });
