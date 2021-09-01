import React from 'react'
import { RouteProps, Route, Redirect, RouteComponentProps } from 'react-router-dom'

type PrivateRouteProps = {
	path: RouteProps['path'];
	component: React.ElementType;
	render?: (props: RouteComponentProps<any>) => React.ReactNode;
	exact?: boolean;
}
const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
	component: Component,
	...routeProps
}) => {
	return (
		<Route
			{...routeProps}
			render={(props) =>
				localStorage.getItem('token') ? <Component /> : <Redirect to='/Auth' />
			}
		/>
	)
}

export default PrivateRoute