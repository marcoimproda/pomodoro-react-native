import React from 'react';
import { View, Button } from 'react-native';
import { styles } from '../stylesheet';
import tailwind from 'tailwind-rn';

export default class Buttons extends React.Component {
  render() {
    return (
      <View style={tailwind('bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1')}>
            <Button color="transparent" title={this.props.title} onPress={this.props.onPress} />
          </View>
    )
  }
}