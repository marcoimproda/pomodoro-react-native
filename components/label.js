import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../stylesheet';
import tailwind from 'tailwind-rn';

export default class Label extends React.Component {
	render() {
		return (
			<View>
			<View style={tailwind('justify-start font-mono text-lg text-gray-800 text-center m-2')}>{(!this.props.paused && !this.props.playing) &&
				<Text style={styles.smallLabel}>press play to start</Text>}
					{this.props.paused && 
						<Text style={styles.smallLabel}>
						paused
				</Text>}
						</View>
			<Text style={tailwind('justify-start font-mono text-4xl text-gray-800 text-center m-2')}>{this.props.working ? "work time" : "break time"}</Text>
			</View>
		)
	}
}