import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import happyEmoji from '@assets/happy.png';

import {
	Container,
	Header,
	Greeting,
	GreetingEmoji,
	GreetingText,
} from './styles';

export function Home() {
	const { COLORS } = useTheme();

	return (
		<Container>
			<Header>
				<Greeting>
					<GreetingEmoji source={happyEmoji} />
					<GreetingText>Olá, Admin!</GreetingText>
				</Greeting>


					<TouchableOpacity onPress={() => {}}>
						<MaterialIcons name="logout" size={24} color={COLORS.TITLE} />
					</TouchableOpacity>


			</Header>
		</Container>
	);
}
