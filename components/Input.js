import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    
    render() {
    return ( 
        <View style={StyleSheet.flatten([styles.container, {marginTop: this.props.marginContainer}])}>
            <Text style={this.props.labelStyle}>
                {this.props.label}
            </Text>
            
            <TextInput
                {...this.props}
                style={StyleSheet.flatten([styles.input, {width: this.props.inputWidth}])}
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
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    input: {
        flex: 1,
        height: 50,
        borderColor: '#0066cc',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
    }
});