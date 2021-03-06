import * as React from 'react'
import { Login } from '../Login'
import { DashBoard } from '../Dashboard'
import { NotFound } from '../NotFound'
import {Redirect, RouteChildrenProps} from 'react-router-dom'
import { OAuth } from '../OAuth'
import { UserPage } from '../UserPage'
import { BoardDetails } from '../BoardDetails'
import { Board } from '../Board'

export enum ROUTES_URLS {
    LOGIN = '/login',
    DASHBOARD = '/dashboard',
    OAUTH = '/oauth',
    NOT_FOUND = '/404',
    HOME = '/',
    USER_PAGE = '/user',
    BOARD_DETAILS = '/board'

}
 
export interface AppRoute {
    path: ROUTES_URLS,
    render: (props: any) => any,
    title?: string,
    isHidden?: boolean,
    exact?: boolean
    isProtected?: boolean
}

export const routes: Array<AppRoute> = [
    {
        path: ROUTES_URLS.LOGIN,
        render: (props: any) => <Login {...props}/>,
        title: 'Login',
        isHidden:true
    },
    {
        path: ROUTES_URLS.DASHBOARD,
        render: (props: RouteChildrenProps) => <DashBoard {...props}/>,
        title: 'Dashboard',
        isProtected: true
    },
    {
        path: ROUTES_URLS.USER_PAGE,
        render: (props: RouteChildrenProps) => <UserPage {...props}/>,
        title: 'UserPage',
        isProtected: true,
        isHidden:true
        
    },
    {
        path: `${ROUTES_URLS.BOARD_DETAILS}/:id` as any,
        render: (props: RouteChildrenProps<{id: string}>) => <BoardDetails {...props}/>,
        title: 'BoardDetails',
        isProtected: true,
        isHidden:true
    },
    {
        path: ROUTES_URLS.HOME,
        render: () => <Redirect to={ROUTES_URLS.LOGIN}/>,
        isHidden: true,
        exact: true
    },
    {
        path: ROUTES_URLS.NOT_FOUND,
        render: (props: RouteChildrenProps) => <NotFound {...props}/>,
        isHidden: true,
    },
    
]