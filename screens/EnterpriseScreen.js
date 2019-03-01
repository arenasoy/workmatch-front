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

export default class EnterpriseScreen extends React.Component {
  
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      
        <ScrollView style={styles.container}>
          <View style={styles.breakLine}></View>
          <View style={{flex: 1, flexDirection: 'column'}}>
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
                  A Monitora é uma empresa de soluções digitais totalmente brasileira e com impacto internacional.
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.subtitle}>Pessoas</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image
                    source={require('../assets/images/person2.jpg')}
                    style={styles.icon}
                    />
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={styles.person}>Bruna Souza</Text>
                        <Text style={styles.description}>Desenvolvedora plena</Text>
                        <Text style={styles.description}>Formada em Bacharelado em Ciências de Computação na USP São Carlos em 2017</Text>
                        <Text style={styles.description}>Facebook: fb.com/brsouza</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image
                    source={require('../assets/images/person.jpg')}
                    style={styles.icon}
                    />
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={styles.person}>João Marcos</Text>
                        <Text style={styles.description}>Desenvolvedor pleno</Text>
                        <Text style={styles.description}>Formado em Bacharelado em Sistemas de Informação na USP São Carlos em 2018</Text>
                        <Text style={styles.description}>Telegram: @joaom</Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>Vagas</Text>
                <Text style={styles.subtitle2}>
                    Vaga de estágio para desenvolvedor web/mobile
                  </Text>
                <Text style={styles.description}>
                  Localizada em São Carlos - SP
                </Text>
                <Text style={styles.description}>
                  Necessário: conhecimento em React
                </Text>
                <Text style={styles.description}>
                  Diferencial: ter interesse em React Native
                </Text>
                
                <Text style={styles.subtitle}>Sugestões de moradia</Text>
                <Text style={styles.description}>
                  Para alunos da USP/UFSCar: na saída da física USP.
                </Text>
              </View>
          </View>
        
        </ScrollView>
      </View>
    );
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
    fontSize: 30,
    margin: 5,
  },
  breakLine: {
    height: 50,
  },
  description: {
    fontSize: 15,
    margin: 3,
    marginLeft: 5,
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
  },
  subtitle: {
      fontSize: 20,
      margin: 5,
      fontWeight: 'bold'
  },
  subtitle: {
      fontSize: 20,
      margin: 5,
      fontWeight: 'bold'
  },
  person: {
      fontSize: 15,
      margin: 3,
      marginLeft: 5,
      fontWeight: 'bold',
  }
 });
