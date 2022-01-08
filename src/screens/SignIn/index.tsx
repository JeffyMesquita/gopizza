/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import brandImg from '@assets/brand.png';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
	Container,
	Content,
	Title,
	Brand,
	ForgotPasswordButton,
	ForgotPasswordLabel,
} from './styles';

export function SignIn() {
	const { signIn, isLogging } = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSignIn() {
		signIn(email, password);
	}

	return (
		<Container>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			>
				<Content>
					<Brand source={brandImg} />

					<Title>Login</Title>

					<Input
						placeholder="E-mail"
						type="secondary"
						autoCorrect={false}
						autoCapitalize="none"
						onChangeText={setEmail}
					/>
					<Input
						placeholder="Senha"
						type="secondary"
						secureTextEntry
						onChangeText={setPassword}
					/>

					<ForgotPasswordButton>
						<ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
					</ForgotPasswordButton>

					<Button
						title="Entrar"
						type="secondary"
						onPress={() => {
							handleSignIn();
						}}
						isLoading={isLogging}
					/>
				</Content>
			</KeyboardAvoidingView>
		</Container>
	);
}
