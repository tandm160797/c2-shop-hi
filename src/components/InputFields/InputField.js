import useLanguage from '$hooks/useLanguage'
import { TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

const InputField = ({ name, control, ...restProps }) => {
	const { t } = useLanguage()

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
					{...restProps}
				/>
			)}
		/>
	)
}

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
}

export default InputField
