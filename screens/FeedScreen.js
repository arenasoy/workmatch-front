import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

export default class FeedScreen extends React.Component {
  
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
      
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Feed</Text>
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
 });
