import useLanguage from '$hooks/useLanguage'
import { Autocomplete, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import usePlacesAutocomplete from 'use-places-autocomplete'

const PlacesField = ({ name, control, ...restProps }) => {
	const { t } = useLanguage()

	const [options, setOptions] = useState([])

	const {
		ready,
		setValue,
		suggestions: { status, data }
	} = usePlacesAutocomplete()

	useEffect(() => {
		if (status === 'OK') {
			setOptions(data.map(({ description }) => description))
		}
	}, [data, status])

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { value, onChange } }) => (
				<Autocomplete
					onChange={(_, value) => {
						onChange(value)
					}}
					autoHighlight
					loadingText={t('auth.address.loadingText')}
					noOptionsText={t('auth.address.placesFieldNoOptions')}
					disabled={!ready}
					options={options}
					renderInput={params => (
						<TextField
							{...params}
							fullWidth
							size="small"
							margin="normal"
							value={value}
							onChange={event => {
								onChange(event.target.value)
								setValue(event.target.value)
							}}
							{...restProps}
						/>
					)}
				/>
			)}
		/>
	)
}

PlacesField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired
}

export default PlacesField
