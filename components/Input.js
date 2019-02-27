import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    
    render() {
    return ( 
        <View style={styles.container}>
            <Text style={styles.label}>
                {this.props.label}
            </Text>
            
            <TextInput
                {...this.props}
                style={styles.input}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />  
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    label: {
        fontSize: 30,
        //alignSelf: 'flex-start',
        width: '70%',
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 25
    }
});