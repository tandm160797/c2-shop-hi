import themes from '$constants/themes'
import useLanguage from '$hooks/useLanguage'
import useSettings from '$hooks/useSettings'
import AdjustmentsIcon from '$icons/Adjustments'
import { Box, Button, Drawer, Fab, FormControlLabel, Switch, TextField, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const getValues = settings => ({
	theme: settings.theme,
	compact: settings.compact,
	roundedCorners: settings.roundedCorners,
	responsiveFontSizes: settings.responsiveFontSizes
})

const SettingsDrawer = () => {
	const { t } = useLanguage()

	const [open, setOpen] = useState(false)
	const { settings, saveSettings } = useSettings()
	const [values, setValues] = useState(getValues(settings))

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleChange = (field, value) => {
		setValues({
			...values,
			[field]: value
		})
	}

	const handleSave = () => {
		saveSettings(values)
		setOpen(false)
	}

	useEffect(() => {
		setValues(getValues(settings))
	}, [settings])

	return (
		<>
			<Tooltip title="Settings">
				<Fab
					color="primary"
					onClick={handleOpen}
					size="medium"
					sx={{
						bottom: 0,
						margin: theme => theme.spacing(4),
						position: 'fixed',
						right: 0,
						zIndex: theme => theme.zIndex.speedDial
					}}
				>
					<AdjustmentsIcon fontSize="small" />
				</Fab>
			</Tooltip>
			<Drawer
				anchor="right"
				onClose={handleClose}
				open={open}
				PaperProps={{
					sx: {
						p: 2,
						width: 400
					}
				}}
			>
				<Typography color="textPrimary" variant="h6">
					{t('theme.settings')}
				</Typography>
				<Box sx={{ mt: 3 }}>
					<TextField
						fullWidth
						label={t(`theme.theme`)}
						name="theme"
						onChange={event => handleChange('theme', event.target.value)}
						select
						SelectProps={{ native: true }}
						value={values.theme}
						variant="outlined"
					>
						{Object.entries(themes).map(([key, value]) => (
							<option key={key} value={value}>
								{t(`theme.themes.${key}`)}
							</option>
						))}
					</TextField>
				</Box>
				<Box
					sx={{
						mt: 2,
						px: 1.5
					}}
				>
					<FormControlLabel
						control={
							<Switch
								checked={values.roundedCorners}
								color="primary"
								edge="start"
								name="roundedCorners"
								onChange={event => handleChange('roundedCorners', event.target.checked)}
							/>
						}
						label={
							<div>
								{t('theme.roundedCorners.label')}
								<Typography color="textSecondary" component="p" variant="caption">
									{t('theme.roundedCorners.means')}
								</Typography>
							</div>
						}
					/>
				</Box>
				<Box
					sx={{
						mt: 2,
						px: 1.5
					}}
				>
					<FormControlLabel
						control={
							<Switch
								checked={values.compact}
								color="primary"
								edge="start"
								name="compact"
								onChange={event => handleChange('compact', event.target.checked)}
							/>
						}
						label={
							<div>
								{t('theme.compact.label')}
								<Typography color="textSecondary" component="p" variant="caption">
									{t('theme.compact.means')}
								</Typography>
							</div>
						}
					/>
				</Box>

				<Box
					sx={{
						mt: 2,
						px: 1.5
					}}
				>
					<FormControlLabel
						control={
							<Switch
								checked={values.responsiveFontSizes}
								color="primary"
								edge="start"
								name="direction"
								onChange={event => handleChange('responsiveFontSizes', event.target.checked)}
							/>
						}
						label={
							<div>
								{t('theme.responsiveFontSizes.label')}
								<Typography color="textSecondary" component="p" variant="caption">
									{t('theme.responsiveFontSizes.means')}
								</Typography>
							</div>
						}
					/>
				</Box>
				<Box sx={{ mt: 3 }}>
					<Button color="primary" fullWidth onClick={handleSave} variant="contained">
						{t('theme.saveSettings')}
					</Button>
				</Box>
			</Drawer>
		</>
	)
}

export default SettingsDrawer
