import React from 'react';
import { Picker } from 'react-native';
import { styles } from '../stylesheet';
import tailwind from 'tailwind-rn';

let list = [];
for (let i = 0; i < 60; i++) {
  list.push(i.toString());
} 

export default class Menu extends React.Component {
  render() {
    return (
      <Picker style={tailwind('inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 m-1')} mode="dropdown" onValueChange={this.props.onValueChange} selectedValue={this.props.selected}>
        {list.map( (num) => {
          return (<Picker.Item label={num} value={num} key={num}/>);
        })}
        </Picker>
    )
  }
}