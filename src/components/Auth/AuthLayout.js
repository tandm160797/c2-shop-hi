import { experimentalStyled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import AuthNavbar from './AuthNavbar'

const AuthLayoutRoot = experimentalStyled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default
}))

const AuthLayout = () => (
	<AuthLayoutRoot>
		<AuthNavbar />
		<Outlet />
	</AuthLayoutRoot>
)

export default AuthLayout
