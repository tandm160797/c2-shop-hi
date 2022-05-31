import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const PasswordField = ({ name, control, ...restProps }) => {
	const { t } = useTranslation()

	const [showPassword, setShowPassword] = useState(false)

	const toggleShowPassword = () => {
		setShowPassword(!showPassword)
	}

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState: { errors } }) => (
				<TextField
					fullWidth
					{...field}
					size="small"
					margin="normal"
					error={!!errors[name]}
					helperText={t(errors[name]?.message.key, errors[name]?.message.values) || restProps.helperText}
					type={showPassword ? 'text' : 'password'}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton edge="end" onClick={toggleShowPassword}>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						)
					}}
					{...restProps}
				/>
			)}
		/>
	)
}

PasswordField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
}
export default PasswordField
