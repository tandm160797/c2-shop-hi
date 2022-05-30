const adminRoutes = []

const publicRoutes = [
	{
		path: '',
		element: '1'
	},
	{
		path: 'login',
		element: '1'
	},
	{
		path: 'register',
		element: '1'
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
