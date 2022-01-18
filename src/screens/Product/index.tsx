import React, { useState } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ButtonBack } from '../../components/ButtonBack';
import { Photo } from '../../components/Photo';
import { InputPrice } from '../../components/InputPrice';

import {
	Container,
	Header,
	Title,
	DeleteLabel,
	Upload,
	PickImageButton,
} from './styles';

export function Product() {
	const [image, setImage] = useState('');

	async function handlePickerImage() {
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (status === 'granted') {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				aspect: [4, 4],
			});

			if (!result.cancelled) {
				setImage(result.uri);
			}
		}
	}

	return (
		<Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
			<Header>
				<ButtonBack />

				<Title>Cadastrar</Title>

				<TouchableOpacity onPress={() => {}}>
					<DeleteLabel>Deletar</DeleteLabel>
				</TouchableOpacity>
			</Header>

			<Upload>
				<Photo uri={image} />

				<GestureHandlerRootView>
					<PickImageButton
						title="Carregar"
						type="secondary"
						onPress={() => {
							handlePickerImage();
						}}
					/>
				</GestureHandlerRootView>
			</Upload>

			<InputPrice size="P" />
			<InputPrice size="M" />
			<InputPrice size="G" />
		</Container>
	);
}
