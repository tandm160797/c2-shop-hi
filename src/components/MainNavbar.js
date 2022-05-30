import LanguagePopover from '$components/LanguagePopover'
import Logo from '$components/Logo'
import useLanguage from '$hooks/useLanguage'
import { AppBar, Box, Divider, Link, Toolbar } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const authPath = ['/login', '/register']

const MainNavbar = () => {
	const { pathname } = useLocation()
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

				{!authPath.includes(pathname) && (
					<>
						<Link color="textPrimary" component={RouterLink} to="/register" underline="none" variant="body1">
							{t('auth.register')}
						</Link>
						<Link color="textPrimary" underline="none" variant="body1" sx={{ mx: 1 }}>
							|
						</Link>
						<Link color="textPrimary" component={RouterLink} to="/login" underline="none" variant="body1">
							{t('auth.login')}
						</Link>
					</>
				)}
			</Toolbar>
			<Divider />
		</AppBar>
	)
}

export default MainNavbar
