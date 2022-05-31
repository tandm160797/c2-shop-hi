import useLanguage from '$hooks/useLanguage'
import { TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

const DateField = ({
	name,
	control,

	...restProps
}) => {
	const { t } = useLanguage()

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState: { errors } }) => (
				<DesktopDatePicker
					{...field}
					renderInput={params => (
						<TextField
							fullWidth
							{...params}
							size="small"
							margin="normal"
							error={!!errors[name]}
							helperText={t(errors[name]?.message.key, errors[name]?.message.values) || restProps.helperText}
						/>
					)}
				/>
			)}
		/>
	)
}

DateField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
}

export default DateField
