import LanguagePopover from '$components/LanguagePopover'
import Logo from '$components/Logo'
import useLanguage from '$hooks/useLanguage'
import { AppBar, Box, Divider, Link, Toolbar } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const AuthNavbar = () => {
	const { t } = useLanguage()

	return (
		<AppBar elevation={0} sx={{ backgroundColor: 'background.paper' }}>
			<Toolbar sx={{ minHeight: 64 }}>
				<RouterLink to="/">
					<Logo
						sx={{
							height: 40,
							width: 40
						}}
					/>
				</RouterLink>
				<Box sx={{ flexGrow: 1 }} />

				<LanguagePopover />
				<Link color="textPrimary" component={RouterLink} to="/register" underline="none" sx={{ mx: 2 }} variant="body1">
					{t('auth.register')}
				</Link>
				<Link color="textPrimary" component={RouterLink} to="/login" underline="none" variant="body1">
					{t('auth.login')}
				</Link>
			</Toolbar>
			<Divider />
		</AppBar>
	)
}

export default AuthNavbar
