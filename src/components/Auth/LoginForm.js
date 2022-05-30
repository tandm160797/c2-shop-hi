import InputField from '$components/InputFields/InputField'
import PasswordField from '$components/InputFields/PasswordField'
import useLanguage from '$hooks/useLanguage'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link as RouterLink } from 'react-router-dom'
import * as yup from 'yup'

const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(6).max(32).required()
})

const LoginForm = () => {
	const { t } = useLanguage()

	const { control, handleSubmit } = useForm({
		defaultValues: {
			email: '',
			password: ''
		},
		resolver: yupResolver(schema)
	})

	const onSubmit = async data => {
		try {
			console.log(data)
		} catch {
			//
		}
	}

	return (
		<form noValidate onSubmit={handleSubmit(onSubmit)}>
			<InputField control={control} name="email" label="Email" />
			<PasswordField control={control} name="password" label="Password" />
			<Button disabled={false} fullWidth type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
				{t('auth.login')}
			</Button>

			<Grid container>
				<Grid item xs>
					<RouterLink to="/register">{`${t('auth.forgotPassword')}?`}</RouterLink>
				</Grid>
				<Grid item>
					<RouterLink to="/login">{`${t('auth.dontHaveAccount')}? ${t('auth.register')}`}</RouterLink>
				</Grid>
			</Grid>
		</form>
	)
}

export default LoginForm
