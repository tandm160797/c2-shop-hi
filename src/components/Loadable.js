import React, { Suspense } from 'react'
import LoadingScreen from 'src/components/LoadingScreen'

const Loadable = Component => props =>
	(
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	)

export default Loadable
