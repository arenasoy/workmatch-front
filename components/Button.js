import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
    return ( 
        <TouchableHighlight onPress={this.props.onPress} underlayColor={this.props.underlayColor}>
          <View style={this.props.button}>
            <Text style={this.props.textStyle}> {this.props.text} </Text>
          </View>
        </TouchableHighlight>
    );
  }
}