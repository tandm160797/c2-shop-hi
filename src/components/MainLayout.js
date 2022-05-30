import { experimentalStyled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import MainNavbar from './MainNavbar'

const MainLayoutRoot = experimentalStyled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default
}))

const MainLayout = () => (
	<MainLayoutRoot>
		<MainNavbar />
		<Outlet />
	</MainLayoutRoot>
)

export default MainLayout
