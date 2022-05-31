import MainLayout from '$components/MainLayout'
import { lazy } from 'react'
import Loadable from './components/Loadable'

const LoginPage = Loadable(lazy(() => import('./pages/Auth/Login')))
const RegisterPage = Loadable(lazy(() => import('./pages/Auth/Register')))

const adminRoutes = []

const publicRoutes = [
	{
		path: '',
		element: <MainLayout />,
		children: [
			{
				path: 'login',
				element: <LoginPage />
			},
			{
				path: 'register',
				element: <RegisterPage />
			}
		]
	}
]

const routes = role => {
	switch (role) {
		case 'Admin': {
			return [...adminRoutes, ...publicRoutes]
		}

		default: {
			return publicRoutes
		}
	}
}

export default routes
