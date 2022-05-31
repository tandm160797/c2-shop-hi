import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const RadioField = ({
	name,
	control,
	options,

	...restProps
}) => {
	const { t } = useTranslation()

	const { label, required, row } = restProps

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState: { errors } }) => (
				<FormControl sx={{ mt: 2, mb: 1 }} error={!!errors[name]}>
					<FormLabel htmlFor={name} required={!!required}>
						{label}
					</FormLabel>
					<RadioGroup row={!!row} {...field}>
						{options.map(option => (
							<FormControlLabel key={option.value} control={<Radio size="small" />} {...option} />
						))}
					</RadioGroup>
					{(!!errors[name] || restProps.helperText) && (
						<FormHelperText sx={{ mx: 0 }}>
							{t(errors[name]?.message.key, errors[name]?.message.values) || restProps.helperText}
						</FormHelperText>
					)}
				</FormControl>
			)}
		/>
	)
}

RadioField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,

	options: PropTypes.array.isRequired
}

export default RadioField
