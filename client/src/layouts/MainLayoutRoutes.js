import React from 'react'
import { Route } from 'react-router-dom'

import MainLayout from './MainLayout'

const MainLayoutRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <MainLayout>
                <Component {...props} />
            </MainLayout>
        )} />
    )
}

export default MainLayoutRoutes