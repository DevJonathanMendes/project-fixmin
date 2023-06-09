import React, { StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

import { Text, View } from '../components/Themed';

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!', headerTitleAlign: 'center' }} />
			<View style={styles.container}>
				<Text style={styles.title}>This screen does not exist.</Text>
				<Link href='/' style={styles.link}>
					<Text style={styles.linkText}>Go to home screen!</Text>
				</Link>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
	linkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
});
