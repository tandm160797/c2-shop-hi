import { DateField, InputField, PasswordField, PlacesField, RadioField } from '$components/InputFields'
import RegexPattern from '$constants/RegexPattern'
import useLanguage from '$hooks/useLanguage'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Grid, Link, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link as RouterLink } from 'react-router-dom'
import * as yup from 'yup'

const schema = yup.object({
	phone: yup.string().required().matches(RegexPattern.VietNamPhone),
	password: yup.string().min(6).max(32),
	passwordConfirm: yup.string().oneOf([yup.ref('password'), null])
})

const RegisterForm = () => {
	const { t } = useLanguage()

	const genderOptions = [
		{ label: t('auth.gender.female'), value: 'female' },
		{ label: t('auth.gender.male'), value: 'male' },
		{ label: t('auth.gender.other'), value: 'other' }
	]

	const { control, handleSubmit } = useForm({
		defaultValues: {
			fullName: '',
			phone: '',
			password: '',
			passwordConfirm: '',
			address: '',
			birthday: new Date('1/1/1970'),
			gender: genderOptions[0].value
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
			<InputField
				control={control}
				name="fullName"
				label={t('auth.fullName.label')}
				placeholder={t('auth.fullName.placeholder')}
				required
			/>
			<InputField
				control={control}
				name="phone"
				label={t('auth.phone.label')}
				placeholder={t('auth.phone.placeholder')}
				required
			/>
			<PasswordField
				control={control}
				name="password"
				label={t('auth.password.label')}
				placeholder={t('auth.password.placeholder')}
				required
			/>
			<PasswordField
				control={control}
				name="passwordConfirm"
				label={t('auth.passwordConfirm.label')}
				placeholder={t('auth.passwordConfirm.placeholder')}
				required
			/>

			<PlacesField
				control={control}
				name="address"
				label={t('auth.address.label')}
				placeholder={t('auth.address.placeholder')}
			/>
			<DateField control={control} name="birthday" label={t('auth.birthday.label')} />
			<RadioField control={control} name="gender" label={t('auth.gender.label')} row options={genderOptions} />

			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					mt: 2
				}}
			>
				<Typography color="textSecondary" variant="body2">
					{t('auth.termsAndPolicy')}
					<>
						&nbsp;
						<Link component={RouterLink} to="">
							{t('auth.terms')}
						</Link>
						&nbsp; &amp; &nbsp;
						<Link component={RouterLink} to="">
							{t('auth.policy')}
						</Link>
					</>
				</Typography>
			</Box>

			<Button disabled={false} fullWidth type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
				{t('auth.register')}
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

export default RegisterForm
