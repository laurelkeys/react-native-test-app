import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const HeaderButton = ({ onPress, title }) => {
	const { containerStyle, textStyle } = styles;
	
	return (
		<TouchableOpacity onPress={onPress} style={containerStyle}>
			<Text style={textStyle}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	containerStyle: {
		marginHorizontal: 16
	},
	textStyle: {
		fontSize: 16,
		fontWeight: '600',
		color: '#007aff'
	}
};

export { HeaderButton };

