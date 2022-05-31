import SettingsDrawer from '$components/SettingsDrawer'
import useScrollReset from '$hooks/useScrollReset'
import useSettings from '$hooks/useSettings'
import { createCustomTheme } from '$theme'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { useRoutes } from 'react-router-dom'
import usePlacesAutocomplete from 'use-places-autocomplete'
import routes from './routes'

const App = () => {
	useScrollReset()

	usePlacesAutocomplete()

	const routing = useRoutes(routes())

	const { settings } = useSettings()

	const theme = createCustomTheme({
		theme: settings.theme,
		direction: settings.direction,
		roundedCorners: settings.roundedCorners,
		responsiveFontSizes: settings.responsiveFontSizes
	})

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SettingsDrawer />
			{routing}
		</ThemeProvider>
	)
}

export default App
