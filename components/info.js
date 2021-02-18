import React from 'react';
import { Linking, View, Text } from 'react-native';
import { styles } from '../stylesheet';
import tailwind from 'tailwind-rn';

export default class Info extends React.Component {
	render() {
	return (
		<View style={tailwind('font-mono text-lg text-gray-800 text-center absolute bottom-12 m-1')}>
			<Text style={tailwind('font-mono text-lg text-gray-800 text-center')}>Read about the Pomodoro Technique 
				<Text style={{color: 'blue'}}
      				onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Pomodoro_Technique')}> here
      			</Text>.
			</Text>
		</View>
	)
	}
}